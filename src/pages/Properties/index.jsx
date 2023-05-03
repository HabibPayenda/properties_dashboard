import React, { useEffect } from "react";
import PropertyCard from "../../components/PropertyCard";
import styles from "./properties.module.css";
import SectionHeader from "../../components/SectionHeader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllHomes } from "../../data/homeSlice";
import { getAllCars } from "../../data/CarsSlice";
import { getAllLands } from "../../data/LandsSlice";

function Properties() {
  const homes = useSelector((state) => state.homes.homes);
  const cars = useSelector((state) => state.cars.cars);
  const lands = useSelector((state) => state.lands.lands);

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHomes());
    dispatch(getAllCars());
    dispatch(getAllLands());
  }, []);
  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <div style={{ flex: 9, width: "100%", height: "83%" }}>
        <SectionHeader title="Properties" />
        <div className={styles.contentContainer}>
          <Link className={styles.link} to="homes">
            <PropertyCard title="Homes" count={homes?.length} />
          </Link>
          <Link className={styles.link} to="cars">
            <PropertyCard title="Cars" count={cars?.length} />
          </Link>
          <Link className={styles.link} to="warehouses">
            <PropertyCard title="Warehouses" count={0} />
          </Link>
          <Link className={styles.link} to="lands">
            <PropertyCard title="Lands" count={lands?.length} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Properties;
