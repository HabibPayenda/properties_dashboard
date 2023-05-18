import { useFormik } from "formik";
import React from "react";

import styles from "./agentEdit.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addAgent, editAgent } from "../../data/agentsSlice";
import useMultistepForm from "../../hooks/useMultistepForm";
import FormPaginationBtn from "../../components/FormPaginationBtn";
import FormPageInfo from "../../components/FormPageInfo";
import AgentEditDetails from "./AgentEditDetails";
import AgentEditContact from "./AgentEditContact";
import agentEditSchema from "./agentEditSchema";
import AgentEditAddress from "./AgentEditAddress";

function AgentEdit({ agent }) {
  const admins = useSelector((state) => state.admin.admins);

  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    console.log("clicked");
    dispatch(editAgent({ ...formik.values, id: agent.id }));
  };

  const formik = useFormik({
    initialValues: {
      name: agent?.name,
      hire_date: agent?.hire_date,
      status: agent?.status,
      admin_id: agent?.admin_id,
      province: agent?.address?.province,
      city: agent?.address?.city,
      district: agent?.address?.district,
      phone_number_one: agent?.contact?.phone_number_one,
      email_one: agent?.contact?.email_one,
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
