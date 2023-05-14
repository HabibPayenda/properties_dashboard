import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import homeCreateSchema from "./homeCreateSchema";
import styles from "./homeCreate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addHome } from "../../data/homeSlice";
import useMultistepForm from "../../hooks/useMultistepForm";
import FormPaginationBtn from "../../components/FormPaginationBtn";
import FormPageInfo from "../../components/FormPageInfo";
import HomeDetailsForm from "./homeDetails";
import HomeAddressForm from "./HomeAddressForm";
import HomeDealInfoForm from "./HomeDealInfoForm";
import HomeImageForm from "./HomeImageForm";

function HomeCreate() {
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
    dispatch(addHome({ ...formik.values, image: image }));
    // formik.resetForm();
  };

  console.log(image);

  const formik = useFormik({
    initialValues: {
      owner_name: "",
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
    },
    validationSchema: homeCreateSchema,
    onSubmit: handleFormSubmit,
  });

  const { currentPage, isLastPage, nextPage, previousPage, currentPageIndex } =
    useMultistepForm([
      <HomeImageForm
        title="Add a Home Image to the System"
        text="Effortlessly Manage Home Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        styles={styles}
        setImage={setImage}
      />,
      <HomeDetailsForm
        title="Add New Home to the System"
        text="Effortlessly Manage Home Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        agents={agents}
        propertyManagers={propertyManagers}
        styles={styles}
        imageRef={imageRef}
        setImage={setImage}
      />,
      <HomeAddressForm
        title="Add Home Address to the System"
        text="Effortlessly Manage Home Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        styles={styles}
      />,
      <HomeDealInfoForm
        title="Add Home Deal Info to the System"
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
            title="Home Image"
            isCurrentPage={true}
            pageNumber={1}
          />
          <FormPageInfo
            title="Home Details"
            isCurrentPage={currentPageIndex >= 1}
            pageNumber={2}
          />
          <FormPageInfo
            title="Home Address"
            isCurrentPage={currentPageIndex >= 2}
            pageNumber={3}
          />
          <FormPageInfo
            title="Home Deal Info"
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

export default HomeCreate;
