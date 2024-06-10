"use client";
import { GiSaveArrow } from "react-icons/gi";
import Image from "next/image";
import { downloadImage } from "@/utils";
import { useToast } from "@chakra-ui/react";
import { GeneratedImage } from "@/types";

type ImageCardProps = {
  image: GeneratedImage;
};
const ImageCard = ({ image }: ImageCardProps) => {
  const { id, imageUrl, text } = image;

  const toast = useToast();
  return (
    <div className="flex flex-col justify-between items-center lg:items-start lg:flex-row lg:gap-3 border p-3 rounded-md h-fit w-full">
      <div className="relative h-fit">
        <Image
          width={190}
          height={190}
          src={imageUrl}
          alt="Generated Image"
          className="rounded-md object-cover"
        />
        <button
          onClick={async () => {
            try {
              const filePromise = new Promise((resolve, reject) => {
                downloadImage(imageUrl, id).then(() => resolve(1));
              });

              toast.promise(filePromise, {
                success: {
                  title: "File Downloaded Successfully",
                  description: "Looks great",
                },
                error: {
                  title: "Promise rejected",
                  description: "Something wrong",
                },
                loading: {
                  title: "File is loading",
                  description: "Please wait",
                },
              });
            } catch (error) {
              console.error("Error downloading the image:", error);
            }
          }}
          className="transition-colors absolute bottom-4 left-4 bg-teal-700 text-white rounded-md p-2 hover:bg-teal-600"
        >
          <GiSaveArrow />
        </button>
      </div>
      <div className="lg:w-2/3 text-left">
        <p className="text-wrap">{text}</p>
      </div>
    </div>
  );
};

export default ImageCard;
