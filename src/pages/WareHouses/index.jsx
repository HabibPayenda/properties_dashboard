import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./wareHouses.module.css";
import SectionHeader from "../../components/SectionHeader";
import WarehousesTable from "../../tables/WarehouseTable";

function WareHouses() {
  const dispatch = useDispatch();

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  useEffect(() => {}, []);

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <div className={styles.contentContainer}>
        <SectionHeader title="WareHouses" text="All regestered warehouses" />
        <div style={{ width: "100%" }}>
          <WarehousesTable />
        </div>
      </div>
    </div>
  );
}

export default WareHouses;
