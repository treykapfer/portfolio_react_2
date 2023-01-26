import React from "react";
import About from "../About";
import Footer from "../Footer";
import Projects from "../Projects";
import TV from "../TV";
import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.pageContainer}>
      {/* Here there is options on the right, with a blank tv with static on the left.
      Main page - on the right there will be "About" and "Project" options - Clicking on the about will display the about text on the tv. Clicking on the projects button will expand a dropdown that shows projects. then when you click on a project, the info will display on the tv. At the bttom, there is the footer info */}
      <main>
        <TV />
        <div className={styles.sideMenu}>
          <About />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Main;
