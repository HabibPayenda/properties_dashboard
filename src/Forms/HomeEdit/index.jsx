import { useFormik } from "formik";
import React from "react";
import homeEditSchema from "./homeEditSchema";
import styles from "./homeEdit.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addHome, editHome } from "../../data/homeSlice";
import useMultistepForm from "../../hooks/useMultistepForm";
import FormPaginationBtn from "../../components/FormPaginationBtn";
import FormPageInfo from "../../components/FormPageInfo";
import HomeDetailsEditForm from "./HomeDetailsEditForm";
import HomeAddressEditForm from "./HomeAddressEditForm";
import HomeDealInfoEditForm from "./HomeDealInfoEditForm";

function HomeEdit({ home, property }) {
  const agents = useSelector((state) => state.agents.agents);
  const propertyManagers = useSelector(
    (state) => state.propertyManagers.propertyManagers
  );

  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    console.log("clicked");
    console.log(formik.values);
    dispatch(editHome(formik.values));
    // formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      owner_name: home?.owner_name,
      name: property?.name,
      description: property?.description,
      availability_status: property?.availability_status,
      property_manager_id: property?.property_manager_id,
      agent_id: property?.agent_id,
      province: property?.addresses[0]?.province,
      city: property?.addresses[0]?.city,
      district: property?.addresses[0]?.district,
      deal_type: property?.deal_infos[0]?.deal_type,
      duration: property?.deal_infos[0]?.duration,
      price_per_duration: property?.deal_infos[0]?.price_per_duration,
      total_price: property?.deal_infos[0]?.total_price,
      total_duration: property?.deal_infos[0]?.total_duration,
    },
    validationSchema: homeEditSchema,
    onSubmit: handleFormSubmit,
  });

  const { currentPage, isLastPage, nextPage, previousPage, currentPageIndex } =
    useMultistepForm([
      <HomeDetailsEditForm
        title="Edit Home in the System"
        text="Effortlessly Manage Home Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        agents={agents}
        propertyManagers={propertyManagers}
        styles={styles}
      />,
      <HomeAddressEditForm
        title="Edit Home Address in the System"
        text="Effortlessly Manage Home Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        styles={styles}
      />,
      <HomeDealInfoEditForm
        title="Edit Home Deal Info in the System"
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
          <FormPageInfo
            title="Home Deal Info"
            isCurrentPage={currentPageIndex >= 2}
            pageNumber={3}
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

export default HomeEdit;
