import React from "react";
import styles from "./homesSlider.module.css";
import MainSlider from "..";
import useSlider from "../../hooks/useSlider";
function HomesSlider() {
  const hoomRooms = [<div>home 1</div>, <div>home 2</div>];
  const { currentSlide, currentSlideIndex, nextSlide, previousSlide, slides } =
    useSlider(hoomRooms);
  return (
    <div className={styles.contianer}>
      <div className={styles.header}></div>
      <div className={styles.slider}>
        <MainSlider
          currentSlide={currentSlide}
          currentSlideIndex={currentSlideIndex}
          slides={slides}
          nextSlide={nextSlide}
          previousSlide={previousSlide}
        ></MainSlider>
      </div>
    </div>
  );
}

export default HomesSlider;
