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

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create New Agent</h2>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <AgentDetails formik={formik} styles={styles} admins={admins} />
        <AgentAddress formik={formik} styles={styles} admins={admins} />
        <FormBtn title="Create" onClick={formik.handleSubmit} />
      </form>
    </div>
  );
}

export default AgentCreate;
