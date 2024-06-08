import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/authOptions";
import "./globals.css";
import React from "react";
import Providers from "@/providers";
import { fonts } from "./fonts";
import { MainLayout } from "@/components/main-layout";

export const metadata: Metadata = {
  title: "Image Generator",
  description: "This web app uses AI to generate images",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${fonts.rubik.variable} h-screen`}>
        <Providers session={session}>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
