import { fileURLToPath } from "node:url";
import createJiti from "jiti";
const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti we can import .ts files :)
jiti("./src/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ignored build errors: later
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "standalone",
  // Forces Next.js to trace and include sharp binaries in the standalone folder
  outputFileTracingIncludes: {
    '/**': ['./node_modules/sharp/**/*', './node_modules/@img/**/*'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image-generator-526tw.s3.us-east-1.amazonaws.com', // Replace with your image provider's domain
        pathname: '/**',          // Allows all paths under this domain
      },
    ],
  },
};

export default nextConfig;
