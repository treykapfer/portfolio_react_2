import React from "react";
import styles from "./TV.module.css";

function TV({tvText}) {
  return (
    <div className={styles.tv}>
      <div className={styles.tvText}>{tvText}</div>
    </div>
  );
}

export default TV;
