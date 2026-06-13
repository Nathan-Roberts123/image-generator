import { env } from "@/env";
import { TPrompt } from "@/types";
import OpenAI from "openai";

export async function generateImage(promt: TPrompt) {
  const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
  });

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: promt.text,
    n: 1,
    size: "1024x1024",
    response_format: "b64_json",
  });

  return response.data[0].b64_json;
}
