import React, { useState } from "react";
import styles from "./formPageInfo.module.css";

function FormPageInfo({ title, isCurrentPage }) {
  return (
    <div className={styles.container}>
      {isCurrentPage && <p className={styles.completed}>completed: {title}</p>}
      {!isCurrentPage && (
        <p className={styles.notCompleted}>Not completed: {title}</p>
      )}
    </div>
  );
}

export default FormPageInfo;
