import React from "react";
import styles from "./formPageInfo.module.css";

function FormPageInfo({ title, isCurrentPage, pageNumber }) {
  return (
    <div className={styles.mainContainer}>
      {isCurrentPage && (
        <div className={styles.container}>
          <i className="fa-solid fa-check"></i>
          <p className={styles.completed}> {title}</p>
        </div>
      )}
      {!isCurrentPage && (
        <div className={styles.container}>
          <i className="fa-solid fa-check"></i>
          <p className={styles.notCompleted}> {title}</p>
        </div>
      )}
    </div>
  );
}

export default FormPageInfo;
