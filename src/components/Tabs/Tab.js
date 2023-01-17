import React from "react";
import styles from "./Tabs.module.css";

function Tab({ active, setActive, name, style }) {
  return (
    <div className={[styles.tabWrapper, style]}onClick={() => setActive(name)}>
      {!!active ? (
        <div className={styles.activeTab}>{name}</div>
      ) : (
        <div className={styles.inactiveTab}>{name}</div>
      )}
    </div>
  );
}

export default Tab;
