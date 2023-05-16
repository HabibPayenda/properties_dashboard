import { useFormik } from "formik";
import React, { useState } from "react";
import styles from "./offerCreate.module.css";
import { useDispatch } from "react-redux";
import useMultistepForm from "../../hooks/useMultistepForm";
import FormPaginationBtn from "../../components/FormPaginationBtn";
import FormPageInfo from "../../components/FormPageInfo";
import offerCreateSchema from "./offerCreateSchema";
import OfferCreateDeatailsForm from "./OfferCreateDetailsForm";
import { createHomeOffer } from "../../data/homeSlice";

function OfferCreate({ deal_info_id, property_id }) {
  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    console.log("clicked");
    dispatch(createHomeOffer(formik.values));
  };

  const formik = useFormik({
    initialValues: {
      start_date: "",
      end_date: "",
      title: "",
      description: "",
      offer_price: "",
      deal_info_id: deal_info_id,
      property_id: property_id,
    },
    validationSchema: offerCreateSchema,
    onSubmit: handleFormSubmit,
  });

  const { currentPage, isLastPage, nextPage, previousPage, currentPageIndex } =
    useMultistepForm([
      <OfferCreateDeatailsForm
        title="Add Property Offer Info"
        text="Unbeatable Property Offers: Your Guide to Finding Your Dream Home at a Great Price"
        formik={formik}
        admins={admins}
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
            title="Offer Details"
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

export default OfferCreate;
