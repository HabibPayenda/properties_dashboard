import { useFormik } from "formik";
import React from "react";

import styles from "./agentCreate.module.css";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";
import { useSelector } from "react-redux";
import FormBtn from "../../components/FormBtn";

function AgentCreate() {
  const admins = useSelector((state) => state.admin.admins);
  console.log(admins);
  const formik = useFormik({
    initialValues: {
      name: "",
      hire_date: new Date(),
      status: "",
      admin_id: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create New Agent</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextInput
          label="Name:"
          onChange={formik.handleChange}
          placeholder="Agent Name"
          className={styles.input}
          value={formik.values.name}
          id="name"
          type="text"
          name="name"
        />
        <TextInput
          label="Hire Date:"
          onChange={formik.handleChange}
          placeholder="Hire date"
          className={styles.input}
          value={formik.values.hire_date}
          id="hire_date"
          name="hire_date"
          type="date"
        />
        <FormSelect
          id="status"
          value={formik.values.status}
          onChange={formik.handleChange}
          label="Status:"
          titles={["Active", "Not Active"]}
          values={["active", "not_active"]}
        />

        <FormSelect
          value={formik.values.admin_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Admin:"
          titles={admins.map((admin) => admin.name)}
          values={admins.map((admin) => admin.id)}
        />
        <FormBtn title="Create" onClick={formik.handleSubmit} />
      </form>
    </div>
  );
}

export default AgentCreate;
