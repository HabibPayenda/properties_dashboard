import { useState } from "react";

function useSlider(slides) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((previousIndex) => {
      if (previousIndex >= slides.length - 1) return 0;
      return previousIndex + 1;
    });
  };

  const previousSlide = () => {
    setCurrentSlideIndex((previousIndex) => {
      if (previousIndex <= 0) return slides.length - 1;
      return previousIndex - 1;
    });
  };

  return {
    currentSlideIndex: currentSlideIndex,
    currentSlide: slides[currentSlideIndex],
    nextSlide: nextSlide,
    previousSlide: previousSlide,
    slides: slides,
    isFirstSlide: currentSlideIndex === 0,
    isLastSlide: currentSlideIndex === slides.length - 1,
  };
}

export default useSlider;
