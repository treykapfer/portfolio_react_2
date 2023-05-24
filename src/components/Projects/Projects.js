import React, { useState, useEffect } from "react";
import Tabs from "../Tabs";

function Projects({style, active, setActive, projects}) {

  return (
    <>
      {!!projects && (
        <>
          <div className={style}>
            <button>Projects</button>
          </div>
          <Tabs projects={projects} active={active} setActive={setActive} />
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
