import React, { useState } from "react";
import styles from "./TV.module.css";
import Knob from "./Knob";

function TV({ tvText }) {
  return (
    <div className={styles.tv}>
      <div className={styles.screenWrapper}>
        <div className={styles.screen}>
          <div className={styles.tvText}>{tvText}</div>
        </div>
      </div>
      <div className={styles.tvMenu}><Knob /></div>
    </div>
  );
}

export default TV;
