import React from "react";
import styles from "./propertyCard.module.css";

function PropertyCard({ icon, title, count }) {
  return (
    <div className={styles.container}>
      <p>{icon}</p>
      <p>{title}</p>
      <p>{count}</p>
    </div>
  );
}

export default PropertyCard;
