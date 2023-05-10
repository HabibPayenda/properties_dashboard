import React, { useEffect, useMemo } from "react";
import styles from "./sliders.module.css";
function MainSlider({
  currentSlide,
  nextSlide,
  previousSlide,
  slides,
  currentSlideIndex,
}) {
  const generateFooterContent = () => {
    let content = slides?.map((slide, index) => {
      if (index === currentSlideIndex) {
        return (
          <div className={styles.footerCircleContainer}>
            <i
              style={{ color: "blueviolet" }}
              className="fa-solid fa-circle"
            ></i>
          </div>
        );
      } else {
        return (
          <div className={styles.footerCircleContainer}>
            <i className="fa-solid fa-circle" style={{ color: "#777" }}></i>
          </div>
        );
      }
    });
    return content;
  };

  useEffect(() => {
    generateFooterContent();
  }, [slides]);
  const slideToRender = useMemo(() => currentSlide, [currentSlide]);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <p className={styles.btn} onClick={() => previousSlide()}>
          <i className="fa-solid fa-arrow-left"></i>
        </p>
        <div className={styles.content}>{slideToRender}</div>
        <p className={styles.btn} onClick={() => nextSlide()}>
          <i className="fa-solid fa-arrow-right"></i>
        </p>
      </div>
      <div className={styles.footer}>{generateFooterContent()}</div>
    </div>
  );
}

export default MainSlider;
