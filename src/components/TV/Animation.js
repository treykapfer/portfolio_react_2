import React from "react";
import styles from "./TV.module.css";

function Animation({ project }) {
  return (
    <>
      {project === "Junta Commander" && (
        <img
          className={styles.asset}
          src={require("../../img/junta_gif.gif")}
        />
      )}
      {project === "WoW Blog" && (
        <img
          className={styles.asset}
          src={require("../../img/WoW-Screenshot.png")}
        />
      )}
      {project === "About Me" && (
        <img
          className={styles.assetNoShadow}
          src={require("../../img/TJ-Header-2.png")}
        />
      )}
      {project === "Ghoul Grinder" && (
        <img
          className={styles.asset}
          src={require("../../img/ghoul_grinder.png")}
        />
      )}
    </>
  );
}

export default Animation;
