import { env } from "@/env";
import { TPrompt } from "@/types";
import OpenAI from "openai";

export async function generateImage(promt: TPrompt) {
  const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
  });

  const response = await openai.images.generate({
    model: "gpt-image-2",
    prompt: promt.text,
    n: 1,
    size: "1024x1024",
    response_format: "b64_json",
  });

  const image_base64 = response.data[0].b64_json;

  return image_base64;

  // const imageUrl = response.data[0].url;
  //
  // if (!imageUrl) {
  //   throw new
  // }
  //
  // // Fetch the image file and convert it into a base64 string
  // const imageResponse = await fetch(imageUrl);
  // const arrayBuffer = await imageResponse.arrayBuffer();
  // const buffer = Buffer.from(arrayBuffer);
  // const base64Image = buffer.toString("base64");
  //
  // const b64JsonOutput = `data:image/png;base64,${base64Image}`;
  //
  // return b64JsonOutput;
}
