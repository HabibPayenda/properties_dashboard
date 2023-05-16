import { useFormik } from "formik";
import React, { useState } from "react";
import styles from "./offerCreate.module.css";
import { useDispatch, useSelector } from "react-redux";
import useMultistepForm from "../../hooks/useMultistepForm";
import FormPaginationBtn from "../../components/FormPaginationBtn";
import FormPageInfo from "../../components/FormPageInfo";
import offerCreateSchema from "./offerCreateSchema";
import OfferCreateDeatailsForm from "./OfferCreateDetailsForm";
import { createHomeOffer } from "../../data/homeSlice";

function OfferCreate() {
  const dispatch = useDispatch();
  const homeProperty = useSelector((state) => state.homes.homeProperty);
  const home = useSelector((state) => state.homes.showHome);

  const handleFormSubmit = () => {
    console.log("clicked");
    dispatch(createHomeOffer({ ...formik.values, home_id: home?.id }));
  };

  const formik = useFormik({
    initialValues: {
      start_date: "",
      end_date: "",
      title: "",
      description: "",
      offer_price: "",
      deal_info_id: homeProperty?.deal_infos[0]?.id,
      property_id: homeProperty?.id,
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
