import { Heading } from "@chakra-ui/react";
import HomeImage from "./components/home-image";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="py-8 px-2 bg-slate-100 h-fit text-center">
      <Heading
        as="h2"
        size="2xl"
        className="text-center gradient-text h-fit p-3"
      >
        Transform Your Imagination into Reality with AI Image Generation
      </Heading>
      <Text fontSize="2xl" className="text-center text-pink-600 h-fit mt-5">
        Harness the power of artificial intelligence to generate unique and
        stunning visuals.
      </Text>
      <div className="flex justify-center">
        <div className="mt-20 p-6 grid grid-cols-3 gap-10">
          <HomeImage
            url="/images-examples/ai-pig.png"
            text="Pigs playing in a farm"
          />
          <HomeImage
            url="/images-examples/moses.png"
            text="Moses spliting the red sea"
          />
          <HomeImage url="/images-examples/tigers.png" text="Tigers" />
        </div>
      </div>
      <Button
        as={Link}
        href="/image-generator"
        colorScheme="teal"
        className="mt-10 px-44"
        px={10}
      >
        Start Generating Images Now
      </Button>
    </div>
  );
}
