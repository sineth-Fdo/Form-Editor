'use client';

import { TiThMenu } from "react-icons/ti";
import StepComponent from "./_components/StepComponent";
import ContentBottom from "./_components/ContentBottom";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"


const ContentTab = () => {
  const [stepsArr , setStepsArr] = useState([
    "Email",
    "Phone",
    "Address",
  ]);
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
            <StepComponent name = "Welcome Screen"/>
            {
              stepsArr.map((step , index) => (
                <StepComponent 
                  key = {index} 
                  name = {step}
                  onClick={() => setStepsArr(stepsArr.filter((_, i) => i !== index))}
                  
                  />
              ))
            }
          </div>
      </ScrollArea>


      <div className="flex w-[100%] justify-start mt-4 ">
        <button className="text-[12px] text-[#000000] border border-[#00000057] rounded-md px-2 py-1 bg-[#ffffff] hover:bg-[#f4f4f5]"
          onClick = {() => setStepsArr([...stepsArr , "New Field"])}
        >
          <span className="mr-1 text-[15px]">+</span>
          Add Fields
        </button>
      </div>

      <div className="border-t my-8 "></div>
      <StepComponent name = "End Screen"/>

      <div className=" w-[100%] h-20 flex justify-between items-center absolute bottom-0">
        <ContentBottom />
        <ContentBottom name = "Delete"/>
      </div>

    </div>
  );
};

export default ContentTab;
