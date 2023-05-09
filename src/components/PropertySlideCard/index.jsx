import React from "react";
import styles from "./propertySlideCard.module.css";
function PropertySlideCard({ title }) {
  return <div className={styles.container}>{title}</div>;
}

export default PropertySlideCard;
