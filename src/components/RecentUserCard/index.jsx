import React from "react";
import styles from "./recentUserCard.module.css";

import userImage from "../../assets/user.jpg";

function RecentUserCard() {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.imageContainer}>
          <img src={userImage} className={styles.image} alt="user_image" />
        </div>
        <div className={styles.detailsInfo}>
          <h4 className={styles.title}>Habib Payenda</h4>
          <p className={styles.subTitle}>Afghanistan</p>
        </div>
      </div>
      <div className={styles.date}>
        <p>2023/4/5</p>
      </div>
    </div>
  );
}

export default RecentUserCard;
