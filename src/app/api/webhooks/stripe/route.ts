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
      console.log({ session_complete });
      break;
    case "checkout.session.async_payment_failed":
      const session_failed = event.data.object;
      console.log({ session_failed });
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  return NextResponse.json({ received: true });
};
