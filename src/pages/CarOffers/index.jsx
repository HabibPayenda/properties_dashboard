import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./carOffers.module.css";
import SectionHeader from "../../components/SectionHeader";

function CarOffers() {
  const dispatch = useDispatch();

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <SectionHeader
        title="Car offers"
        text="Unbeatable Property Offers: Your Guide to Finding Your Dream Home at a Great Price"
      />
      <div className={styles.contentContainer}></div>
    </div>
  );
}

export default CarOffers;
