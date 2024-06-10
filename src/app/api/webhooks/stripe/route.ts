import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { env } from "@/env";
import prisma from "@/db";

const stripe = new Stripe(env.STRIPE_SECRET_KEY);
const webhookSecret = env.STRIPE_WEBHOOK_SECRET;

const createOrder = async ({
  userId,
  productId,
}: {
  userId: string;
  productId: string;
}) => {
  await prisma.order.create({
    data: {
      userId,
      productId,
    },
  });
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error(`⚠️  Webhook signature verification failed.`, err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session_complete = event.data.object;
      if (session_complete.payment_status === "paid") {
        if (!session_complete.metadata) {
          return new NextResponse(`Could Not Create Order Metadata Was Null`, {
            status: 400,
          });
        }
        const productId = session_complete.metadata["productId"];
        const userId = session_complete.metadata["userId"];
        await createOrder({ userId, productId });
      }

      break;
    case "checkout.session.async_payment_failed":
      const session_failed = event.data.object;
      console.error(`⚠️  Session Failed.`);
      return new NextResponse(`sessin failed`, {
        status: 400,
      });
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  return NextResponse.json({ received: true });
};
