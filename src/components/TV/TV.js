import React, { useState } from "react";
import styles from "./TV.module.css";
import Knob from "./Knob";

function TV({ activeProject }) {
  const knobInputs = ["video", "text", "links"];
  const [activeInput, setActiveInput] = useState(knobInputs[0]);

  console.log(activeInput);

  <img
    className={styles.asset}
    src={require("../../img/JuntaSS4-Cropped.png")}
  />;

  return (
    <div className={styles.tv}>
      <div className={styles.screenWrapper}>
        <div className={styles.screen}>
          {activeInput === "video" ? (
            <img
              className={styles.asset}
              src={require("../../img/junta_gif.gif")}
            />
          ) : (
            <>
              {activeInput === "text" ? (
                <div className={styles.tvText}>{activeProject.body_text}</div>
              ) : (
                <div>Links</div>
              )}
            </>
          )}
        </div>
      </div>
      <div className={styles.tvMenu}>
        <Knob
          knobInputs={knobInputs}
          activeInput={activeInput}
          setActiveInput={setActiveInput}
        />
      </div>
    </div>
  );
}

export default TV;
