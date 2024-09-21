"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { useText } from "../../contexts/StateContext";
import ContentBottom from "./_components/ContentBottom";
import StepComponent from "./_components/StepComponent";
import PopupField from "./_components/popupform/_components/PopupField";

const ContentTab = () => {
  const { stepsArr, setStepsArr } = useText();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addField = (fieldName: string) => {
    setStepsArr([...stepsArr, fieldName]);
    setIsDialogOpen(false); 
  };

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
        <div className="w-[100%] h-auto mt-4">
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

      <div className="flex w-[100%] justify-start mt-4">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="text-[12px] text-[#000000] border border-[#00000057] rounded-md px-2 py-1 bg-[#ffffff] hover:bg-[#f4f4f5]"
            >
              <span className="mr-1 text-[15px]">+</span>
              Add Field
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[100%] h-[60%] rounded-md">
            <DialogHeader>
              <DialogTitle>Add Field</DialogTitle>
              <DialogDescription>
                <div className="w-[100%] h-[50vh] flex justify-start items-start gap-9 flex-wrap">
                  <PopupField
                    icon={MdEmail}
                    fieldName="Email"
                    onClick={() => addField("Email")}
                  />
                  <PopupField
                    icon={FaPhone}
                    fieldName="Contacts"
                    onClick={() => addField("Contacts")}
                  />
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border-t my-8 "></div>
      <StepComponent name="End Screen" />

      <div className="w-[100%] h-20 flex justify-between items-center absolute bottom-0">
        <ContentBottom icons="YES" />
        <ContentBottom name="Delete" icons="YES" />
      </div>
    </div>
  );
};

export default ContentTab;
