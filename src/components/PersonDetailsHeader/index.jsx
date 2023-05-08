import React from "react";
import styles from "./personDetails.module.css";

function PersonDetailsHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.hiddenCirle}></div>
        <div className={styles.detailsContentContainer}>
          <div className={styles.detailsContent}>
            <p className={styles.detailsTitle}>Habib Payenda</p>
            <p className={styles.detailsItem}>last_active:</p>
          </div>
          <div className={styles.detailsContent}>
            <p className={styles.detailsTitle}>Contact</p>
            <p className={styles.detailsItem}>Mobile:</p>
            <p className={styles.detailsItem}>Email:</p>
          </div>
          <div className={styles.detailsContent}>
            <p className={styles.detailsTitle}>Address</p>
            <p className={styles.detailsItem}>City:</p>
            <p className={styles.detailsItem}>District:</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonDetailsHeader;
