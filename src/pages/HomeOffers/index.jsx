import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./offers.module.css";
import SectionHeader from "../../components/SectionHeader";

function Offers() {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers.offers);
  console.log(offers);

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <SectionHeader
        title="Home offers"
        text="Unbeatable Property Offers: Your Guide to Finding Your Dream Home at a Great Price"
      />
      <div className={styles.contentContainer}></div>
    </div>
  );
}

export default Offers;
