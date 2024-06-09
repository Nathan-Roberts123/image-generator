import { router } from "../trpc";
import { userRouter } from "./user";
import { imageGeneratorRouter } from "./image-generator";
import { stripeRouter } from "./stripe";
import { orderRouter } from "./order";

export const appRouter = router({
  user: userRouter,
  imageGenerator: imageGeneratorRouter,
  stripe: stripeRouter,
  order: orderRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
