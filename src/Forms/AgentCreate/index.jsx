import { useFormik } from "formik";
import React, { useState } from "react";

import styles from "./agentCreate.module.css";
import { useDispatch, useSelector } from "react-redux";
import agentCreateSchema from "./agentCreateSchema";
import { addAgent } from "../../data/agentsSlice";
import AgentDetails from "./AgentDetails";
import AgentAddress from "./AgentAddress";
import useMultistepForm from "../../hooks/useMultistepForm";
import FormPaginationBtn from "../../components/FormPaginationBtn";
import FormPageInfo from "../../components/FormPageInfo";
import AgentContact from "./AgentContact";
import AgentImageForm from "./AgentImageForm";

function AgentCreate() {
  const admins = useSelector((state) => state.admin.admins);
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    console.log("clicked");
    dispatch(addAgent({ ...formik.values, image: image }));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      hire_date: "",
      status: "",
      admin_id: "",
      province: "",
      city: "",
      district: "",
      phone_number_one: "",
      email_one: "",
    },
    validationSchema: agentCreateSchema,
    onSubmit: handleFormSubmit,
  });

  const { currentPage, isLastPage, nextPage, previousPage, currentPageIndex } =
    useMultistepForm([
      <AgentImageForm
        title="Add Agent Image to the System"
        text="Effortlessly Manage Agent Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        styles={styles}
        setImage={setImage}
      />,
      <AgentDetails
        title="Add New Agent to the System"
        text="Effortlessly Manage Agent Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        admins={admins}
        styles={styles}
      />,
      <AgentAddress
        title="Add Agent Address Info"
        text="Effortlessly Manage Agent Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        admins={admins}
        styles={styles}
      />,
      <AgentContact
        title="Add Agent Contact Info"
        text="Effortlessly Manage Agent Information: Perfecting Your Team's Efficiency!"
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
            title="Agent Image"
            isCurrentPage={true}
            pageNumber={1}
          />
          <FormPageInfo
            title="Agent Details"
            isCurrentPage={currentPageIndex >= 1}
            pageNumber={1}
          />
          <FormPageInfo
            title="Agent Address"
            isCurrentPage={currentPageIndex >= 2}
            pageNumber={2}
          />
          <FormPageInfo
            title="Agent Contact"
            isCurrentPage={currentPageIndex >= 3}
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

export default AgentCreate;
