import React from "react";
import styles from "./homes.module.css";
import SectionHeader from "../../components/SectionHeader";
import HomesTable from "../../tables/HomeTable";
import { useSelector } from "react-redux";

function Homes() {
  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );
  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <div className={styles.listContainer}>
        <SectionHeader
          title="Homes"
          text="Embark on a Journey of Discovery: Exploring Homes That Capture the Heart and Mind"
        />
        <div className={styles.contentContainer}>
          <div style={{ width: "100%" }}>
            <HomesTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homes;
