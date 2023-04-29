import React from "react";
import styles from "./reviewCard.module.css";

function ReviewCard({ title, info }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Info</div>
      <div className={styles.footer}>
        <p>{title}</p>
        <p>{info}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
