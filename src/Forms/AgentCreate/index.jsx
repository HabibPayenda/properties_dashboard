import { useFormik } from "formik";
import React from "react";

import styles from "./agentCreate.module.css";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";
import { useDispatch, useSelector } from "react-redux";
import agentCreateSchema from "./agentCreateSchema";
import { addAgent } from "../../data/agentsSlice";
import FormBtn from "../../components/FormBtn";
import AgentDetails from "./AgentDetails";
import AgentAddress from "./AgentAddress";
import useMultistepForm from "../../hooks/useMultistepForm";
import FormPaginationBtn from "../../components/FormPaginationBtn";

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

  const showErrors = () => {
    for (let error in formik.errors) {
      if (formik.touched[error]) {
        return <p>{formik.errors[error]}</p>;
      }
    }
  };

  const { currentPage, isLastPage, nextPage, previousPage } = useMultistepForm([
    <AgentDetails formik={formik} admins={admins} styles={styles} />,
    <AgentAddress formik={formik} admins={admins} styles={styles} />,
  ]);
  console.log("current Page: ", currentPage);
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidbarHeader}>Logo</div>
        <div className={styles.sidebarStepsContainer}></div>
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
              onClick={() => nextPage()}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AgentCreate;
