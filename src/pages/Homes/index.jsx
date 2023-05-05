import React from "react";
import styles from "./homes.module.css";
import SectionHeader from "../../components/SectionHeader";
import HomeCreate from "../../Forms/HomeCreate";
import HomesTable from "../../tables/HomeTable";

function Homes() {
  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <SectionHeader title="Homes" />
        <div className={styles.contentContainer}>
          <div style={{ flex: 9, width: "100%" }}>
            <HomesTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homes;
