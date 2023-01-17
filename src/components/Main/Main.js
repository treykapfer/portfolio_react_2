import React from "react";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";
import Home from "../Home";
import useTabs from "../Tabs/useTabs";

function Main() {
  const tabNames = ["Home", "About", "Projects", "Contact"];
  const { Tabs, active, setActive } = useTabs({ tabNames });
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default Main;
