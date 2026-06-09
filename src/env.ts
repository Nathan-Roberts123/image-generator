// Now there is no validation when you RUN 'npm run dev'

// import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// export const env = createEnv({
//   server: {
//     DATABASE_URL: z.string().url(),
//     GOOGLE_CLIENT_ID: z.string(),
//     GOOGLE_CLIENT_SECRET: z.string(),
//     OPENAI_API_KEY: z.string(),
//     BUCKET_REGION: z.string(),
//     BUCKET_NAME: z.string(),
//     AWS_ACCESS_KEY_ID: z.string(),
//     AWS_SECRET_KEY_ID: z.string(),
//     STRIPE_SECRET_KEY: z.string(),
//     STRIPE_WEBHOOK_SECRET: z.string(),
//   },
//   client: {},
//   // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
//   runtimeEnv: {
//     DATABASE_URL: process.env.DATABASE_URL,
//     GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
//     GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
//     OPENAI_API_KEY: process.env.OPENAI_API_KEY,
//     BUCKET_REGION: process.env.BUCKET_REGION,
//     BUCKET_NAME: process.env.BUCKET_NAME,
//     AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
//     AWS_SECRET_KEY_ID: process.env.AWS_SECRET_KEY_ID,
//     STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
//     STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
//   },
//   // For Next.js >= 13.4.4, you only need to destructure client variables:
//   // experimental__runtimeEnv: {
//   //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
//   // }
// });

const serverEnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  OPENAI_API_KEY: z.string(),
  BUCKET_REGION: z.string(),
  BUCKET_NAME: z.string(),
  AWS_ACCESS_KEY_ID: z.string(),
  AWS_SECRET_KEY_ID: z.string(),
  STRIPE_SECRET_KEY: z.string(),
  STRIPE_WEBHOOK_SECRET: z.string(),
});

// This function is not used anywhre, its just exported
export function getServerEnv() {
  return serverEnvSchema.parse(process.env);
}

// in our server side code

/*
import { getServerEnv } from "@/lib/env";

export async function POST() {
  const env = getServerEnv();

  return Response.json({
    ok: !!env.DATABASE_URL,
  });
}
*/
