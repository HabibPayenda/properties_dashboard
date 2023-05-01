import { useFormik } from "formik";
import React from "react";

import styles from "./agentCreate.module.css";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";
import { useDispatch, useSelector } from "react-redux";
import agentCreateSchema from "./agentCreateSchema";
import { addAgent } from "../../data/agentsSlice";
import FormBtn from "../../components/FormBtn";

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
        <TextInput
          label="Name:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Agent Name"
          className={styles.input}
          value={formik.values.name}
          id="name"
          type="text"
          name="name"
          errors={formik.errors.name}
          touched={formik.touched.name}
        />
        <TextInput
          label="Hire Date:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Hire date"
          className={styles.input}
          value={formik.values.hire_date}
          id="hire_date"
          name="hire_date"
          type="date"
          errors={formik.errors.hire_date}
          touched={formik.touched.hire_date}
        />
        <FormSelect
          id="status"
          value={formik.values.status}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Status:"
          titles={["Active", "Not Active"]}
          values={["active", "not_active"]}
          errors={formik.errors.status}
          touched={formik.touched.status}
        />

        <FormSelect
          value={formik.values.admin_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Admin:"
          titles={admins.map((admin) => admin.name)}
          values={admins.map((admin) => admin.id)}
          errors={formik.errors.admin_id}
          touched={formik.touched.admin_id}
          id="admin_id"
        />
        <FormBtn title="Create" onClick={formik.handleSubmit} />
      </form>
      <div>{showErrors()}</div>
    </div>
  );
}

export default AgentCreate;
