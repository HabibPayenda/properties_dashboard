import React from "react";
import styles from "./recentUserCard.module.css";

import userImage from "../../assets/user.jpg";

function RecentUserCard({ user }) {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.imageContainer}>
          <img
            src={user?.image_url || userImage}
            className={styles.image}
            alt="user_image"
          />
        </div>
        <div className={styles.detailsInfo}>
          <h4 className={styles.title}>{user?.name}</h4>
          <p className={styles.subTitle}>
            {user?.address?.province || "Not available"}
          </p>
        </div>
      </div>
      <div className={styles.date}>
        <p>{user?.date_of_birth}</p>
      </div>
    </div>
  );
}

export default RecentUserCard;
