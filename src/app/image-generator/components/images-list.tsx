"use client";
import { GeneratedImage } from "@/types";
import ImageCard from "./image-card";
import { trpc } from "@/trpc";
import { useContext, useEffect } from "react";
import { ImageContext } from "@/providers/image-preview-provider";

const ImagesList = ({ initialImages }: { initialImages: GeneratedImage[] }) => {
  const { data: images, refetch } = trpc.imageGenerator.getImages.useQuery(
    undefined,
    {
      initialData: initialImages,
    }
  );
  const image = useContext(ImageContext);

  useEffect(() => {
    refetch();
  }, [image, refetch]);

  return (
    <div className="flex flex-col gap-8 w-full">
      {images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
      })}
    </div>
  );
};

export default ImagesList;
