import React from "react";
import styles from "./amenitiesList.module.css";
import AmenityItem from "../AmenityItem";
function AmenitiesList({ amenities }) {
  const renderAmenities = () => {
    let toRender = amenities.map((item) => {
      return <AmenityItem amenity={item} />;
    });

    return toRender;
  };
  return <div style={styles.container}>{renderAmenities()}</div>;
}

export default AmenitiesList;
