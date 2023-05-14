import React from "react";
import styles from "./globalFilter.module.css";

function GlobalFilter({ filter, setFilter }) {
  return (
    <span className={styles.container}>
      <p className={styles.label}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </p>
      <input
        className={styles.input}
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search here..."
      />
    </span>
  );
}

export default GlobalFilter;
