import { useFormik } from "formik";
import React from "react";
import homeCreateSchema from "./homeCreateSchema";
import styles from "./homeCreate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addHome } from "../../data/homeSlice";
import useMultistepForm from "../../hooks/useMultistepForm";
import FormPaginationBtn from "../../components/FormPaginationBtn";
import FormPageInfo from "../../components/FormPageInfo";
import HomeDetailsForm from "./homeDetails";
import HomeAddressForm from "./HomeAddressForm";

function HomeCreate() {
  const agents = useSelector((state) => state.agents.agents);
  const propertyManagers = useSelector(
    (state) => state.propertyManagers.propertyManagers
  );

  console.log(agents);
  console.log(propertyManagers);

  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    console.log("clicked");
    dispatch(addHome(formik.values));
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      owner_name: "",
      name: "",
      description: "",
      status: "",
      property_manager_id: "",
      agent_id: "",
      province: "",
      city: "",
      district: "",
    },
    validationSchema: homeCreateSchema,
    onSubmit: handleFormSubmit,
  });

  const { currentPage, isLastPage, nextPage, previousPage, currentPageIndex } =
    useMultistepForm([
      <HomeDetailsForm
        title="Add New Home to the System"
        text="Effortlessly Manage Home Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        agents={agents}
        propertyManagers={propertyManagers}
        styles={styles}
      />,
      <HomeAddressForm
        title="Add Home Address to the System"
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
            title="Home Details"
            isCurrentPage={true}
            pageNumber={1}
          />
          <FormPageInfo
            title="Home Address"
            isCurrentPage={currentPageIndex >= 1}
            pageNumber={2}
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
