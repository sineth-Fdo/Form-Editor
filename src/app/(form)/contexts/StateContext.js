'use client';
import { createContext, useContext, useState } from "react";

const TextContext = createContext();

export const TextProvider = ({ children }) => {
  const [clickedStep, setClickedStep] = useState("Welcome Screen");
  const [emailTitle, setEmailTitle] = useState("");
  const [emailDescription, setEmailDescription] = useState("");
  const [emailRequired, setEmailRequired] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [stepsArr , setStepsArr] = useState([
    "Email",
    "Phone",
    "Address",
  ]);



  return (
    <TextContext.Provider value={{ 
        clickedStep, setClickedStep,
        emailTitle, setEmailTitle,
        emailDescription, setEmailDescription,
        stepsArr, setStepsArr,
        emailRequired, setEmailRequired,
        emailValue, setEmailValue
        }}>
      {children}
    </TextContext.Provider>
  );
};

export const useText = () => {
  return useContext(TextContext);
};
