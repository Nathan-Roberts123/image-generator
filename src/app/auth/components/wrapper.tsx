import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Link,
  Text,
  Divider,
  AbsoluteCenter,
  Box,
  Button,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import NextLink from "next/link";

const Wrapper = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "login" | "signup";
}) => {
  return (
    <div className="flex flex-col justify-center h-full items-center">
      <Card className="w-full md:w-1/2 lg:w-1/3">
        <Button
          leftIcon={<FaGoogle />}
          colorScheme="teal"
          variant="solid"
          className="mt-4 mx-6"
        >
          Continue with google
        </Button>
        <Box position="relative" className="px-6 pt-6">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            or
          </AbsoluteCenter>
        </Box>
        <CardHeader>
          <Heading className="text-center" size="md">
            <div>
              {type === "signup"
                ? "Create An Account"
                : "Login to your account"}
            </div>
          </Heading>
        </CardHeader>
        <CardBody className="w-full">{children}</CardBody>
      </Card>
      <Text className="mt-2">
        <Link
          as={NextLink}
          href={type === "login" ? "/auth/signup" : "/auth/login"}
          color="blue.400"
          _hover={{ color: "blue.500" }}
        >
          {type === "login" ? "Signup" : "Login"}
        </Link>
        {type === "login"
          ? " if you don't have an account"
          : " if you have an account"}
      </Text>
    </div>
  );
};

export default Wrapper;
