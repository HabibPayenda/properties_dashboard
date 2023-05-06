import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function useMultistepForm(pages) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const nextPage = (formik) => {
    if (currentPageIndex == pages.length - 1) {
      const isEmpty = Object.values(formik.values).some(
        (value) => value === ""
      );
      if (isEmpty) {
        setCurrentPageIndex(() => -1);
        toast.error("Some values are empty");
      } else {
        formik.submitForm();
      }
    }
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
    pages: pages,
    isFirstPage: currentPageIndex === 0,
    isLastPage: currentPageIndex === pages.length - 1,
  };
}

export default useMultistepForm;
