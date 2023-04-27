import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import styles from "./propertyManager.module.css";
import ContentHeader from "../../components/ContentHeader";
import { getPropertyManager } from "../../data/propertyManagersSlice";

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
        </div>
        <div className={styles.column}>
          <ContentHeader title="Property Managers" />
        </div>
        <div className={styles.column}>
          <ContentHeader title="Trainings" />
        </div>
      </div>
    </div>
  );
}

export default PropertyManager;
