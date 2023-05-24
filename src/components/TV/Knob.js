import React, { useState } from "react";
import styles from "./TV.module.css";

const Nob = ({ nobInputs, activeInput, setActiveInput, handleTurn }) => {
  const [rotationAngle, setRotationAngle] = useState(0);

  function rotateElement() {
    var element = document.getElementById("dummy1");
    let newRotationAngle = rotationAngle + 45;
    element.style.transform = `translateX(-50%) rotate(${newRotationAngle}deg)`;
    setRotationAngle(newRotationAngle);
  }

  return (
    <div className={styles.knobWrapper}>
      <div className={styles.knob} onClick={() => rotateElement()}>
        <div className={styles.knobHandle} id="dummy1"></div>
      </div>
    </div>
  );
};

export default Nob;
