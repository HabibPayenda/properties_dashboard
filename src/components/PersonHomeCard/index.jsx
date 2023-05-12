import React from "react";
import homeImage from "../../assets/home.jpg";

function PersonHomeCard() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={homeImage} alt="" />
      </div>
      <div className={styles.contentContainer}></div>
    </div>
  );
}

export default PersonHomeCard;
