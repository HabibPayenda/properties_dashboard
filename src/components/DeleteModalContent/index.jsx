import React from "react";
import styles from "./deleteModalContent.module.css";
function DeleteModalContent({ handleClose, handleDelete }) {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <p className={styles.title}>Are you sure to delete?</p>
        <div className={styles.btnContainer}>
          <p onClick={() => handleClose()} className={styles.cancelBtn}>
            Cancel
          </p>
          <p onClick={() => handleDelete()} className={styles.deleteBtn}>
            Delete
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeleteModalContent;
