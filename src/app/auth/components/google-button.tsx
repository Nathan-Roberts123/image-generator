"use client";
import { Button } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

const GoogleButton = () => {
  return (
    <Button
      leftIcon={<FaGoogle />}
      colorScheme="teal"
      variant="solid"
      className="mt-4 mx-6"
      onClick={() => signIn("google", { callbackUrl: "/" })}
    >
      Continue with google
    </Button>
  );
};

export default GoogleButton;
