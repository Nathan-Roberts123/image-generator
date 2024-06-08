/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `GenaratedImage` table. All the data in the column will be lost.
  - Added the required column `imageName` to the `GenaratedImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GenaratedImage" DROP COLUMN "imageUrl",
ADD COLUMN     "imageName" TEXT NOT NULL;
