import React from "react";
import TextInput from "../../components/TextInput";

function PropertyRestrictionDetailsForm({ formik, styles, title, text }) {
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
          placeholder="Restriction Name"
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
          placeholder="Restriction Description"
          className={styles.input}
          value={formik.values.description}
          id="description"
          type="text"
          errors={formik.errors.description}
          touched={formik.touched.description}
        />
      </div>
    </>
  );
}

export default PropertyRestrictionDetailsForm;
