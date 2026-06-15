import { Prisma } from "@prisma/client";
import prisma from "../src/db";

const products: Prisma.ProductCreateInput[] = [
  {
    points: 10,
    price: 0.5,
    stripe_price_id: "price_1TibRVIdyR8QwdOfKKxlWHF4",
  },
  {
    points: 100,
    price: 5,
    stripe_price_id: "price_1TibSyIdyR8QwdOfSxKICqam",
  },
  {
    points: 200,
    price: 10,
    stripe_price_id: "price_1TibTfIdyR8QwdOfUbQrnv1X",
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
