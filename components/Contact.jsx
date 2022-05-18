import { IconButton } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import Link from "next/link";
import React from "react";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  const { contactRef } = useStateContext();
  return (
    <div className={styles.contactContainer} ref={contactRef}>
      <div className={styles.circle}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className={styles.contactContent}>
        <div className={styles.title}>Contact</div>
        <div className={styles.infoContainer}>
          <div className={styles.emailTitle}>Email</div>
          <div className={styles.email}>erobced@gmail.com</div>
          <div className={styles.basedInTitle}>Based In</div>
          <div className={styles.basedIn}>San Francisco, California.</div>
          <div className={styles.buttonsContainer}>
            <Link href="https://www.linkedin.com/in/erobced/">
              <IconButton>
                <LinkedIn fontSize="large" />
              </IconButton>
            </Link>
            <Link href="https://github.com/Vannent">
              <IconButton>
                <GitHub fontSize="large" />
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
