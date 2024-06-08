import { GiSaveArrow } from "react-icons/gi";
import { Image } from "@chakra-ui/react";

type ImageCardProps = {
  imageUrl: string;
  text: string;
};
const ImageCard = ({ imageUrl, text }: ImageCardProps) => {
  return (
    <div className="flex flex-col justify-between lg:flex-row border p-3 rounded-md h-fit w-full">
      <div className="relative h-fit">
        <Image
          boxSize="200px"
          src={imageUrl}
          alt="Generated Image"
          className="rounded-md w-full object-cover"
        />
        <button className="transition-colors absolute bottom-4 left-4 bg-teal-700 text-white rounded-md p-2 hover:bg-teal-600">
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
