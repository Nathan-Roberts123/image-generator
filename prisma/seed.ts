import { Prisma } from "@prisma/client";
import prisma from "../src/db";

const products: Prisma.ProductCreateInput[] = [
  {
    points: 10,
    price: 0.5,
    stripe_price_id: "price_1PQNgjIdyR8QwdOfMUBBz9uR",
  },
  {
    points: 100,
    price: 5,
    stripe_price_id: "price_1PQ45RIdyR8QwdOfwHQYtl4G",
  },
  {
    points: 200,
    price: 10,
    stripe_price_id: "price_1PQ46BIdyR8QwdOfFV3bV5Ve",
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
