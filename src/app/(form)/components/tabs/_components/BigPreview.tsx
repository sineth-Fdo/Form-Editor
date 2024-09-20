"use client";

import { useText } from "@/app/(form)/contexts/StateContext";

const BigPreview = () => {
  const {text, setText} = useText();

  return (
    <div className="w-[70%] h-[50%] flex">
      <div className="w-[60%] flex flex-col justify-center items-start gap-2">
        <textarea
          className="border border-transparent hover:border-white w-[90%] rounded-md transition-all duration-700 text-[#fff] bg-transparent resize-none text-4xl"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <textarea
          className="border border-transparent hover:border-white w-[90%] rounded-md transition-all duration-700 text-[#fff] bg-transparent resize-none text-4xl"
          value="Welcome to our form"
        />
        <textarea
          className="border border-transparent hover:border-white w-[90%] rounded-md transition-all duration-700 text-[#fff] resize-none bg-transparent text-xl"
          value="This is a form description. You can write anything here."
        />
        <button className="px-5 py-2 rounded-md bg-[#fff]">
          <h1 className="text-[#000] text-md">Start</h1>
        </button>
      </div>
      <div className="border w-[40%]"></div>
    </div>
  );
};

export default BigPreview;
