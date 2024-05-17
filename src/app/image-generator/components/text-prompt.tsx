"use client";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZPrompt, TPrompt } from "@/types";

const TextPrompt = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TPrompt>({
    resolver: zodResolver(ZPrompt),
  });

  const onSubmit = (data: TPrompt) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.text}>
        <FormLabel htmlFor="name">Enter Text Promt</FormLabel>
        <Textarea id="name" placeholder="Enter prompt" {...register("text")} />
        <FormErrorMessage>
          {!!errors.text && errors.text.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default TextPrompt;
