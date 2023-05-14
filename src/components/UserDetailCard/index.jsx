import React from "react";
import styles from "./userDetailCard.module.css";
function UserDetailCard({ title, count }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Chart</div>
      <div className={styles.footer}>
        <h3>{title}</h3>
        <p>Total Count: {count}</p>
      </div>
    </div>
  );
}

export default UserDetailCard;
