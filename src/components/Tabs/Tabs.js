import React from "react";
import Tab from "./Tab";
import styles from "./Tabs.module.css";

function Tabs({ tabNames, active, setActive }) {
  return (
    <div className={styles.tabContainer}>
      {tabNames.map((name) => (
        <Tab
          key={name}
          active={active === name}
          setActive={setActive}
          name={name}
        />
      ))}
    </div>
  );
}

export default Tabs;
