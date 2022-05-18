import React from "react";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/Header.module.scss";

const Header = () => {
  const { homeRef, handleAboutClick, handleProjectsClick, handleContactClick } =
    useStateContext();
  return (
    <div className={styles.headerContainer} ref={homeRef}>
      <div className={styles.headerCircle}></div>
      <div className={styles.headerContent}>
        <div className={styles.headerContentLogo}>
          <img src="https://i.ibb.co/kKGBw5g/Untitled-1.png" alt="logo" />
        </div>
        <div className={styles.navBar}>
          <div className={styles.navBarContent}>
            <div className={styles.navBarAbout} onClick={handleAboutClick}>
              About
            </div>
            <div
              className={styles.navBarProjects}
              onClick={handleProjectsClick}
            >
              Projects
            </div>

            <div className={styles.navBarContact} onClick={handleContactClick}>
              Contact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
