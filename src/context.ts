import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

export async function createContext(opts: FetchCreateContextFnOptions) {
  const userId = opts.req.headers.get("userId");
  return {
    userId,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
