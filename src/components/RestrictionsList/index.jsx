import React from "react";
import RestrictionItem from "../RestrictionItem";
import styles from "./restrictionsList.module.css";
function RestrictionsList({ restrictions }) {
  const renderRestrictions = () => {
    if (restrictions?.length < 1) {
      return <h1>No restrictions added for this home</h1>;
    }
    let toRender = restrictions?.map((item) => {
      return <RestrictionItem restriction={item} />;
    });
    return toRender;
  };
  return <div className={styles.container}>{renderRestrictions()}</div>;
}

export default RestrictionsList;
