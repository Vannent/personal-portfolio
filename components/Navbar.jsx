import React, { useState } from "react";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const {
    handleAboutClick,
    handleHomeClick,
    handleProjectsClick,
    handleContactClick,
  } = useStateContext();
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBarContent}>
        <div className={styles.nav} onClick={handleHomeClick}></div>
        <div className={styles.nav} onClick={handleAboutClick}></div>
        <div className={styles.nav} onClick={handleProjectsClick}></div>
        <div className={styles.nav} onClick={handleContactClick}></div>
      </div>
    </div>
  );
};

export default Navbar;
