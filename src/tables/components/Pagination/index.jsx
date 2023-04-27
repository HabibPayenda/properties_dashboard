import React from "react";
import styles from "./pagination.module.css";

function Pagination({
  previousPage,
  nextPage,
  canNextPage,
  canPreviousPage,
  pageIndex,
  pageOptions,
}) {
  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        disabled={!canPreviousPage}
        onClick={() => previousPage()}
      >
        Previous
      </button>
      <span>
        <p className={styles.pageNumbers}>
          Page {pageIndex + 1} of {pageOptions.length}
        </p>
      </span>
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
