import React from "react";
import styles from "./formPaginationBtn.module.css";

function FormPaginationBtn({ title }) {
  return <div className={styles.container}> {title}</div>;
}

export default FormPaginationBtn;
