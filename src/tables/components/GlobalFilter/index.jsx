import React from "react";
import styles from "./globalFilter.module.css";

function GlobalFilter({ filter, setFilter }) {
  return (
    <span className={styles.container}>
      <p className={styles.label}>Search:</p>
      <input
        className={styles.input}
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
}

export default GlobalFilter;
