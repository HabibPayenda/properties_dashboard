import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import styles from "./propertyManager.module.css";
import ContentHeader from "../../components/ContentHeader";
import { getPropertyManager } from "../../data/propertyManagersSlice";
import PropertiesSummary from "../../components/PropertiesSummary";

function PropertyManager() {
  const { id } = useParams();

  const propertyManager = useSelector(
    (state) => state.propertyManagers.showPropertyManager
  );
  console.log(propertyManager);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPropertyManager(id));
  }, []);
  return (
    <div className={styles.container}>
      <SectionHeader
        title={`Property Manager ${propertyManager?.name} details`}
      />
      <div className={styles.contentContainer}>
        <div className={styles.column}>
          <ContentHeader title="Properties" />
          <p>{`Count: ${propertyManager?.properties?.length}`}</p>
          {propertyManager?.properties?.length < 1 && (
            <h3>
              There are no properties associated with this property manager
            </h3>
          )}
        </div>
        <div className={styles.column}>
          <ContentHeader title="Reviews" />
          {propertyManager?.property_manager_reviews?.length < 1 && (
            <h3>There are no reviews associated with this property manager</h3>
          )}
        </div>
        <div className={styles.column}>
          <ContentHeader title="Address" />
          {propertyManager?.property_manager_addresses?.length < 1 && (
            <h3>There is no address associated with this property manager</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default PropertyManager;
