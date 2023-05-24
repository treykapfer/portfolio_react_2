import React from "react";
import styles from "./Tapes.module.css";
import PropTypes from "prop-types";

function Tab({ active, setActive, name, project }) {

  return (
    <button className={styles.tabWrapper} onClick={() => setActive(project)}>
      {!!active ? (
        <div className={styles.activeTab}>{name}</div>
      ) : (
        <div className={styles.inactiveTab}>{name}</div>
      )}
    </button>
  );
}

Tab.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  name: PropTypes.string,
};

export default Tab;
