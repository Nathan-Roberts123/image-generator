"use client";
import { Button } from "@chakra-ui/react";
import { HiOutlineSave } from "react-icons/hi";
import { ImageContext } from "@/providers/image-preview-provider";
import { useContext } from "react";
import { downloadImage } from "@/utils";
import { useToast } from "@chakra-ui/react";
import Image from "next/image";

const ImagePreview = () => {
  const image = useContext(ImageContext);
  const toast = useToast();

  return (
    <div className="bg-neutral-50 p-4 mb-4 rounded-md">
      {image && (
        <>
          <div className="flex flex-col gap-3">
            <Image
              width={1024}
              height={1024}
              src={image.imageUrl}
              alt="Generated Image"
            />
            <div>{image.text}</div>
          </div>
          <div className="mt-4">
            <Button
              onClick={async () => {
                const filePromise = new Promise((resolve, reject) => {
                  downloadImage(image.imageUrl, image.id).then(() =>
                    resolve(1)
                  );
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
              }}
            >
              save
              <HiOutlineSave className="text-2xl ml-2" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ImagePreview;
