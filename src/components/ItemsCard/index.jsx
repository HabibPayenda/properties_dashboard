import React from "react";
import styles from "./itemsCard.module.css";
function ItemsCard({ icon, title, text }) {
  return (
    <div className={styles.container}>
      <div className={styles.triangel}></div>
      <div className={styles.contentContainer}>
        <div className={styles.contentTextContainer}>
          <h3 className={styles.title}>{title || "Title"}</h3>
          <p className={styles.text}>
            {text ||
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus maxime incidunt quo libero animi earum"}
          </p>
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.detailsItem}>
            <p>
              <i className="fa-solid fa-chart-line"></i> : 18
            </p>
          </div>
        </div>
      </div>

      <div className={styles.circlesContainer}>
        <div className={styles.bottomCircle}>
          <div className={styles.topCircle}>{icon}</div>
        </div>
      </div>
    </div>
  );
}

export default ItemsCard;
