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

function Navbar() {
  const { status } = useSession();

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        className="bg-teal-700 px-2 py-2"
      >
        <Box className="flex items-center text-center">
          <Heading size="sm" className="text-white text-center">
            AI Image App
          </Heading>

          <div className="flex items-center ml-14 text-white gap-4">
            <Link className="text-white">Contact</Link>
            <Link className="text-white" as={NextLink} href="/image-generator">
              Generate Image
            </Link>
          </div>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
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
