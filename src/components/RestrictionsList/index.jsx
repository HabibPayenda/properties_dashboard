import React from "react";
import RestrictionItem from "../RestrictionItem";
import styles from "./restrictionsList.module.css";
function RestrictionsList({ restrictions }) {
  const renderRestrictions = () => {
    let toRender = restrictions?.map((item) => {
      return <RestrictionItem restriction={item} />;
    });
    return toRender;
  };
  return <div className={styles.container}>{renderRestrictions()}</div>;
}

export default RestrictionsList;
