import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./trainers.module.css";
import SectionHeader from "../../components/SectionHeader";

function Trainers() {
  const dispatch = useDispatch();

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  useEffect(() => {}, []);

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <div className={styles.contentContainer}>
        <SectionHeader title="Trainers" text="All trainers list" />
        <div style={{ width: "100%" }}></div>
      </div>
    </div>
  );
}

export default Trainers;
