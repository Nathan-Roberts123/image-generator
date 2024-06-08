"use client";
import TrpcProvider from "./trpc-provider";
import { ChakraProvider } from "@chakra-ui/react";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import ImagePreviewProvider from "./image-preview-provider";
import ProductsProvider from "./products-provider";
import { Product } from "@/types";

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
          <ProductsProvider products={products}>
            <ImagePreviewProvider>{children}</ImagePreviewProvider>
          </ProductsProvider>
        </TrpcProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default Providers;
