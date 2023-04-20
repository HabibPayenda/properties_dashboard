import React, { useEffect } from "react";
import styles from "./propertyManagers.module.css";
import SectionHeader from "../../components/SectionHeader";
import PropertyManagerCreate from "../../Forms/PropertyManagerCreate";
import { useDispatch, useSelector } from "react-redux";
import { getAllPropertyManagers } from "../../data/propertyManagersSlice";

function PropertyManagers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPropertyManagers());
  }, []);
  const propertyManagers = useSelector(
    (state) => state.propertyManagers.propertyManagers
  );
  console.log(propertyManagers);
  return (
    <div className={styles.propertyManagersContainer}>
      <div className={styles.propertyManagersList}>
        <SectionHeader title="Property Managers" />
        <div className={styles.list}>
          <h1>Propety manager List</h1>
          {propertyManagers &&
            propertyManagers.map((manager) => <p>{manager.name}</p>)}
        </div>
      </div>
      <div className={styles.propertyManagersAdd}>
        <PropertyManagerCreate />
      </div>
    </div>
  );
}

export default PropertyManagers;
