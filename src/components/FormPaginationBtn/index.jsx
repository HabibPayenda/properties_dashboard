import React from "react";
import styles from "./formPaginationBtn.module.css";

function FormPaginationBtn({ title, onClick }) {
  return (
    <div onClick={onClick} className={styles.container}>
      {" "}
      {title}
    </div>
  );
}

export default FormPaginationBtn;
