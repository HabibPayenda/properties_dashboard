import React, { useEffect } from "react";
import styles from "./car.module.css";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHome, getHomeProperty } from "../../data/homeSlice";
import PropertyDetailsCard from "../../components/PropertyDetailsCard";
import HomesSlider from "../../Sliders/HomesSlider";

function Car() {
  const { id } = useParams();
  const location = useLocation();

  const dispatch = useDispatch();

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <div className={styles.listContainer}>{id}</div>
    </div>
  );
}

export default Car;
