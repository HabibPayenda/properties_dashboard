import React from "react";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";

function AmenityDetailsForm({ formik, styles, title, text }) {
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
          placeholder="Amenity Name"
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
          placeholder="Amenity Description"
          className={styles.input}
          value={formik.values.description}
          id="description"
          type="text"
          errors={formik.errors.description}
          touched={formik.touched.description}
        />
        <TextInput
          label="Fee:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Amenity Fee"
          className={styles.input}
          value={formik.values.fee}
          id="fee"
          type="text"
          errors={formik.errors.fee}
          touched={formik.touched.fee}
        />
        <TextInput
          label="Duration:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Fee duration"
          className={styles.input}
          value={formik.values.fee_duration}
          id="fee_duration"
          type="text"
          errors={formik.errors.fee_duration}
          touched={formik.touched.fee_duration}
        />
      </div>
    </>
  );
}

export default AmenityDetailsForm;
