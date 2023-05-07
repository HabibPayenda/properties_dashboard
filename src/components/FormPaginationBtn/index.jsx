import React from "react";
import styles from "./formPaginationBtn.module.css";

function FormPaginationBtn({ title, onClick }) {
  if (title === "Previous") {
    return (
      <div onClick={onClick} className={styles.prvContainer}>
        {title}
      </div>
    );
  }

  return (
    <div onClick={onClick} className={styles.container}>
      {title}
      <i className="fa-solid fa-arrow-right"></i>
    </div>
  );
}

export default FormPaginationBtn;
