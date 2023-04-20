import { useFormik } from "formik";
import React from "react";

import styles from "./propertyManagerCreate.module.css";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";
import { useDispatch, useSelector } from "react-redux";
import FormBtn from "../../components/FormBtn";
import propertyManagerCreateSchema from "./propertyManagerCreateSchema";
import { addAgent } from "../../data/agentsSlice";

function PropertyManagerCreate() {
  const agents = useSelector((state) => state.agents.agents);
  console.log(agents);

  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    console.log("clicked");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      company_name: "",
      status: "",
      agent_id: "",
    },
    validationSchema: propertyManagerCreateSchema,
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
      <h2 className={styles.title}>Create New Property Manager</h2>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <TextInput
          label="Name:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Manager Name"
          className={styles.input}
          value={formik.values.name}
          id="name"
          type="text"
          name="name"
          errors={formik.errors.name}
          touched={formik.touched.name}
        />

        <TextInput
          label="Company:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Company Name"
          className={styles.input}
          value={formik.values.company_name}
          id="company_name"
          type="text"
          name="name"
          errors={formik.errors.company_name}
          touched={formik.touched.company_name}
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
          value={formik.values.agent_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Agent:"
          titles={agents.map((agent) => agent.name)}
          values={agents.map((agent) => agent.id)}
          errors={formik.errors.admin_id}
          touched={formik.touched.admin_id}
          id="agent_id"
        />
        <FormBtn title="Create" onClick={formik.handleSubmit} />
      </form>
      <div>{showErrors()}</div>
    </div>
  );
}

export default PropertyManagerCreate;
