import { z } from "zod";

export const ZSignupFormState = z
  .object({
    email: z.string().email(),
    password: z.string().min(4),
    confirm_password: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.confirm_password;
    },
    {
      message: "Passwords must match",
      path: ["confirm_password"],
    }
  );

export type TSignupFormState = z.infer<typeof ZSignupFormState>;

export const ZSigninForm = z.object({
  email: z.string(),
  password: z.string(),
});

export type TSigninForm = z.infer<typeof ZSigninForm>;

export const ZUser = z.object({
  email: z.string(),
  password: z.string(),
});

export type TUser = z.infer<typeof ZUser>;

export const ZPrompt = z.object({
  text: z.string(),
});

export type TPrompt = z.infer<typeof ZPrompt>;

export type GeneratedImage = {
  id: string;
  imageUrl: string;
  text: string;
};

export type Product = {
  id: string;
  points: number;
  price: number;
};
