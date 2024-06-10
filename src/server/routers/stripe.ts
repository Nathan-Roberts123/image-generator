import stripe from "stripe";
import { procedure, router } from "../trpc";
import { env } from "@/env";
import { z } from "zod";
import { getBaseUrl } from "@/utils";

const Stripe = new stripe(env.STRIPE_SECRET_KEY);

export const stripeRouter = router({
  createCheckoutSession: procedure
    .input(
      z.object({
        price_id: z.string(),
        product_id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const session = await Stripe.checkout.sessions.create({
        line_items: [{ price: input.price_id, quantity: 1 }],
        mode: "payment",
        metadata: {
          userId: ctx.userId,
          productId: input.product_id,
        },
        success_url: `${getBaseUrl()}/payment-success?success=true`,
        cancel_url: `${getBaseUrl()}/?canceled=true`,
      });

      if (session.url) {
        return { url: session.url };
      }
      throw new Error("Session Url was not found");
    }),
});
