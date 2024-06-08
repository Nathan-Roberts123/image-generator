import { router } from "../trpc";
import { userRouter } from "./user";
import { imageGeneratorRouter } from "./image-generator";

export const appRouter = router({
  user: userRouter,
  imageGenerator: imageGeneratorRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
