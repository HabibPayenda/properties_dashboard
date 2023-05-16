import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./homeOffers.module.css";
import SectionHeader from "../../components/SectionHeader";
import HomesOffersTable from "../../tables/HomeOffersTable";

function HomeOffers() {
  const dispatch = useDispatch();

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <SectionHeader
        title="Home offers"
        text="Unbeatable Property Offers: Your Guide to Finding Your Dream Home at a Great Price"
      />
      <div className={styles.contentContainer}>
        <div style={{ width: "100%" }}>
          <HomesOffersTable />
        </div>
      </div>
    </div>
  );
}

export default HomeOffers;
