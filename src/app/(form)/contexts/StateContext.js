'use client';
import { createContext, useContext, useState } from "react";

const TextContext = createContext();

export const TextProvider = ({ children }) => {
  const [text, setText] = useState("example text");
  const [clickedStep, setClickedStep] = useState("Welcome Screen");

  return (
    <TextContext.Provider value={{ 
        text, setText, 
        clickedStep, setClickedStep,
        }}>
      {children}
    </TextContext.Provider>
  );
};

export const useText = () => {
  return useContext(TextContext);
};
