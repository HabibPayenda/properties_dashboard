import React from "react";
import styles from "./sectionHeader.module.css";
function SectionHeader({ title }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
    </div>
  );
}

export default SectionHeader;
