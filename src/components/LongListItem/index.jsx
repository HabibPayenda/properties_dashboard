import React from "react";
import styles from "./longListItem.module.css";

function LongListItem({ item }) {
  return <div className={styles.container}>{item}</div>;
}

export default LongListItem;
