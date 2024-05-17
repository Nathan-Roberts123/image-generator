import { router, procedure } from "../trpc";
import { ZPrompt } from "@/types";

const imageGeneratorRouter = router({
  generateImage: procedure.input(ZPrompt).mutation(() => {
    return "image";
  }),
});
