-- CreateTable
CREATE TABLE "GenaratedImage" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GenaratedImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GenaratedImage" ADD CONSTRAINT "GenaratedImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
