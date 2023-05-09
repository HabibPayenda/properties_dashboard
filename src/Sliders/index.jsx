import React, { useEffect, useRef } from "react";
import styles from "./sliders.module.css";
function MainSlider({
  currentSlide,
  nextSlide,
  previousSlide,
  slides,
  currentSlideIndex,
}) {
  const footerRef = useRef();

  const generateFooterContent = () => {
    let content = slides.map((slide, index) => {
      if (index === currentSlideIndex) {
        return <p>a</p>;
      } else {
        return <p>n</p>;
      }
    });
    return content;
  };

  useEffect(() => {
    generateFooterContent();
  }, [slides]);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <p className={styles.btn} onClick={() => previousSlide()}>
          prv
        </p>
        <div className={styles.content}>{currentSlide}</div>
        <p className={styles.btn} onClick={() => nextSlide()}>
          next
        </p>
      </div>
      <div ref={footerRef} className={styles.footer}>
        {generateFooterContent()}
      </div>
    </div>
  );
}

export default MainSlider;
