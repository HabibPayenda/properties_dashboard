import React, { useState } from "react";
import styles from "./formPageInfo.module.css";

function FormPageInfo({ title, completed }) {
  return (
    <div className={styles.container}>
      {completed && <p className={styles.completed}>completed: {title}</p>}
      {!completed && (
        <p className={styles.notCompleted}>Not completed: {title}</p>
      )}
    </div>
  );
}

export default FormPageInfo;
