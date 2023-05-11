import React from "react";
import styles from "./amenityItem.module.css";
function AmenityItem({ amenity }) {
  return (
    <div className={styles.container}>
      <div className={styles.nameContainer}>
        <p className={styles.name}>{amenity?.name}</p>
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{amenity?.description}</p>
      </div>
      <div className={styles.details}>
        <p className={styles.fee}>{amenity?.fee}</p>
        <p className={styles.feeDuration}>{amenity?.fee_duration}</p>
      </div>
    </div>
  );
}

export default AmenityItem;
