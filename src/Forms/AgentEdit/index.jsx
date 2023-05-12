import { useFormik } from "formik";
import React from "react";

import styles from "./agentEdit.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addAgent } from "../../data/agentsSlice";
import useMultistepForm from "../../hooks/useMultistepForm";
import FormPaginationBtn from "../../components/FormPaginationBtn";
import FormPageInfo from "../../components/FormPageInfo";
import AgentEditDetails from "./AgentEditDetails";
import AgentEditAddress from "./AgentEditAddress";
import AgentEditContact from "./AgentEditContact";
import agentEditSchema from "./agentEditSchema";

function AgentEdit() {
  const admins = useSelector((state) => state.admin.admins);

  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    console.log("clicked");
    dispatch(addAgent(formik.values));
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
    validationSchema: agentEditSchema,
    onSubmit: handleFormSubmit,
  });

  const { currentPage, isLastPage, nextPage, previousPage, currentPageIndex } =
    useMultistepForm([
      <AgentEditDetails
        title="Edit Agent in the System"
        text="Effortlessly Manage Agent Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        admins={admins}
        styles={styles}
      />,
      <AgentEditAddress
        title="Edit Agent Address Info"
        text="Effortlessly Manage Agent Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        admins={admins}
        styles={styles}
      />,
      <AgentEditContact
        title="Edit Agent Contact Info"
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
            title="Agent Details"
            isCurrentPage={true}
            pageNumber={1}
          />
          <FormPageInfo
            title="Agent Address"
            isCurrentPage={currentPageIndex >= 1}
            pageNumber={2}
          />
          <FormPageInfo
            title="Agent Contacts"
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

export default AgentEdit;
