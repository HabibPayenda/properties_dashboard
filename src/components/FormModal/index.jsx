import React from "react";
import styles from "./formModal.module.css";

function FormModal({ title, children, openModal, setOpenModal }) {
  if (openModal) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          {title}
          <p onClick={() => setOpenModal(false)}>Close</p>
        </div>
        <div className="content">{children}</div>
        <div className="footer"></div>
      </div>
    );
  } else return null;
}

export default FormModal;
