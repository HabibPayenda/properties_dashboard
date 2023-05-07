import React from "react";
import styles from "./personDetails.module.css";

function PersonalDetailsHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.detailsContainer}>
        <div className={styles.hiddenCirle}></div>
        <div className={styles.detailsContent}>Content</div>
        <div className={styles.detailsContent}>Content</div>
        <div className={styles.detailsContent}>Content</div>
      </div>
    </div>
  );
}

export default PersonalDetailsHeader;
