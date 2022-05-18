import React, { useRef, forwardRef } from "react";
import { createContext } from "react";
import { useContext } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const aboutRef = useRef();
  const homeRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Context.Provider
      value={{
        aboutRef,
        handleAboutClick,
        homeRef,
        handleHomeClick,
        projectsRef,
        contactRef,
        handleContactClick,
        handleProjectsClick,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
