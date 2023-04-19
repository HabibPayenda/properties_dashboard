import React from "react";
import styles from "./longList.module.css";

function LongList({ title }) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
    </div>
  );
}

export default LongList;
