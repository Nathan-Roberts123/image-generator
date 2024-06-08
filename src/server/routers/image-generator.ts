import { router, procedure } from "../trpc";
import { ZPrompt } from "@/types";
import { generateImage } from "@/utils/openai";

export const imageGeneratorRouter = router({
  generateImage: procedure.input(ZPrompt).mutation(({ input }) => {
    const image = generateImage({ text: input.text });
    console.log(image);
    return "image";
  }),
});
