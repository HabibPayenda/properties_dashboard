import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./cars.module.css";
import SectionHeader from "../../components/SectionHeader";
import { getAllCars } from "../../data/CarsSlice";

function Cars() {
  const dispatch = useDispatch();

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <div className={styles.contentContainer}>
        <SectionHeader title="Cars" text="All regestered cars" />
        <div style={{ width: "100%" }}></div>
      </div>
    </div>
  );
}

export default Cars;
