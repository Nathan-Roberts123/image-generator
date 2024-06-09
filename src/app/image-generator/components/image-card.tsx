"use client";
import { GiSaveArrow } from "react-icons/gi";
import { Image } from "@chakra-ui/react";
import { downloadImage } from "@/utils";
import { useToast } from "@chakra-ui/react";

type ImageCardProps = {
  id: string;
  imageUrl: string;
  text: string;
};
const ImageCard = ({ id, imageUrl, text }: ImageCardProps) => {
  const toast = useToast();
  return (
    <div className="flex flex-col justify-between lg:flex-row border p-3 rounded-md h-fit w-full">
      <div className="relative h-fit">
        <Image
          boxSize="200px"
          src={imageUrl}
          alt="Generated Image"
          className="rounded-md w-full object-cover"
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
      <div className="lg:w-3/5 text-left">
        <p className="text-wrap">{text}</p>
      </div>
    </div>
  );
};

export default ImageCard;
