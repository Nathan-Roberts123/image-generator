import TextPrompt from "./components/text-prompt";

import ImageCard from "./components/image-card";
import ImagePreview from "./components/image-preview";

function Page() {
  return (
    <div className="grid grid-cols-4 gap-8 p-4">
      <div className="col-span-4 md:col-span-2">
        <ImagePreview />
        <TextPrompt />
      </div>
      <div className="col-span-4 md:col-span-2 px-4 py-4 bg-neutral-50 flex rounded-md gap-3 h-[530px] overflow-y-scroll">
        <div className="grid grid-cols-4 gap-8">
          <ImageCard />
        </div>
      </div>
    </div>
  );
}

export default Page;
