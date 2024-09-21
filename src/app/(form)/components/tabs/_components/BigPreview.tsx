"use client";

import { useText } from "@/app/(form)/contexts/StateContext";

const BigPreview = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    buttonText,
    imagePreview,
    placement,
  } = useText();
  return (
    <div className={`w-[80%] h-[70vh] flex flex-col justify-center items-center transition-all duration-400 ${placement === 'right' ? "xl:flex-row-reverse" : "xl:flex-row"}`}>
      <div className=" w-[100%] flex flex-col items-center xl:items-start xl:w-[60%] justify-center gap-6">
        <textarea
          className="border border-transparent hover:border-white w-[90%] flex text-center xl:text-left h-[30%] rounded-md transition-all duration-700 text-[#fff] bg-transparent resize-none text-4xl"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className=" border-transparent hover:border-white w-[90%] text-center xl:text-left rounded-md transition-all duration-700 text-[#fff] resize-none bg-transparent text-xl"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="px-5 py-2 rounded-md bg-[#fff] ">
          <h1 className="text-[#000] text-md">{buttonText}</h1>
        </button>
      </div>
      <div className=" w-[60%] flex justify-center items-center">
        {imagePreview && (
          <div className="mt-4 w-full flex flex-col justify-center items-center">
            <img
              src={imagePreview}
              alt="Selected"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BigPreview;
