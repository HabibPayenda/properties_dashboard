import React from "react";
import styles from "./propertyCard.module.css";

import img from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

function PropertyCard({
  icon,
  title,
  totalCount,
  lastAdded,
  propertyManagers,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>Total: {totalCount}</p>
        <p className={styles.text}>Last: {lastAdded}</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <p className={styles.footerTitle}></p>
          <div className={styles.footerList}>
            <img
              className={styles.footerImage}
              src={img}
              alt="property_manager"
            />
            <img
              className={styles.footerImage}
              src={img}
              alt="property_manager"
            />
            <img
              className={styles.footerImage}
              src={img}
              alt="property_manager"
            />
            <Link to="property_managers">
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className={styles.footerRight}>
          <p className={styles.text}>Total: {propertyManagers?.length}</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
