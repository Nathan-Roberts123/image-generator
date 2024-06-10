import { router, procedure } from "../trpc";
import { ZUser } from "@/types";
import prisma from "@/db";
import { hashString } from "@/utils";
import { Prisma } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import { getTotalPoints } from "@/utils/points";

export const userRouter = router({
  create: procedure.input(ZUser).mutation(async ({ input }) => {
    const hashedPassword = await hashString(input.password);
    const newData = { ...input, password: hashedPassword };
    try {
      const user = await prisma.user.create({ data: newData });
      await prisma.account.create({
        data: {
          userId: user.id,
          type: "oauth",
          provider: "credentials",
          providerAccountId: uuidv4(),
        },
      });
      return { email: user.email };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.meta) {
          if (e.meta.modelName === "User") {
            if (e.code === "P2002") {
              throw new Error("email-exist");
            }
          }
        }
      }
      throw e;
    }
  }),
  getPoints: procedure.query(async ({ ctx }) => {
    if (!ctx.userId) {
      throw new Error("Failed To Get A userId");
    }

    return await getTotalPoints({ userId: ctx.userId });
  }),
});
