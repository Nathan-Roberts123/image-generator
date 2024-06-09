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
import { trpc } from "@/trpc";
import { useContext } from "react";
import { ImageDispatchContext } from "@/providers/image-preview-provider";
import { Spinner } from "@chakra-ui/react";

const TextPrompt = () => {
  const dispatch = useContext(ImageDispatchContext);
  const { mutate, isPending } = trpc.imageGenerator.generateImage.useMutation({
    onSuccess: (data) => {
      reset();
      dispatch({ image: data });
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TPrompt>({
    resolver: zodResolver(ZPrompt),
  });

  const onSubmit = (data: TPrompt) => {
    mutate({ ...data });
  };

  return (
    <>
      {isPending && (
        <>
          <div className="flex items-center gap-2 justify-center">
            <span>Please Wait While Generating image</span> <Spinner />
          </div>
        </>
      )}
      {!isPending && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.text}>
            <FormLabel htmlFor="name">Enter Text Promt</FormLabel>
            <Textarea
              id="name"
              placeholder="Enter prompt"
              rows={5}
              disabled={isPending}
              {...register("text")}
            />
            <FormErrorMessage>
              {!!errors.text && errors.text.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
            disabled={isPending}
          >
            Submit
          </Button>
        </form>
      )}
    </>
  );
};

export default TextPrompt;
