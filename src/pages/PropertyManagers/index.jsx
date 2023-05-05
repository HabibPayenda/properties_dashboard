import React, { useEffect } from "react";
import styles from "./propertyManagers.module.css";
import SectionHeader from "../../components/SectionHeader";
import PropertyManagerCreate from "../../Forms/PropertyManagerCreate";
import { useDispatch, useSelector } from "react-redux";
import { getAllPropertyManagers } from "../../data/propertyManagersSlice";
import PropertyManagersTable from "../../tables/PropertyManagersTable";

function PropertyManagers() {
  const dispatch = useDispatch();
  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );
  useEffect(() => {
    dispatch(getAllPropertyManagers());
  }, []);
  const propertyManagers = useSelector(
    (state) => state.propertyManagers.propertyManagers
  );
  console.log(propertyManagers);
  return (
    <div
      className={
        isSidebarShown
          ? styles.propertyManagersContainer
          : styles.propertyManagersContainerClose
      }
    >
      <div className={styles.propertyManagersList}>
        <SectionHeader
          title="Property Managers"
          text="Streamline Your Property Management with Expert Management Solutions!"
        />
        <div style={{ flex: 9, width: "100%" }}>
          <PropertyManagersTable />
        </div>
      </div>
    </div>
  );
}

export default PropertyManagers;
