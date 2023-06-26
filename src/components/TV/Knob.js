import React, { useState } from "react";
import styles from "./TV.module.css";

const Knob = ({ setActiveInput, knobInputs, activeInput }) => {
  const [rotationAngle, setRotationAngle] = useState(0);

  function handleTurn() {
    var element = document.getElementById("dummy1");
    let newRotationAngle = rotationAngle + 45;
    element.style.transform = `translateX(-50%) rotate(${newRotationAngle}deg)`;
    setRotationAngle(newRotationAngle);
    const currentIndex = knobInputs.indexOf(activeInput);
    const newIndex = (currentIndex + 1) % knobInputs.length;
    setActiveInput(knobInputs[newIndex]);
  }

  return (
    <div className={styles.knobWrapper}>
      <div className={styles.knob} onClick={() => handleTurn()}>
        <div className={styles.knobHandle} id="dummy1">
        </div>
      </div>
    </div>
  );
};

export default Knob;
