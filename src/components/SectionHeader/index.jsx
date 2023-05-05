import React from "react";
import styles from "./sectionHeader.module.css";
function SectionHeader({ title, text }) {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.badgeContainer}></div>
        <div className={styles.badgeCorner}></div>
        <div className={styles.leftBackground}></div>
        <div className={styles.rightBackground}></div>
        <div className={styles.rightBadge}></div>
        <div className={styles.rightBadgeCorner}></div>
        <div className={styles.tilesContainer}>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.title}>{text}</p>
      </div>
    </div>
  );
}

export default SectionHeader;
