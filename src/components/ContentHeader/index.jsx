import React from "react";
import styles from "./contentHeader.module.css";

function ContentHeader({ title }) {
  return <div className={styles.container}>{title}</div>;
}

export default ContentHeader;
