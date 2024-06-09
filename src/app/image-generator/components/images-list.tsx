import React from "react";
import ImageCard from "./image-card";
import { createCaller } from "@/server/serverClient";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/authOptions";

const ImagesList = async () => {
  const session = await getServerSession(authOptions);
  const caller = createCaller({ userId: session?.user.id! });

  const images = await caller.imageGenerator.getImages();

  return (
    <div className="flex flex-col gap-8 w-full">
      {images.map((image) => {
        return <ImageCard key={image.id} {...image} />;
      })}
    </div>
  );
};

export default ImagesList;
