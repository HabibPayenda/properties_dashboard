import React from "react";
import styles from "./propertyManagers.module.css";
import SectionHeader from "../../components/SectionHeader";
import PropertyManagerCreate from "../../Forms/PropertyManagerCreate";

function PropertyManagers() {
  return (
    <div className={styles.propertyManagersContainer}>
      <div className={styles.propertyManagersList}>
        <SectionHeader title="Property Managers" />
        <div className={styles.list}>Property Managers List</div>
      </div>
      <div className={styles.propertyManagersAdd}>
        <PropertyManagerCreate />
      </div>
    </div>
  );
}

export default PropertyManagers;
