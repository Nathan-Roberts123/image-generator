import TextPrompt from "./components/text-prompt";
import ImagePreview from "./components/image-preview";
import ImagesList from "./components/images-list";

function Page() {
  return (
    <div className="grid grid-cols-4 gap-8 p-4">
      <div className="col-span-4 md:col-span-2">
        <ImagePreview />
        <TextPrompt />
      </div>
      <div className="col-span-4 md:col-span-2 px-4 py-4 bg-neutral-50 flex rounded-md gap-3 max-h-[1000px] overflow-y-scroll w-full">
        <ImagesList />
      </div>
    </div>
  );
}

export default Page;
