import React from "react";
import styles from "./homesSlider.module.css";
import MainSlider from "..";
import useSlider from "../../hooks/useSlider";
import PropertySlideCard from "../../components/PropertySlideCard";
function HomesSlider() {
  const hoomRooms = [
    <PropertySlideCard title="Slide One" />,
    <PropertySlideCard title="Slide two" />,
  ];
  const { currentSlide, currentSlideIndex, nextSlide, previousSlide, slides } =
    useSlider(hoomRooms);
  return (
    <div className={styles.container}>
      <MainSlider
        currentSlide={currentSlide}
        currentSlideIndex={currentSlideIndex}
        slides={slides}
        nextSlide={nextSlide}
        previousSlide={previousSlide}
      />
    </div>
  );
}

export default HomesSlider;
