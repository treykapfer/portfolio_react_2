import { useState, useEffect } from "react";
import project_data from "../data/project_data.json";

function TVHook() {
  const [projects, setProjects] = useState();
  const [active, setActive] = useState();
  const [tvText, setTvText] = useState();

  useEffect(() => {
    setProjects(project_data.projects);
    setActive(project_data.projects[0]);
    setTvText(project_data.projects[0].body_text);
  }, []);

  useEffect(() => {
    if (!!active) {
      setTvText(active.body_text);
    }
  }, [active]);

  return {
    projects,
    setProjects,
    active,
    setActive,
    tvText,
    setTvText,
  };
}

export default TVHook;
