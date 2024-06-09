import React from "react";
import Image from "next/image";

type HomeImageType = {
  url: string;
  text: string;
};

const HomeImage = ({ url, text }: HomeImageType) => {
  return (
    <div className="flex flex-col w-fit gap-2 col-span-3 md:col-span-1">
      <Image
        alt="pig image"
        src={url}
        width={360}
        height={360}
        className="rounded-md"
      />
      <div className="font-semibold">{text}</div>
    </div>
  );
};

export default HomeImage;
