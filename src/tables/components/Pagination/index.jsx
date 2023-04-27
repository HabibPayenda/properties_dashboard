import React from "react";
import styles from "./pagination.module.css";

function Pagination({ previousPage, nextPage, canNextPage, canPreviousPage }) {
  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        disabled={!canPreviousPage}
        onClick={() => previousPage()}
      >
        Previous
      </button>
      <button
        className={styles.btn}
        disabled={!canNextPage}
        onClick={() => nextPage()}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
