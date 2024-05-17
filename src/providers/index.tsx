"use client";
import TrpcProvider from "./trpc-provider";
import { ChakraProvider } from "@chakra-ui/react";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <TrpcProvider>{children}</TrpcProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default Providers;
