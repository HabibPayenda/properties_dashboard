import { useFormik } from "formik";
import React from "react";

import styles from "./agentCreate.module.css";
import { useDispatch, useSelector } from "react-redux";
import agentCreateSchema from "./agentCreateSchema";
import { addAgent } from "../../data/agentsSlice";
import AgentDetails from "./AgentDetails";
import AgentAddress from "./AgentAddress";
import useMultistepForm from "../../hooks/useMultistepForm";
import FormPaginationBtn from "../../components/FormPaginationBtn";
import FormPageInfo from "../../components/FormPageInfo";

function AgentCreate() {
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
    },
    validationSchema: agentCreateSchema,
    onSubmit: handleFormSubmit,
  });

  const { currentPage, isLastPage, nextPage, previousPage, currentPageIndex } =
    useMultistepForm([
      <AgentDetails formik={formik} admins={admins} styles={styles} />,
      <AgentAddress formik={formik} admins={admins} styles={styles} />,
      <AgentAddress formik={formik} admins={admins} styles={styles} />,
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
            title="Agent Address"
            isCurrentPage={currentPageIndex >= 2}
            pageNumber={3}
          />
        </div>
      </div>
      <div className={styles.formContent}>
        <h2 className={styles.title}>Create New Agent</h2>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          {currentPage}
          <div className={styles.btnContainer}>
            <FormPaginationBtn
              title="Previous"
              onClick={() => previousPage()}
            />
            <FormPaginationBtn
              title={isLastPage ? "Finish" : "Next"}
              onClick={() => nextPage(formik)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AgentCreate;
