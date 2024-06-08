import { router, procedure } from "../trpc";
import { GeneratedImage, ZPrompt } from "@/types";
import { generateImage } from "@/utils/openai";
import prisma from "@/db";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { env } from "@/env";
import { v4 as uuidv4 } from "uuid";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY,
    secretAccessKey: env.AWS_SECRET_KEY,
  },
  region: env.BUCKET_REGION,
});

export const imageGeneratorRouter = router({
  generateImage: procedure.input(ZPrompt).mutation(async ({ input, ctx }) => {
    const imageB64 = await generateImage({ text: input.text });

    if (!ctx.userId) {
      throw new Error("Failed To Get A userId");
    }

    if (!imageB64) {
      throw new Error("Failed To Generate Image");
    }
    const buf = Buffer.from(imageB64, "base64");

    const imageName = uuidv4();
    const putCommand = new PutObjectCommand({
      Body: buf,
      Key: imageName,
      Bucket: env.BUCKET_NAME,
      ContentType: "png",
    });

    await s3Client.send(putCommand);

    const generatedImage = await prisma.genaratedImage.create({
      data: { userId: ctx.userId, imageName: imageName, text: input.text },
      select: { id: true, imageName: true, text: true },
    });

    const command = new GetObjectCommand({
      Bucket: env.BUCKET_NAME,
      Key: generatedImage.imageName,
    });
    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

    return {
      id: generatedImage.id,
      imageUrl: url,
      text: generatedImage.text,
    };
  }),

  getImages: procedure.query(async ({ ctx }) => {
    if (!ctx.userId) {
      throw new Error("Failed To Get A userId");
    }

    const images = await prisma.genaratedImage.findMany({
      where: {
        userId: ctx.userId,
      },
      select: {
        id: true,
        imageName: true,
        text: true,
      },
    });

    const generatedImages: GeneratedImage[] = [];

    for (const image of images) {
      const command = new GetObjectCommand({
        Bucket: env.BUCKET_NAME,
        Key: image.imageName,
      });
      const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

      generatedImages.push({
        id: image.id,
        imageUrl: url,
        text: image.text,
      });
    }

    return generatedImages;
  }),
});
