import React from "react";
import { Button } from "@chakra-ui/react";

const BuyPointCard = ({ points, price }: { points: number; price: number }) => {
  return (
    <div className="border p-2 w-full text-center rounded-md">
      <div className="text-xl font-bold">{points}</div>
      <div className="">Points</div>
      <div className="text-xl font-bold mt-4">${price}</div>
      <Button colorScheme="teal" className="w-full mt-3">
        Buy Points
      </Button>
    </div>
  );
};

export default BuyPointCard;
