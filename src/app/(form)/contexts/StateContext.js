'use client';
import { createContext, useContext, useState } from "react";

const TextContext = createContext();

export const TextProvider = ({ children }) => {
  const [clickedStep, setClickedStep] = useState("Welcome Screen");
  const [emailTitle, setEmailTitle] = useState("Enter your email");
  const [emailDescription, setEmailDescription] = useState("This is a description of the email");
  const [emailRequired, setEmailRequired] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [stepsArr , setStepsArr] = useState([]);
  const [title, setTitle] = useState("Welcome to our form");
  const [description, setDescription] = useState("This is a description of the form");
  const [buttonText, setButtonText] = useState("Start");
  const [imagePreview, setImagePreview] = useState("");
  const [placement, setPlacement] = useState("left");



  return (
    <TextContext.Provider value={{ 
        clickedStep, setClickedStep,
        emailTitle, setEmailTitle,
        emailDescription, setEmailDescription,
        stepsArr, setStepsArr,
        emailRequired, setEmailRequired,
        emailValue, setEmailValue,
        title, setTitle,
        description, setDescription,
        buttonText, setButtonText,
        imagePreview, setImagePreview,
        placement, setPlacement
        }}>
      {children}
    </TextContext.Provider>
  );
};

export const useText = () => {
  return useContext(TextContext);
};
