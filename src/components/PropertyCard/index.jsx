import React from "react";
import styles from "./propertyCard.module.css";

import img from "../../assets/user.jpg";
import { Link } from "react-router-dom";

function PropertyCard({
  icon,
  title,
  totalCount,
  lastAdded,
  propertyManagers,
  color,
}) {
  return (
    <div className={styles.container}>
      <div
        className={styles.iconContainer}
        style={{
          backgroundColor: color ? color : "blueviolet",
          boxShadow: `1px 1px 5px ${color ? color : "blueviolet"}`,
        }}
      >
        {icon}
      </div>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.text}>
          <i className="fa-solid fa-chart-line"></i>
          <p>{5}</p>
        </div>
        <div className={styles.text}>
          <i className="fa-regular fa-calendar"></i>
          <p>2023/4/2</p>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerList}>
            <p className={styles.footerTitle}>Managers</p>
            <div className={styles.footerListItems}>
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
              <Link
                className={styles.footerIconContainer}
                to="/property_managers"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footerRight}>
          <p className={styles.footerTitle}>Total</p>
          <p className={styles.text}>{5}</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
