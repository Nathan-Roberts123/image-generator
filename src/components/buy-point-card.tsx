"use client";
import React from "react";
import { Button } from "@chakra-ui/react";
import { Product } from "@/types";
import { trpc } from "@/trpc";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type BuyPointCardProps = {
  product: Product;
  onClose: () => void;
};

const BuyPointCard = ({ product, onClose }: BuyPointCardProps) => {
  const { points, price, stripe_price_id, id } = product;
  const { data: session } = useSession();

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
          if (session) {
            mutate({ price_id: stripe_price_id, product_id: id });
          } else {
            onClose();
            router.push("/auth/login");
          }
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
