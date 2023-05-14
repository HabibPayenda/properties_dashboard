import React from "react";
import styles from "./amenityItem.module.css";
function AmenityItem({ amenity }) {
  console.log("amenity", amenity);
  return (
    <div className={styles.container}>
      <div className={styles.nameContainer}>
        <p className={styles.name}>{amenity?.name}</p>
      </div>
      <div className={styles.descriptionContainer}>
        <p aria-multiline={true} className={styles.description}>
          {amenity?.description}
        </p>
        <div className={styles.details}>
          <p className={styles.detailsItem}>
            <i className="fa-solid fa-coins"></i>
            {amenity?.fee}
          </p>
          <p className={styles.detailsItem}>
            <i className="fa-solid fa-clock"></i>
            {amenity?.fee_duration}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AmenityItem;
