import React from "react";
import styles from "./reviewCard.module.css";

function ReviewCard({ title, count }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.img}></div>

        <div className={styles.titles}>
          <h2 className={styles.title}>Title</h2>
          <p className={styles.subTitle}>subTitle</p>
        </div>
      </div>

      <div className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus saepe
        praesentium odit cumque temporibus soluta amet quisquam eum optio, fuga
        ratione, molestiae id quasi ex dolorem iusto harum! Accusamus,
        consequatur.
      </div>

      <div className={styles.footer}>
        <span>Date</span> 2023 - 5 - 15
      </div>
    </div>
  );
}

export default ReviewCard;
