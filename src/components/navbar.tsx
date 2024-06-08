"use client";
import { Button, Link } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Heading } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Spacer } from "@chakra-ui/react";
import { ButtonGroup } from "@chakra-ui/react";
import NextLink from "next/link";
import { useDisclosure } from "@chakra-ui/react";
import BuyPointsModal from "./buy-points-modal";

function Navbar() {
  const { status, data: session } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  console.log({ session });

  return (
    <>
      <BuyPointsModal isOpen={isOpen} onClose={onClose} />
      <Flex
        minWidth="max-content"
        alignItems="center"
        className="bg-teal-700 px-2 py-2"
      >
        <Box className="flex items-center text-center">
          <Heading size="sm" className="text-white text-center">
            <Link href="/">AI Image App</Link>
          </Heading>

          <div className="flex items-center ml-2 md:ml-14 text-white gap-4">
            <Link className="text-white" as={NextLink} href="/image-generator">
              Generate Image
            </Link>
          </div>
        </Box>
        <Spacer />
        <div className="mr-4 bg-teal-600 p-2 rounded-lg text-white font-bold">
          10
        </div>
        <ButtonGroup gap="2">
          <Button colorScheme="teal" onClick={onOpen}>
            Buy Points
          </Button>
          {status !== "authenticated" ? (
            <Button colorScheme="teal" onClick={() => signIn()}>
              Signin
            </Button>
          ) : (
            <Button colorScheme="teal" onClick={() => signOut()}>
              Logout
            </Button>
          )}
        </ButtonGroup>
      </Flex>
    </>
  );
}

export default Navbar;
