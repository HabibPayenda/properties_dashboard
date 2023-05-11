import React from "react";
import styles from "./restrictionItem.module.css";
function RestrictionItem({ restriction }) {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{restriction?.name}</p>
      <p className={styles.description}>{restriction?.description}</p>
    </div>
  );
}

export default RestrictionItem;
