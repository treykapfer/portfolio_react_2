import React from "react";
import Footer from "../Footer";
import TV from "../TV";
import styles from "./Main.module.css";
import TVHook from "../../hooks/TVHook";
import Tapes from "../Tapes";

function Main() {
  const { active, setActive, projects } = TVHook();

  return (
    <div className={styles.pageContainer}>
      <main>
        <TV activeProject={active} />
        <div className={styles.sideMenu}>
          <Tapes active={active} setActive={setActive} projects={projects} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Main;
