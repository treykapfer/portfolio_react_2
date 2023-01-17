import React from "react";
import styles from "./Tabs.module.css";

function Tab({ active, setActive, name, style }) {
  return (
    <button className={styles.tabWrapper}onClick={() => setActive(name)}>
      {!!active ? (
        <div className={styles.activeTab}>{name}</div>
      ) : (
        <div className={styles.inactiveTab}>{name}</div>
      )}
    </button>
  );
}

export default Tab;
