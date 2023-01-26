import React, { useState, useEffect } from "react";
import project_data from "./project_data.json";
import Tabs from "../Tabs";

function Projects({style}) {
  const [projectNames, setProjectNames] = useState();
  const [active, setActive] = useState();

  useEffect(() => {
    let newNames = project_data.projects.map((project) => {
      return project.title;
    });
    setProjectNames(newNames);
    setActive(newNames[0]);
  }, []);

  return (
    <>
      {!!projectNames && (
        <>
          <div className={style}>
            <button>Projects</button>
          </div>
          <Tabs tabNames={projectNames} active={active} setActive={setActive} />
          <div>
            {/* {project_data.projects.map((project) => (
              <Project
                key={project.id}
                active={active === project.title}
                bodyText={project.body_text}
                title={project.title}
                codeURL={project.code_url}
                videoURL={project.video_url}
                demoURL={project.demo_url}
              />
            ))} */}
          </div>
        </>
      )}
    </>
  );
}

export default Projects;
