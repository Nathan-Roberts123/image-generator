"use client";
import React from "react";
import { Button } from "@chakra-ui/react";
import { Product } from "@/types";
import { trpc } from "@/trpc";
import { useRouter } from "next/navigation";

const BuyPointCard = ({ points, price, stripe_price_id, id }: Product) => {
  const router = useRouter();
  const { mutate } = trpc.stripe.createCheckoutSession.useMutation({
    onSuccess: (data) => {
      router.push(data.url);
    },
  });
  return (
    <div className="border p-2 w-full text-center rounded-md">
      <div className="text-xl font-bold">{points}</div>
      <div className="">Points</div>
      <div className="text-xl font-bold mt-4">${price}</div>
      <Button
        onClick={() => {
          mutate({ price_id: stripe_price_id, product_id: id });
        }}
        colorScheme="teal"
        className="w-full mt-3"
      >
        Buy Points
      </Button>
    </div>
  );
};

export default BuyPointCard;
