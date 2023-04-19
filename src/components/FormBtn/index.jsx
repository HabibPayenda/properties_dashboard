import React from "react";
import styles from "./formBtn.module.css";

function FormBtn({ title, onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {" "}
      {title}
    </button>
  );
}

export default FormBtn;
