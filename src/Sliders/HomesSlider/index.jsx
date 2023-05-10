import React from "react";
import styles from "./homesSlider.module.css";
import MainSlider from "..";
import useSlider from "../../hooks/useSlider";
import PropertySlideCard from "../../components/PropertySlideCard";
function HomesSlider({ home }) {
  let homeRooms = [];
  homeRooms = home?.home_rooms?.map((room) => {
    return <PropertySlideCard home={home} room={room} />;
  });
  const { currentSlide, currentSlideIndex, nextSlide, previousSlide, slides } =
    useSlider(homeRooms);
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
