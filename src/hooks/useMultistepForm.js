import { useState } from "react";

function useMultistepForm(pages) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const nextPage = () => {
    setCurrentPageIndex((previousIndex) => {
      if (previousIndex >= pages.length - 1) return previousIndex;
      return previousIndex + 1;
    });
  };

  const previousPage = () => {
    setCurrentPageIndex((previousIndex) => {
      if (previousIndex <= 0) return previousIndex;
      return previousIndex - 1;
    });
  };

  const goToPage = (index) => {
    setCurrentPageIndex(index);
  };

  return {
    currentPageIndex,
    currentPage: pages[currentPageIndex],
    goToPage,
    nextPage,
    previousPage,
    steps: pages,
    isFirstPage: currentPageIndex === 0,
    isLastPage: currentPageIndex === pages.length - 1,
  };
}

export default useMultistepForm;
