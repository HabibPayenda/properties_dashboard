import React from "react";
import styles from "./homes.module.css";
import SectionHeader from "../../components/SectionHeader";

function Homes() {
  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <SectionHeader title="Homes" />
        <div className={styles.contentContainer}></div>
      </div>
      <div className={styles.addNewContainer}></div>
    </div>
  );
}

export default Homes;
