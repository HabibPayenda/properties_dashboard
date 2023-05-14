import React from "react";
import styles from "./modalLink.module.css";

function ModalLink({ title, onClick }) {
  return (
    <div onClick={onClick} className={styles.container}>
      <i className="fa-solid fa-plus"></i> {title}
    </div>
  );
}

export default ModalLink;
