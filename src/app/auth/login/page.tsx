"use client";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import Wrapper from "../components/wrapper";
import { useForm } from "react-hook-form";
import { TSigninForm } from "@/types";
import { signIn } from "next-auth/react";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

function LoignPage() {
  const [logIn, setLogin] = useState(false);
  const { register, handleSubmit } = useForm<TSigninForm>();
  const toast = useToast();

  const onSubmit = async (data: TSigninForm) => {
    const res = await signIn("credentials", { redirect: false, ...data });

    if (res?.ok) {
      window.location.href = "/";
      setLogin(false);
      return;
    }

    toast({
      title: "Error While Logging In.",
      description: "Make sure you credentials are correct",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Wrapper type="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" {...register("email")} disabled={logIn} />
        </FormControl>

        <FormControl className="mt-4">
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register("password")} disabled={logIn} />
        </FormControl>
        <div className="flex justify-center mt-4">
          <Button type="submit" colorScheme="blue" disabled={logIn}>
            Login
          </Button>
        </div>
      </form>
    </Wrapper>
  );
}

export default LoignPage;
