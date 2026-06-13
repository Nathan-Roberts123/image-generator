import { Prisma } from "@prisma/client";
import prisma from "../src/db";

const products: Prisma.ProductCreateInput[] = [
  {
    points: 10,
    price: 0.5,
    stripe_price_id: "prod_QGvXj6GIlAYl2p",
  },
  {
    points: 100,
    price: 5,
    stripe_price_id: "prod_QGbIPYMX0C4LfX",
  },
  {
    points: 200,
    price: 10,
    stripe_price_id: "prod_QGbIQMpOdRxZQX",
  },
];

export async function main() {
  for (const p of products) {
    await prisma.product.upsert({
      where: {
        stripe_price_id: p.stripe_price_id,
      },
      update: {},
      create: { ...p },
    });
  }
}

main();
