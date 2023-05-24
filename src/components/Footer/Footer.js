import React from "react";
import TjIcon from "../../img/TjIcon.png";
import styles from "./Footer.module.css";
import FooterSection from "./FooterSection";

function Footer() {
  const createdByText = [
    { id: 0, render: "Created &" },
    { id: 1, render: "Designed by" },
    { id: 2, render: "TJ Kapfer" },
  ];
  const infoText = [
    { id: 0, render: "Kansas City, MO" },
    { id: 1, render: "treykapfer@gmail.com" },
  ];
  const iconLinks = [
    { id: 0, render: "github" },
    { id: 1, render: "linkedin" },
    { id: 2, render: "phone" },
  ];

  return (
    <footer className={styles.footerWrapper}>
      <section>
        <img src={TjIcon} height={60} />
      </section>
      <section>
        <FooterSection items={createdByText} />
        <FooterSection items={infoText} />
        <FooterSection items={iconLinks} hasBullet={false}/>
      </section>
    </footer>
  );
}

export default Footer;
