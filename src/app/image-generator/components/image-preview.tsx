import { Button, Image } from "@chakra-ui/react";
import { HiOutlineSave } from "react-icons/hi";

const ImagePreview = () => {
  return (
    <div className="bg-neutral-50 p-4 mb-4 rounded-md">
      <div className="flex flex-col md:flex-row gap-3">
        <Image
          boxSize="200px"
          src="https://bit.ly/dan-abramov"
          alt="Generated Image"
        />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eum
          magni nesciunt dolorum voluptas quos nostrum, similique dicta sit,
          vitae consequatur in blanditiis iure quam, commodi aperiam eos.
          Nesciunt, quibusdam!
        </div>
      </div>
      <div className="mt-4">
        <Button>
          save
          <HiOutlineSave className="text-2xl ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default ImagePreview;
