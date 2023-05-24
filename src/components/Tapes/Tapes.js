import React from "react";
import Tape from "./Tape";
import styles from "./Tapes.module.css";
import PropTypes from "prop-types";

function Tapes({ projects, active, setActive }) {
  return (
    <>
      {!!projects && (
        <div className={styles.tabContainer}>
          {projects.map((project) => (
            <Tape
              key={project.id}
              active={active.id === project.id}
              setActive={setActive}
              name={project.title}
              project={project}
            />
          ))}
        </div>
      )}
    </>
  );
}

Tapes.propTypes = {
  active: PropTypes.object,
  setActive: PropTypes.func,
  projects: PropTypes.array,
};

export default Tapes;
