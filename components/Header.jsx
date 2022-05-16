import React from "react";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerCircle}></div>
      <div className={styles.headerContent}>
        <div className={styles.headerContentLogo}>
          <h1 className={styles.firstName}>Roberto</h1>
          <h1 className={styles.lastName}>Cedeno</h1>
        </div>
        <div className={styles.navBar}>
          <div className={styles.navBarContent}>
            <div className={styles.navBarAbout}>About</div>
            <div className={styles.navBarProjects}>Projects</div>

            <div className={styles.navBarContact}>Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
