"use client";
import { useText } from "@/app/(form)/contexts/StateContext";
import { useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import BigForm from "./popupform/BigForm";
import EmailForm from "./popupform/EmailForm";

interface IStepProps {
  name?: string;
  onClick?: () => void;
}

const StepComponent = (props: IStepProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { clickedStep, setClickedStep } = useText();

  const { name = "Welcome Screen", onClick } = props;

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => {
          togglePopup();
          setClickedStep(name);
        }}
        className="relative w-[100%] h-11 flex justify-center items-center bg-[#f4f4f5] rounded-md mb-3 hover:bg-[#e9e9e9] cursor-pointer"
      >
        <FaDotCircle className="text-[#0000009d] text-[12px] absolute left-0 ml-2" />
        <h1 className="text-[12px] text-[#000000]">{name}</h1>
        {name !== "Welcome Screen" && name !== "End Screen" ? (
          <div
            className=" w-[20%] h-[100%] flex justify-center items-center absolute right-0 "
            onClick={(e) => {
              e.stopPropagation();
              onClick && onClick();
            }}
          >
            <RxCross1 className="text-[#0000009d] text-[12px] " />
          </div>
        ) : null}
      </button>

      {/* Side Popup */}
      <div
        className={`fixed top-0 left-0 w-[320px] h-full bg-white shadow-lg z-50 p-4 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className=" w-[100%] h-auto flex">
          <div className=" w-[70%] flex flex-col justify-center items-start">
            <div className=" w-[100%] h-[100%] flex">
              <RiSettings4Fill className="text-[16px] text-[#000000] cursor-pointer" />
              <h1 className="ml-2 text-sm">Settings</h1>
            </div>
            <h1 className="text-[12px] text-[#00000096]">
              {name !== "Welcome Screen" ? name : null}
            </h1>
          </div>
          <div className=" w-[30%] flex justify-end items-start">
            <button className="border p-1 rounded-md" onClick={togglePopup}>
              <RxCross1 className="text-[16px] text-[#000000] cursor-pointer" />
            </button>
          </div>
        </div>

        {clickedStep !== "Welcome Screen" && clickedStep !== "End Screen" ? (
          clickedStep === "Email" ? (
            <EmailForm onPress = {togglePopup}/>
          ) : clickedStep === "Phone" ? (
            <EmailForm />
          ) : null
        ) : (
          <BigForm />
        )}
      </div>
    </div>
  );
};

export default StepComponent;
