import React from "react";
import { useStateContext } from "../context/StateContext";
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
          I’m a software engineer that specializes in front-end development. I
          am currently focusing on growing my skills as a developer and
          gathering experience.
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
