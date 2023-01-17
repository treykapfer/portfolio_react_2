import React, { useState } from "react";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";
import Home from "../Home";
import Tabs from "../Tabs";
import styles from "./Main.module.css";

function Main() {
  const tabNames = ["Home", "About", "Projects", "Contact"];
  const [active, setActive] = useState(tabNames[0]);

  return (
    <div className={styles.pageContainer}>
      <Tabs tabNames={tabNames} active={active} setActive={setActive} />
      {active === "Home" && <Home />}
      {active === "About" && <About />}
      {active === "Projects" && <Projects />}
      {active === "Contact" && <Contact />}
    </div>
  );
}

export default Main;
