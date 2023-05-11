import React from "react";
import RestrictionItem from "../RestrictionItem";

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
