import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/authOptions";
import "./globals.css";
import React from "react";
import Providers from "@/providers";
import { fonts } from "./fonts";
import { MainLayout } from "@/components/main-layout";
import prisma from "@/db";
import { unstable_noStore as noStore } from "next/cache";

export const metadata: Metadata = {
  title: "Image Generator",
  description: "This web app uses AI to generate images",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  noStore();
  const session = await getServerSession(authOptions);
  const products = await prisma.product.findMany();

  return (
    <html lang="en">
      <body className={`${fonts.rubik.variable} h-screen`}>
        <Providers session={session} products={products}>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
