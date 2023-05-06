import { useEffect, useState } from "react";

function useMultistepForm(pages) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [lastPageFinished, setLastPageFineshed] = useState(false);
  const [finisedPages, setFinishedPages] = useState([]);

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

  const isPageFinished = !Object.values(
    pages[currentPageIndex].props.formik.values
  ).some((value) => value === "");

  useEffect(() => {
    setFinishedPages((pages) => {
      const newPages = [...pages];
      newPages[currentPageIndex] = isPageFinished;
      return newPages;
    });
  }, [isPageFinished, currentPageIndex]);

  return {
    currentPageIndex,
    currentPage: pages[currentPageIndex],
    goToPage,
    nextPage,
    previousPage,
    pages: pages,
    isFirstPage: currentPageIndex === 0,
    isLastPage: currentPageIndex === pages.length - 1,
    finisedPages,
  };
}

export default useMultistepForm;
