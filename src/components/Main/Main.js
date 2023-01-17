import React, { useState } from "react";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";
import Home from "../Home";
import Tabs from "../Tabs";

function Main() {
  const tabNames = ["Home", "About", "Projects", "Contact"];
  const [active, setActive] = useState(tabNames[0]);

  return (
    <>
      <Tabs tabNames={tabNames} active={active} setActive={setActive} />
      {active === "Home" && <Home />}
      {active === "About" && <About />}
      {active === "Projects" && <Projects />}
      {active === "Contact" && <Contact />}
    </>
  );
}

export default Main;
