"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { TiThMenu } from "react-icons/ti";
import { useText } from "../../contexts/StateContext";
import ContentBottom from "./_components/ContentBottom";
import StepComponent from "./_components/StepComponent";

const ContentTab = () => {
  const { stepsArr, setStepsArr } = useText();
  return (
    <div className="relative mt-10 h-[78vh]">
      <div className="flex justify-start ">
        <TiThMenu />
        <h1 className="text-sm ml-1">Steps</h1>
      </div>
      <p className="text-[12px] text-[#000000a6] mt-1">
        The steps users will take to complete the form
      </p>

      <ScrollArea className="h-[200px] w-[300px] rounded-md">
        <div className=" w-[100%] h-auto mt-4">
          <StepComponent name="Welcome Screen" />
          {stepsArr.map((step: any, index: any) => (
            <StepComponent
              key={index}
              name={step}
              onClick={() =>
                setStepsArr(stepsArr.filter((_: any, i: any) => i !== index))
              }
            />
          ))}
        </div>
      </ScrollArea>

      <div className="flex w-[100%] justify-start mt-4 ">
        <button
          className="text-[12px] text-[#000000] border border-[#00000057] rounded-md px-2 py-1 bg-[#ffffff] hover:bg-[#f4f4f5]"
          onClick={() => setStepsArr([...stepsArr, "New Field"])}
        >
          <span className="mr-1 text-[15px]">+</span>
          Add Fields
        </button>
      </div>

      <div className="border-t my-8 "></div>
      <StepComponent name="End Screen" />

      <div className=" w-[100%] h-20 flex justify-between items-center absolute bottom-0">
        <ContentBottom icons="YES" />
        <ContentBottom name="Delete" icons="YES" />
      </div>
    </div>
  );
};

export default ContentTab;
