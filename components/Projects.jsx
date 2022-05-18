import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/Projects.module.scss";

const Projects = () => {
  const { projectsRef } = useStateContext();
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.circle}></div>
      <div className={styles.circle2}></div>
      <div className={styles.title} ref={projectsRef}>
        Projects
      </div>
      <div className={styles.projectsContent}>
        <div className={styles.project}>
          <div className={styles.content}>
            <div className={styles.featured}>Featured Project</div>
            <div className={styles.projectTitle}>Chatter</div>
            <p className={styles.paragraph}>
              A fully responsive and real-time chatting application that
              utilizes Stream Chat API to handle messages and users with the
              ability to create channels and create direct messages to users.
            </p>
            <div className={styles.languages}>
              <FaReact />
              <FaNodeJs />
              <SiExpress />
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src="https://i.ibb.co/SN2nY5T/Screenshot-2022-05-17-at-16-53-43-Chatter.png" />
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.imageContainer}>
            <img src="https://i.ibb.co/Lp1fGqN/Screenshot-2022-05-17-at-16-55-39-Bookerei.png" />
          </div>
          <div className={styles.content}>
            <div className={styles.featured}>Featured Project</div>
            <div className={styles.projectTitle}>Bookerei</div>
            <p className={styles.paragraph}>
              An e-commerce application that allows purchases with Stripe
              implementation, using Sanity for the database of books.
            </p>
            <div className={styles.languages}>
              <FaReact />
              <div>NextJS</div>
              <div>APIs</div>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.content}>
            <div className={styles.featured}>Featured Project</div>
            <div className={styles.projectTitle}>Searchio</div>
            <p className={styles.paragraph}>
              A minimal search engine that utilizes Google&apos;s API to render
              searches for images and sites. Along with widgets that display
              time and the weather.
            </p>
            <div className={styles.languages}>
              <FaReact />
              <div>NextJS</div>
              <div>APIs</div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src="https://i.ibb.co/QdRN6GM/Screenshot-2022-05-17-at-16-56-30-Searchio.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
