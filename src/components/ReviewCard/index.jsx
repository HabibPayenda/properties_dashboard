import React from "react";
import styles from "./reviewCard.module.css";

function ReviewCard({ title, count }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Info</div>
      <div className={styles.footer}>
        <p>{title}</p>
        <p>{`Count: ${count}`}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
