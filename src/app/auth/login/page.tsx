"use client";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import Wrapper from "../components/wrapper";
import { useForm } from "react-hook-form";
import { TSigninForm } from "@/types";
import { signIn } from "next-auth/react";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

function LoignPage() {
  const { register, handleSubmit } = useForm<TSigninForm>();
  const toast = useToast();
  const router = useRouter();

  const onSubmit = async (data: TSigninForm) => {
    const res = await signIn("credentials", { redirect: false, ...data });

    if (res?.ok) {
      router.push("/");
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
          <Input type="email" {...register("email")} />
        </FormControl>

        <FormControl className="mt-4">
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register("password")} />
        </FormControl>
        <div className="flex justify-center mt-4">
          <Button type="submit" colorScheme="blue">
            Login
          </Button>
        </div>
      </form>
    </Wrapper>
  );
}

export default LoignPage;
