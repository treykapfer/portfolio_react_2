import React, { useState } from "react";
import styles from "./TV.module.css";
import Knob from "./Knob";
import Links from "./Links";
import Animation from "./Animation";

function TV({ activeProject }) {
  const knobInputs = ["video", "text", "links"];
  const [activeInput, setActiveInput] = useState(knobInputs[2]);

  <img
    className={styles.asset}
    src={require("../../img/JuntaSS4-Cropped.png")}
  />;

  return (
    <>
      {!!activeProject && (
        <div className={styles.tv}>
          <div className={styles.screenWrapper}>
            <div className={styles.screen}>
              {activeInput === "video" ? (
                <Animation project={activeProject.title} />
              ) : (
                <>
                  {activeInput === "text" ? (
                    <div className={styles.tvText}>
                      {activeProject.body_text}
                    </div>
                  ) : (
                    <Links
                      title={activeProject.title}
                      demoLink={activeProject.demo_url}
                      codeLink={activeProject.code_url}
                      videoLink={activeProject.video_url}
                    />
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
            <div className={styles.activeTape}>
              <p className={styles.activeTapeText}>{activeProject.title}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TV;
