import React from "react";
import styles from "./deleteModalContent.module.css";
function DeleteModalContent() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <p className={styles.title}>Are you sure to delete?</p>
        <div className={styles.btnContainer}>
          <p className={styles.cancelBtn}>Cancel</p>
          <p className={styles.deleteBtn}>Delete</p>
        </div>
      </div>
    </div>
  );
}

export default DeleteModalContent;
