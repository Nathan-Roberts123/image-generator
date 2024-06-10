"use client";
import TrpcProvider from "./trpc-provider";
import { ChakraProvider } from "@chakra-ui/react";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import ImagePreviewProvider from "./image-preview-provider";
import ProductsProvider from "./products-provider";
import { Product } from "@/types";
import PointsProvider from "./points-provider";

function Providers({
  children,
  session,
  products,
}: {
  children: React.ReactNode;
  session: Session | null;
  products: Product[];
}) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <TrpcProvider>
          <PointsProvider>
            <ProductsProvider products={products}>
              <ImagePreviewProvider>{children}</ImagePreviewProvider>
            </ProductsProvider>
          </PointsProvider>
        </TrpcProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default Providers;
