"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";
import Wrapper from "../components/wrapper";
import { TSignupFormState, ZSignupFormState } from "@/types";
import { trpc } from "@/trpc";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSignupFormState>({
    resolver: zodResolver(ZSignupFormState),
  });
  const toast = useToast();
  const router = useRouter();

  const userCreator = trpc.user.create.useMutation();

  async function onSubmit(values: TSignupFormState) {
    try {
      await userCreator.mutateAsync({
        email: values.email,
        password: values.password,
      });
      router.push("/auth/login");
      toast({
        title: "Account created.",
        description: "We've created your account. Please Login",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (e) {
      if (e instanceof Error) {
        if (e.message === "email-exist") {
          toast({
            title: "Account Error.",
            description: "A user with that email already exist.",
            status: "error",
            duration: 90000,
            isClosable: true,
          });
          return;
        }
      }
      toast({
        title: "Account Error.",
        description: "Error occured while creating an account.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <Wrapper type="signup">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input {...register("email")} />
          {errors.email && (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.password} className="mt-4">
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register("password")} />
          {errors.password && (
            <FormErrorMessage>{errors.password.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.confirm_password} className="mt-4">
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" {...register("confirm_password")} />
          {errors.confirm_password && (
            <FormErrorMessage>
              {errors.confirm_password.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <div className="flex justify-center mt-4">
          <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
            Signup
          </Button>
        </div>
      </form>
    </Wrapper>
  );
}

export default SignupPage;
