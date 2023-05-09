import React from "react";
import styles from "./homesSlider.module.css";
import MainSlider from "..";
function HomesSlider() {
  return (
    <div className={styles.contianer}>
      <div className={styles.header}></div>
      <div className={styles.slider}>
        <MainSlider />
      </div>
    </div>
  );
}

export default HomesSlider;
