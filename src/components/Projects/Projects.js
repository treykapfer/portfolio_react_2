import React from "react";
import project_data from "./project_data.json";
import Project from "./Project";

function Projects() {
  return (
    <>
      <div>
        {project_data.projects.map((project) => (
          <Project
            key={project.id}
            bodyText={project.body_text}
            title={project.title}
            codeURL={project.code_url}
            videoURL={project.video_url}
            demoURL={project.demo_url}
          />
        ))}
      </div>
      ;
    </>
  );
}

export default Projects;
