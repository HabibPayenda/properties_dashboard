import { useFormik } from "formik";
import React, { useState } from "react";
import styles from "./propertyManagerCreate.module.css";
import { useDispatch, useSelector } from "react-redux";
import useMultistepForm from "../../hooks/useMultistepForm";
import FormPaginationBtn from "../../components/FormPaginationBtn";
import FormPageInfo from "../../components/FormPageInfo";
import PropertyManagerDetailsForm from "./PropertyManagerDetailsForm";
import PropertyManagerAddressForm from "./PropertyMagagerAddressForm";
import PropertyManagerContact from "./PropertyMangerContactForm";
import propertyManagerCreateSchema from "./propertyManagerCreateSchema";
import { addPropertyManager } from "../../data/propertyManagersSlice";
import PropertyManagerImageForm from "./PropertyManagerImageForm";

function PropertyManagerCreate() {
  const agents = useSelector((state) => state.agents.agents);
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    console.log("clicked");
    dispatch(addPropertyManager({ ...formik.values, image: image }));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      company_name: "",
      status: "",
      agent_id: "",
      province: "",
      city: "",
      district: "",
      phone_number_one: "",
      email_one: "",
    },
    validationSchema: propertyManagerCreateSchema,
    onSubmit: handleFormSubmit,
  });

  const { currentPage, isLastPage, nextPage, previousPage, currentPageIndex } =
    useMultistepForm([
      <PropertyManagerImageForm
        title="Add Property Manager Image to the System"
        text="Effortlessly Manage Agent Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        agents={agents}
        styles={styles}
        setImage={setImage}
      />,
      <PropertyManagerDetailsForm
        title="Add New Property Manager to the System"
        text="Effortlessly Manage Agent Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        agents={agents}
        styles={styles}
      />,
      <PropertyManagerAddressForm
        title="Add Property Manager Address Info"
        text="Effortlessly Manage Agent Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        styles={styles}
      />,
      <PropertyManagerContact
        title="Add Property Manager Contact Info"
        text="Effortlessly Manage Agent Information: Perfecting Your Team's Efficiency!"
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
            title="Manager Image"
            isCurrentPage={true}
            pageNumber={1}
          />
          <FormPageInfo
            title="Manager Details"
            isCurrentPage={currentPageIndex >= 1}
            pageNumber={2}
          />
          <FormPageInfo
            title="Manager Address"
            isCurrentPage={currentPageIndex >= 2}
            pageNumber={3}
          />
          <FormPageInfo
            title="Manager Contact"
            isCurrentPage={currentPageIndex >= 3}
            pageNumber={4}
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

export default PropertyManagerCreate;
