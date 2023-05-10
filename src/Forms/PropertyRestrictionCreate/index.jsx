import { useFormik } from "formik";
import React from "react";
import styles from "./propertyRestrictionCreate.module.css";
import { useDispatch } from "react-redux";
import { addHome } from "../../data/homeSlice";
import useMultistepForm from "../../hooks/useMultistepForm";
import FormPaginationBtn from "../../components/FormPaginationBtn";
import FormPageInfo from "../../components/FormPageInfo";
import homeAmenityCreateSchema from "./homeAmenityCreateSchema";
import PropertyRestrictionDetailsForm from "./PropertyRestrictionDetailsForm";

function PropertyRestrictionCreate({ home }) {
  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    console.log("clicked");
    console.log(formik.values);
    dispatch(addHome(formik.values));
    // formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: homeAmenityCreateSchema,
    onSubmit: handleFormSubmit,
  });

  const { currentPage, isLastPage, nextPage, previousPage, currentPageIndex } =
    useMultistepForm([
      <PropertyRestrictionDetailsForm
        title="Add Property Restriction"
        text="Effortlessly Manage Home Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        styles={styles}
      />,
    ]);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidbarHeader}>
          <i className={["fa-solid fa-igloo"]}> </i>
          <h1 className={styles.logoText}>PAPI</h1>
        </div>
        <div className={styles.sidebarStepsContainer}>
          <FormPageInfo
            title="Home Amenity Details"
            isCurrentPage={true}
            pageNumber={1}
          />
        </div>
      </div>
      <div className={styles.formContent}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          {currentPage}
        </form>
        <div className={styles.btnContainer}>
          <FormPaginationBtn title="Previous" onClick={() => previousPage()} />
          <FormPaginationBtn
            title={isLastPage ? "Finish" : "Next"}
            onClick={() => nextPage(formik)}
          />
        </div>
      </div>
    </div>
  );
}

export default PropertyRestrictionCreate;
