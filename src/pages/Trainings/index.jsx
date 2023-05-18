import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./trainings.module.css";
import SectionHeader from "../../components/SectionHeader";

function Trainings() {
  const dispatch = useDispatch();

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  useEffect(() => {}, []);

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <div className={styles.contentContainer}>
        <SectionHeader title="Trainings" text="All trainings list" />
        <div style={{ width: "100%" }}></div>
      </div>
    </div>
  );
}

export default Trainings;
