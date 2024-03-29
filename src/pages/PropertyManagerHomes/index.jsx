import React from "react";
import styles from "./propertyMangerHomes.module.css";
import { useSelector } from "react-redux";
import SectionHeader from "../../components/SectionHeader";
import PersonHomeCard from "../../components/PersonHomeCard";

function PropertyManagerHomes() {
  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );
  const properties = useSelector(
    (state) => state.propertyManagers.propertyManagerProperties
  );
  const { homes } = properties;

  const renderHomes = homes?.map((home) => {
    return <PersonHomeCard home={home} />;
  });

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <SectionHeader
        title="Property Manager Homes"
        text="Embark on a Journey of Discovery: Exploring Homes That Capture the Heart and Mind"
      />
      <div className={styles.contentContainer}>
        {homes.length > 0 ? (
          renderHomes
        ) : (
          <h1>This Agent doesn't have any homes rigestered.</h1>
        )}
      </div>
    </div>
  );
}

export default PropertyManagerHomes;
