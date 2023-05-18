import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./lands.module.css";
import SectionHeader from "../../components/SectionHeader";
import LandsTable from "../../tables/LandsTable";
import { getAllLands } from "../../data/LandsSlice";

function Lands() {
  const dispatch = useDispatch();

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  useEffect(() => {
    dispatch(getAllLands());
  }, []);

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <div className={styles.contentContainer}>
        <SectionHeader title="Lands" text="All regestered lands" />
        <div style={{ width: "100%" }}>
          <LandsTable />
        </div>
      </div>
    </div>
  );
}

export default Lands;
