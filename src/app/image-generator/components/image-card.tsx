import { GiSaveArrow } from "react-icons/gi";
import { Image } from "@chakra-ui/react";

const ImageCard = () => {
  return (
    <div className="col-span-4 grid grid-cols-4 border p-3 rounded-md h-fit gap-4">
      <div className="col-span-4 md:col-span-2 relative h-fit">
        <Image
          src="https://bit.ly/dan-abramov"
          alt="Generated Image"
          className="rounded-md w-full"
        />
        <button className="transition-colors absolute bottom-4 left-4 bg-teal-700 text-white rounded-md p-2 hover:bg-teal-600">
          <GiSaveArrow />
        </button>
      </div>
      <div className="col-span-4 md:col-span-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eum magni
        nesciunt dolorum voluptas quos nostrum, similique dicta sit, vitae
        consequatur in blanditiis iure quam, commodi aperiam eos. Nesciunt,
        quibusdam!
      </div>
    </div>
  );
};

export default ImageCard;
