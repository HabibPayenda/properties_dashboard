import React from "react";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";

function AgentDetails({ formik, styles, admins, title, text }) {
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
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
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
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
        />
      </div>
    </>
  );
}

export default AgentDetails;
