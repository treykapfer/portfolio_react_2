import React from "react";
import Tab from "./Tab";
import styles from "./Tabs.module.css";
import PropTypes from "prop-types"

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

Tabs.propTypes = {
  active: PropTypes.string,
  setActive: PropTypes.func,
  name: PropTypes.string,
}

export default Tabs;
