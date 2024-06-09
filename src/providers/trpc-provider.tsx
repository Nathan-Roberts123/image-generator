"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "@/trpc";
import { useEffect, useState } from "react";
import { getBaseUrl } from "@/utils";
import { useSession } from "next-auth/react";

export default function TrpcProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient, setTrpcClient] = useState(() =>
    trpc.createClient({
      links: [],
    })
  );

  useEffect(() => {
    setTrpcClient(() =>
      trpc.createClient({
        links: [
          httpBatchLink({
            url: `${getBaseUrl()}/api/trpc`,
            // You can pass any HTTP headers you wish here
            async headers() {
              return {
                userId: session?.user.id,
              };
            },
          }),
        ],
      })
    );
  }, [session]);

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
