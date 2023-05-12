import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import styles from "./propertyManager.module.css";
import ContentHeader from "../../components/ContentHeader";
import { getPropertyManager } from "../../data/propertyManagersSlice";
import PropertiesSummary from "../../components/PropertiesSummary";
import ItemsCard from "../../components/ItemsCard";

function PropertyManager() {
  const { id } = useParams();

  const propertyManager = useSelector(
    (state) => state.propertyManagers.showPropertyManager
  );
  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPropertyManager(id));
  }, []);
  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <SectionHeader
        title={`Property Manager ${propertyManager?.name} details`}
      />
      <div className={styles.contentContainer}>
        <ItemsCard
          title="Homes"
          text="These homes belongs to this manager"
          icon={<i className="fa-solid fa-house"></i>}
          to="homes"
          total={0}
        />
        <ItemsCard
          title="Cars"
          text="These cars belongs to this manager"
          icon={<i className="fa-solid fa-car"></i>}
          to="/properties/homes"
          total={0}
        />
        <ItemsCard
          title="Warehouses"
          text="These warehouses belongs to this manager"
          icon={<i className="fa-solid fa-building-columns"></i>}
          to="/properties/homes"
        />
        <ItemsCard
          title="Lands"
          text="These lands belongs to this manager"
          icon={<i className="fa-solid fa-mountain-sun"></i>}
          to="/properties/homes"
        />
      </div>
    </div>
  );
}

export default PropertyManager;
