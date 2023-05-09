import React from "react";
import styles from "./modalLink.module.css";

function ModalLink({ title }) {
  return (
    <div className={styles.container}>
      <i class="fa-solid fa-plus"></i> {title}
    </div>
  );
}

export default ModalLink;
