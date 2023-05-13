import React from "react";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";

function PropertyManagerDetailsForm({ formik, styles, agents, title, text }) {
  return (
    <>
      <div className={styles.formDetails}>
        <h2 className={styles.formDetailsTitle}>{title}</h2>
        <p className={styles.formDetailsText}>{text}</p>
      </div>
      <div className={styles.inputsContainer}>
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
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
        />

        <FormSelect
          value={formik.values.agent_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Agent:"
          titles={agents.map((agent) => agent.name)}
          values={agents.map((agent) => agent.id)}
          errors={formik.errors.agent_id}
          touched={formik.touched.agent_id}
          id="agent_id"
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
        />
      </div>
    </>
  );
}

export default PropertyManagerDetailsForm;
