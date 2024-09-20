'use client';
import React, { createContext, useContext, useState } from "react";

const TextContext = createContext();

export const TextProvider = ({ children }) => {
  const [text, setText] = useState("example text");

  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
};

export const useText = () => {
  return useContext(TextContext);
};
