import React from "react";
import styles from "./TV.module.css";

function Link({ Icon, link, text }) {
  return (
    <div className={styles.link}>
      <div className={styles.iconWrap}>
      <Icon />
      </div>
      <a href={link} className={styles.linkText} target="_blank">{text}</a>
    </div>
  );
}

export default Link;
