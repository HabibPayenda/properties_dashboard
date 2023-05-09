import React from "react";
import styles from "./propertySlideCard.module.css";

import homeImage from "../../assets/home.jpg";
function PropertySlideCard({ title }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={homeImage} alt="" />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.header}>Header</div>
        <div className={styles.content}>Content</div>
        <div className={styles.footer}>
          <p className={styles.editBtn}>Edit</p>
          <p className={styles.deleteBtn}>Delete</p>
        </div>
      </div>
    </div>
  );
}

export default PropertySlideCard;
