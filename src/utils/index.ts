import bcrypt from "bcryptjs";

export function getBaseUrl() {
  if (typeof window !== "undefined")
    // browser should use relative path
    return "";

  if (process.env.VERCEL_URL)
    // reference for vercel.com
    return `https://${process.env.VERCEL_URL}`;

  if (process.env.RENDER_INTERNAL_HOSTNAME)
    // reference for render.com
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export async function hashString(text: string) {
  const value = await bcrypt.hash(text, 10);
  return value;
}

export async function isSame(plainText: string, encrytedString: string) {
  const value = await bcrypt.compare(plainText, encrytedString);
  return value;
}

export async function downloadImage(imageUrl: string, id: string) {
  const response = await fetch(
    `/api/download-image?url=${encodeURIComponent(imageUrl)}`
  );
  const blob = await response.blob();

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `aiphoto-image-${id}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => URL.revokeObjectURL(link.href), 100);
}
