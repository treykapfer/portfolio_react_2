import React from "react";
import Link from "./Link";
import { ReactComponent as Video } from "../../img/video.svg";
import { ReactComponent as Code } from "../../img/code.svg";
import { ReactComponent as ExternalLink } from "../../img/external-link.svg";
import styles from "./TV.module.css";

const tutorialText = "hey. put in a new tape or change the channel on the knob <v.v>*"

function Links({ demoLink, codeLink, videoLink, title }) {
  return (
    <div className={styles.linksWrapper}>
      <h2>{title !== "About Me" ? title : tutorialText}</h2>
      {!!codeLink && <Link link={codeLink} Icon={Code} text="Code" />}
      {!!videoLink && <Link link={videoLink} Icon={Video} text="Video" />}
      {!!demoLink && <Link link={demoLink} Icon={ExternalLink} text="Demo" />}
    </div>
  );
}

export default Links;
