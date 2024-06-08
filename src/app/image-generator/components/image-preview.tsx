"use client";
import { Button, Image } from "@chakra-ui/react";
import { HiOutlineSave } from "react-icons/hi";
import { ImageContext } from "@/providers/image-preview-provider";
import { useContext } from "react";

const ImagePreview = () => {
  const image = useContext(ImageContext);

  return (
    <div className="bg-neutral-50 p-4 mb-4 rounded-md">
      {image && (
        <>
          <div className="flex flex-col gap-3">
            <Image src={image.imageUrl} alt="Generated Image" />
            <div>{image.text}</div>
          </div>
          <div className="mt-4">
            <Button>
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
