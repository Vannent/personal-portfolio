import React from "react";
import styles from "../styles/HeroBanner.module.scss";

const HeroBanner = () => {
  return (
    <div className={styles.heroBannerContainer}>
      <div className={styles.heroBannerContent}>
        <div className={styles.circle}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
        <div className={styles.greet}>Hey, my name is</div>
        <div className={styles.fullName}>Roberto Cedeno</div>
        <div className={styles.slogan}>I build things for the web.</div>
        <div className={styles.description}>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
