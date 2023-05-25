import React from "react";
import styles from "./Footer.module.css";

function FooterSection({ items, hasBullet = false }) {
  return (
    <ul className={styles.footerSection}>
      {items.map((item) => (
        <li className={!hasBullet ? styles.noBullet : null} key={item.id}>
          {item.render}
        </li>
      ))}
    </ul>
  );
}

export default FooterSection;
