import React from "react";
import styles from "./TV.module.css";

function Link({ Icon, link, text }) {
  return (
    <div className={styles.link}>
      <Icon />
      <a href={link} target="_blank">{text}</a>
    </div>
  );
}

export default Link;
