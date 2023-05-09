import React from "react";
import styles from "./propertySlideCard.module.css";

import homeImage from "../../assets/home.jpg";
function PropertySlideCard({ length, width, to_sun, color }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={homeImage} alt="" />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.header}>Header</div>
        <div className={styles.content}>
          <div className={styles.contentColumn}>
            <div className={styles.contentItem}>
              <p>Length:</p>
              <p>{length ? `${length} m` : "6 m"}</p>
            </div>
            <div className={styles.contentItem}>
              <p>Width:</p>
              <p>{width ? `${width} m` : "4 m"}</p>
            </div>
          </div>
          <div className={styles.contentColumn}>
            <div className={styles.contentItem}>
              <p>To sun:</p>
              <p>{to_sun || "Yes"}</p>
            </div>
            <div className={styles.contentItem}>
              <p>Windows:</p>
              <p>1</p>
            </div>
          </div>
          <div className={styles.contentColumn}>
            <div className={styles.contentItem}>
              Color:
              <div
                style={{
                  height: "10px",
                  width: "10px",
                  backgroundColor: color || "black",
                }}
              ></div>
            </div>
            <div className={styles.contentItem}>
              <p>Cupboards:</p>
              <p>Yes</p>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <p className={styles.editBtn}>Edit</p>
          <p className={styles.deleteBtn}>Delete</p>
        </div>
      </div>
    </div>
  );
}

export default PropertySlideCard;
