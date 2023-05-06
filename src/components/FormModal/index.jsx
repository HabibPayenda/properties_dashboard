import React from "react";
import styles from "./formModal.module.css";

function FormModal({ title, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{title}</div>
      <div className="content">{...children}</div>
      <div className="footer"></div>
    </div>
  );
}

export default FormModal;
