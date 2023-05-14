import React from "react";
import styles from "./tableBadge.module.css";
function TableBadge({ title, color }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: color ? color : "black" }}
    >
      {title}
    </div>
  );
}

export default TableBadge;
