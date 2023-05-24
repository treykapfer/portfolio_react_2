import { useState, useEffect } from "react";
import project_data from "../data/project_data.json";

function TVHook() {
  const [projects, setProjects] = useState();
  const [active, setActive] = useState();

  useEffect(() => {
    setProjects(project_data.projects);
    setActive(project_data.projects[0]);
  }, []);

  return {
    projects,
    setProjects,
    active,
    setActive,
  };
}

export default TVHook;
