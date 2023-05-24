import React from "react";
import Link from "./Link";
import { ReactComponent as Video } from "../../img/video.svg";
import { ReactComponent as Code } from "../../img/code.svg";
import { ReactComponent as ExternalLink } from "../../img/external-link.svg";
import styles from "./TV.module.css";

function Links({ demoLink, codeLink, videoLink }) {
  return (
    <>
      {!!codeLink && <Link link={codeLink} Icon={Code} text="Code" />}
      {!!videoLink && <Link link={videoLink} Icon={Video} text="Video" />}
      {!!demoLink && <Link link={demoLink} Icon={ExternalLink} text="Demo" />}
    </>
  );
}

export default Links;
