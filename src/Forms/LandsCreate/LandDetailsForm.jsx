import React from "react";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";

function LandCreateDetailsForm({
  formik,
  styles,
  agents,
  propertyManagers,
  title,
  text,
}) {
  return (
    <>
      <div className={styles.formDetails}>
        <h2 className={styles.formDetailsTitle}>{title}</h2>
        <p className={styles.formDetailsText}>{text}</p>
      </div>
      <div className={styles.inputsContainer}>
        <TextInput
          label="Area:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Area in square meters"
          className={styles.input}
          value={formik.values.area}
          id="area"
          type="text"
          errors={formik.errors.area}
          touched={formik.touched.area}
        />
        <TextInput
          label="Zone:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter land zone"
          className={styles.input}
          value={formik.values.zone}
          id="zone"
          type="text"
          errors={formik.errors.zone}
          touched={formik.touched.zone}
        />
        <TextInput
          label="Current use:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter land current use"
          className={styles.input}
          value={formik.values.current_use}
          id="current_use"
          type="text"
          errors={formik.errors.current_use}
          touched={formik.touched.current_use}
        />

        <TextInput
          label="Name:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Land Name"
          className={styles.input}
          value={formik.values.name}
          id="name"
          type="text"
          errors={formik.errors.name}
          touched={formik.touched.name}
        />

        <TextInput
          label="Description:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Land Description"
          className={styles.input}
          value={formik.values.description}
          id="description"
          type="text"
          errors={formik.errors.description}
          touched={formik.touched.description}
        />

        <FormSelect
          id="availability_status"
          value={formik.values.availability_status}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Status:"
          titles={["Available", "Not Available"]}
          values={["available", "not_available"]}
          errors={formik.errors.availability_status}
          touched={formik.touched.availability_status}
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
        <FormSelect
          value={formik.values.property_manager_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Manager:"
          titles={propertyManagers.map(
            (propertyManager) => propertyManager.name
          )}
          values={propertyManagers.map((propertyManager) => propertyManager.id)}
          errors={formik.errors.property_manager_id}
          touched={formik.touched.property_manager_id}
          id="property_manager_id"
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
        />
      </div>
    </>
  );
}

export default LandCreateDetailsForm;
