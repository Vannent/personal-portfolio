import React, { useRef, forwardRef } from "react";
import { createContext } from "react";
import { useContext } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const aboutRef = useRef();

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Context.Provider value={{ aboutRef, handleAboutClick }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
