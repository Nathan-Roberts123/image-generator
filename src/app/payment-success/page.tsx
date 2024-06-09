import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

const PaymentSuccess = () => {
  return (
    <div className="h-[500px] flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <FaCircleCheck className="text-4xl" />
        <span className="text-lg font-semibold">
          Payment Was Successfully, Enjoy Generating Images
        </span>
        <Link as={NextLink} href="/image-generator">
          Generate Images
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
