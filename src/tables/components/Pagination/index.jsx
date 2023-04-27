import React from "react";
import styles from "./pagination.module.css";

function Pagination({ previousPage, nextPage }) {
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => previousPage()}>
        Previous
      </button>
      <button className={styles.btn} onClick={() => nextPage()}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
