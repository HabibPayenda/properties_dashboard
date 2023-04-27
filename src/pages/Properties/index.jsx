import React from "react";
import PropertyCard from "../../components/PropertyCard";
import styles from "./properties.module.css";
import SectionHeader from "../../components/SectionHeader";
import { Link } from "react-router-dom";

function Properties() {
  return (
    <div className={styles.container}>
      <div style={{ flex: 9, width: "100%", height: "83%" }}>
        <SectionHeader title="Properties" />
        <div className={styles.contentContainer}>
          <Link className={styles.link} to="homes">
            <PropertyCard title="Homes" count={0} />
          </Link>
          <PropertyCard title="Cars" count={0} />
          <PropertyCard title="Warehouses" count={0} />
          <PropertyCard title="Lands" count={0} />
        </div>
      </div>
    </div>
  );
}

export default Properties;
