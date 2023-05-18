import React from "react";
import styles from "./propertyDetailsHeader.module.css";
import { Link } from "react-router-dom";

function PropertyDetailsHeader({ children }) {
  return (
    <div className={styles.header}>
      <Link className={styles.backLink} to="..">
        <i className="fa-solid fa-arrow-left"></i>
        Homes
      </Link>
      <div className={styles.linksContainer}>{children}</div>
    </div>
  );
}

export default PropertyDetailsHeader;
