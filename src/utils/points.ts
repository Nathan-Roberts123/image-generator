import prisma from "@/db";

export const getTotalPoints = async ({ userId }: { userId: string }) => {
  const orders = await prisma.order.findMany({
    where: { userId },
  });

  if (!orders.length) {
    return 0;
  }

  let totalPoints = 0;

  for (const order of orders) {
    const product = await prisma.product.findUnique({
      where: { id: order.productId },
    });
    totalPoints += product?.points!;
  }

  const images = await prisma.genaratedImage.findMany({
    where: { userId },
  });

  for (const image of images) {
    totalPoints -= 1;
  }

  return totalPoints;
};
