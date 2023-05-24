import React from "react";
import Tab from "./Tab";
import styles from "./Tabs.module.css";
import PropTypes from "prop-types";

function Tabs({ projects, active, setActive }) {
  return (
    <div className={styles.tabContainer}>
      {projects.map((project) => (
        <Tab
          key={project.id}
          active={active.id === project.id}
          setActive={setActive}
          name={project.title}
          project={project}
        />
      ))}
    </div>
  );
}

Tabs.propTypes = {
  active: PropTypes.object,
  setActive: PropTypes.func,
  name: PropTypes.string,
};

export default Tabs;
