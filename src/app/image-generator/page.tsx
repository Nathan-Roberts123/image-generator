import { Image } from "@chakra-ui/react";
import TextPrompt from "./components/text-prompt";

function Page() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 md:col-span-2">
        <TextPrompt />
      </div>
      <div className="">
        <Image
          boxSize="200px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </div>
    </div>
  );
}

export default Page;
