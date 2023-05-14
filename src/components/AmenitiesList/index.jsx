import React from "react";
import styles from "./amenitiesList.module.css";
import AmenityItem from "../AmenityItem";
function AmenitiesList({ amenities }) {
  const renderAmenities = () => {
    if (amenities?.length < 1) {
      return <h1>No Amenities</h1>;
    }
    let toRender = amenities.map((item) => {
      return <AmenityItem amenity={item} />;
    });

    return toRender;
  };
  return <div className={styles.container}>{renderAmenities()}</div>;
}

export default AmenitiesList;
