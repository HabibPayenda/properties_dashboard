import React from "react";
import TextInput from "../../components/TextInput";

function PropertyManagerAddressForm({ formik, styles, title, text }) {
  return (
    <>
      <div className={styles.formDetails}>
        <h2 className={styles.formDetailsTitle}>{title}</h2>
        <p className={styles.formDetailsText}>{text}</p>
      </div>
      <div className={styles.inputsContainer}>
        <TextInput
          label="Province"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Agent Province"
          className={styles.input}
          value={formik.values.province}
          id="province"
          type="text"
          errors={formik.errors.province}
          touched={formik.touched.province}
        />
        <TextInput
          label="City:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Agent City"
          className={styles.input}
          value={formik.values.city}
          id="city"
          type="text"
          errors={formik.errors.city}
          touched={formik.touched.city}
        />
        <TextInput
          label="District:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Agent District"
          className={styles.input}
          value={formik.values.district}
          id="district"
          type="text"
          errors={formik.errors.district}
          touched={formik.touched.district}
        />
      </div>
    </>
  );
}

export default PropertyManagerAddressForm;
