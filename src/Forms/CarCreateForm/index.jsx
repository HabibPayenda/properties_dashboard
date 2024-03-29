import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import styles from "./carCreateForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addHome } from "../../data/homeSlice";
import useMultistepForm from "../../hooks/useMultistepForm";
import FormPaginationBtn from "../../components/FormPaginationBtn";
import FormPageInfo from "../../components/FormPageInfo";
import CarCreateImageForm from "./CarCreateImageForm";
import CarCreateDetailsForm from "./CarCreateDetails";
import CarCreateAddressForm from "./CarCreateAddress";
import CarCreateInfoForm from "./CarCreateInfoForm";
import CarCreateDealInfoForm from "./CarCreateDealInfoForm";
import carCreateSchema from "./carCreateFormSchma";
import { addCar } from "../../data/CarsSlice";

function CarCreateForm() {
  const [image, setImage] = useState(null);
  const imageRef = useRef(null);
  const agents = useSelector((state) => state.agents.agents);
  const propertyManagers = useSelector(
    (state) => state.propertyManagers.propertyManagers
  );

  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    console.log("clicked");
    console.log(formik.values);
    dispatch(addCar({ ...formik.values, image: image }));
    // formik.resetForm();
  };

  console.log(image);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      availability_status: "",
      property_manager_id: "",
      agent_id: "",
      province: "",
      city: "",
      district: "",
      deal_type: "",
      duration: "",
      price_per_duration: "",
      total_price: "",
      total_duration: "",
      brand: "",
      model: "",
      year: "",
      mile_age: "",
      transmission: "",
      fuel_type: "",
      engine_size: "",
      body_style: "",
      identity_number: "",
    },
    validationSchema: carCreateSchema,
    onSubmit: handleFormSubmit,
  });

  const { currentPage, isLastPage, nextPage, previousPage, currentPageIndex } =
    useMultistepForm([
      <CarCreateImageForm
        title="Add Car Image to the System"
        text="Effortlessly Manage Home Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        styles={styles}
        setImage={setImage}
      />,
      <CarCreateDetailsForm
        title="Add New Car to the System"
        text="Effortlessly Manage Home Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        agents={agents}
        propertyManagers={propertyManagers}
        styles={styles}
        imageRef={imageRef}
        setImage={setImage}
      />,
      <CarCreateInfoForm
        title="Add Car Information to the System"
        text="Effortlessly Manage Home Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        styles={styles}
      />,
      <CarCreateAddressForm
        title="Add Car Address to the System"
        text="Effortlessly Manage Home Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        styles={styles}
      />,
      <CarCreateDealInfoForm
        title="Add Car Deal Info to the System"
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
          <FormPageInfo title="Car Image" isCurrentPage={true} pageNumber={1} />
          <FormPageInfo
            title="Car Details"
            isCurrentPage={currentPageIndex >= 1}
            pageNumber={2}
          />
          <FormPageInfo
            title="Car Info"
            isCurrentPage={currentPageIndex >= 2}
            pageNumber={3}
          />
          <FormPageInfo
            title="Car Address"
            isCurrentPage={currentPageIndex >= 3}
            pageNumber={4}
          />
          <FormPageInfo
            title="Car Deal Info"
            isCurrentPage={currentPageIndex >= 4}
            pageNumber={5}
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

export default CarCreateForm;
