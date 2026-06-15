import { env } from "@/env";
import { TPrompt } from "@/types";
import OpenAI from "openai";

export async function generateImage(promt: TPrompt) {
  const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
  });

  const response = await openai.images.generate({
    model: "gpt-image-1-mini",
    prompt: promt.text,
    n: 1,
    size: "1024x1024",
    quality: "standard",
  });

  const image_base64 = response.data[0].b64_json;

  return image_base64;
}
