import React from "react";
import HomeImage from "./home-image";

const HomeImagesIist = () => {
  return (
    <div className="mt-20 p-6 grid grid-cols-3 gap-10">
      <HomeImage
        url="/images-examples/ai-pig.png"
        text="Pigs playing in a farm"
      />
      <HomeImage
        url="/images-examples/moses.png"
        text="Moses spliting the red sea"
      />
      <HomeImage url="/images-examples/tigers.png" text="Tigers" />
    </div>
  );
};

export default HomeImagesIist;
