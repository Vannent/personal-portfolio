/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/AboutMe.module.scss";
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { ReactComponent as NextIcon } from "../assets/nextjs.svg";

const AboutMe = () => {
  const { aboutRef } = useStateContext();
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.circle}></div>
      <div className={styles.circle2}></div>
      <h1 className={styles.title} ref={aboutRef}>
        About Me.
      </h1>
      <div className={styles.aboutMeContent}>
        <p className={styles.content}>
          From the very moment I touched a computer, I was hooked. The
          possibility of learning anything was fascinating to my younger self.
          My innate curiosity to discover how things work has led me on quite
          the journey.
          <br></br>I have always gravitated towards complicated concepts or
          ideas which initially brought me to Psychology but something was
          missing. In Software Engineering I found a thrilling feeling I had not
          felt before, and that is when I knew that this was my passion.
          <br></br>
          From the first "Hello, World!" to now being able to create full-stack
          applications. What is even better is that I can use many of the skills
          I learned in Research and Psychology. Critical and analytical skills,
          innovation, adaptability, self-regulation, emotional intelligence, and
          open-mindedness.
        </p>
        <div className={styles.imageContainer}>
          <img src="https://lh3.googleusercontent.com/gZL9ya7q5Njd2KiCKMf9z0uCa5YHTVe4YPQ9rcngtSJJWV_y7ppEDdhIohQGqlg9PnLV4rR53mCcrex4x0qfrEsD5vATfFwRpD5bDZn7vuwXFH_ml6zJY5qBcCSvva4IvA=w1280" />
        </div>
      </div>
      <div className={styles.skills}>
        <FaReact className={styles.icons} />
        <FaSass className={styles.icons} />
        <FaHtml5 className={styles.icons} />
        <FaCss3 className={styles.icons} />
        <DiJavascript1 className={styles.icons} />
        <FaNpm className={styles.icons} />
        <FaNodeJs className={styles.icons} />
        <FaGithub className={styles.icons} />
        <SiExpress className={styles.icons} />
        <img
          className={styles.icons}
          src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/nextjs.png"
        />
      </div>
    </div>
  );
};

export default AboutMe;
