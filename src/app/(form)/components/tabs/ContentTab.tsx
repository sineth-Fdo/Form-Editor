import { TiThMenu } from "react-icons/ti";
import StepComponent from "./_components/StepComponent";
import ContentBottom from "./_components/ContentBottom";

const ContentTab = () => {
  return (
    <div className="relative mt-10 h-[80vh]">
      <div className="flex justify-start ">
        <TiThMenu />
        <h1 className="text-sm ml-1">Steps</h1>
      </div>
      <p className="text-[12px] text-[#000000a6] mt-1">
        The steps users will take to complete the form
      </p>

      <div className="border w-[100%] h-auto mt-4">
        <StepComponent />
        <StepComponent />
      </div>

      <div className="flex w-[100%] justify-start mt-4 ">
        <button className="text-[12px] text-[#000000] border border-[#00000057] rounded-md px-2 py-1 bg-[#ffffff] hover:bg-[#f4f4f5]">
          <span className="mr-1 text-[15px]">+</span>
          Add Fields
        </button>
      </div>

      <div className="border-t my-8 "></div>
      <StepComponent />

      <div className=" w-[100%] h-20 flex justify-between items-center absolute bottom-0">
        <ContentBottom />
        <ContentBottom name = "Delete"/>
      </div>

    </div>
  );
};

export default ContentTab;
