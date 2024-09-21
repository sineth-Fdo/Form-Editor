import { useText } from "@/app/(form)/contexts/StateContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { LuUpload } from "react-icons/lu";
import TextInput from "./_components/TextInput";

const BigForm = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    buttonText,
    setButtonText,
    imagePreview,
    setImagePreview,
    placement,
    setPlacement,
  } = useText();

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  return (
    <div>
      <TextInput
        name="Title"
        placeholder="Enter Title"
        value={title}
        onchange={(e: any) => setTitle(e.target.value)}
      />
      <TextInput
        name="Description"
        placeholder="Enter Description"
        value={description}
        onchange={(e: any) => setDescription(e.target.value)}
      />
      <TextInput
        name="Button Text"
        placeholder="Enter Button Text"
        value={buttonText}
        onchange={(e: any) => setButtonText(e.target.value)}
      />
      <ScrollArea className="h-[54vh] w-full rounded-md p-4 shadow-lg">
        <div className="w-full flex flex-col items-center justify-center">
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          <button
            className="border border-[#000] text-[#000] px-4 py-2 rounded-md hover:bg-[#000] hover:text-[#fff] flex justify-around items-center  transition-all duration-200"
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            <LuUpload />
            <h1 className="text-sm ml-2">Upload Image</h1>
          </button>

          {imagePreview && (
            <div className="mt-4 w-[70%] flex flex-col justify-center items-center">
              <img
                src={imagePreview}
                alt="Selected"
                className="w-full h-full object-cover rounded-md"
              />
              <button
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-all duration-200"
                onClick={removeImage}
              >
                <h1 className="text-sm ml-2 ">Remove Image</h1>
              </button>
            </div>
          )}

          {imagePreview && (
            <div className=" w-full h-10 mt-3 flex justify-start items-center gap-3">
              <h1 className="text-sm">Placement</h1>
              <div
                className={`border ${
                  placement === "left" ? " border-[#b5b5b5]" : " border-[#000]"
                }  w-12 h-10 flex justify-center items-center rounded-md cursor-pointer focus:bg-[blue]`}
                onClick={() => setPlacement("right")}
              >
                <HiOutlineMenuAlt2 />
                <div className="bg-[#000] w-[40%] h-[60%] rounded-sm"></div>
              </div>
              <div
                className={`border ${
                  placement === "right" ? " border-[#b5b5b5]" : " border-[#000]"
                } w-12 h-10 flex justify-center items-center rounded-md cursor-pointer`}
                onClick={() => setPlacement("left")}
              >
                <div className="bg-[#000] w-[40%] h-[60%] rounded-sm"></div>
                <HiOutlineMenuAlt2 />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default BigForm;
