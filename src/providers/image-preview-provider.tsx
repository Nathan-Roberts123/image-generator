"use client";
import { GeneratedImage } from "@/types";
import React, { createContext, useReducer } from "react";

export const ImageContext = createContext<GeneratedImage | null>(null);
export const ImageDispatchContext = createContext(
  ({ image }: { image: GeneratedImage | null }) => {}
);

type ActionType = { image: GeneratedImage | null };

const imageReducer = (image: GeneratedImage | null, action: ActionType) => {
  return action.image;
};

function ImagePreviewProvider({ children }: { children: React.ReactNode }) {
  const [image, dispatch] = useReducer(imageReducer, null);

  return (
    <ImageContext.Provider value={image}>
      <ImageDispatchContext.Provider value={dispatch}>
        {children}
      </ImageDispatchContext.Provider>
    </ImageContext.Provider>
  );
}

export default ImagePreviewProvider;
