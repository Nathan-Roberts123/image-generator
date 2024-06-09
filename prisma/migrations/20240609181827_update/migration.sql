/*
  Warnings:

  - A unique constraint covering the columns `[stripe_price_id]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_stripe_price_id_key" ON "Product"("stripe_price_id");
