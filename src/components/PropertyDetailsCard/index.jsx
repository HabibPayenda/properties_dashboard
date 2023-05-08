import React from "react";
import styles from "./propertyDetailsCard.module.css";
import { Link } from "react-router-dom";
import homeImage from "../../assets/home.jpg";

function PropertyDetailsCard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link className={styles.backLink} to="..">
          Back
        </Link>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={homeImage} alt="" />
        </div>
        <div className={styles.detailsContainer}>
          <h2 className={styles.title}>Home one</h2>
          <p className={styles.subTitle}>A beutiful home</p>
          <p className={styles.dealPrice}>12000</p>
          <p className={styles.dealType}>Rent</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetailsCard;
