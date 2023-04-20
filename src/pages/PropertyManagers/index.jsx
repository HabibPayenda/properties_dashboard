import React from "react";
import styles from "./propertyManagers.module.css";
import SectionHeader from "../../components/SectionHeader";

function PropertyManagers() {
  return (
    <div className={styles.propertyManagersContainer}>
      <div className={styles.propertyManagersList}>
        <SectionHeader title="Property Managers" />
        <div className={styles.list}>Property Managers List</div>
      </div>
      <div className={styles.propertyManagersAdd}>Add PropertyManger</div>
    </div>
  );
}

export default PropertyManagers;
