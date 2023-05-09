import React, { useEffect, useRef } from "react";
import styles from "./sliders.module.css";
function MainSlider({
  currentSlide,
  nextSlide,
  previousSlide,
  totalSlides,
  currentSlideIndex,
}) {
  const footerRef = useRef();

  const generateFooterContent = () => {
    for (var i = 1; i <= totalSlides; i += 1) {
      if (i === currentSlideIndex) {
        footerRef.current.append(<p>a</p>);
      } else {
        footerRef.current.append(<p>n</p>);
      }
    }
  };
  useEffect(() => {
    generateFooterContent();
  }, [totalSlides]);

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
      <div ref={footerRef} className={styles.footer}></div>
    </div>
  );
}

export default MainSlider;
