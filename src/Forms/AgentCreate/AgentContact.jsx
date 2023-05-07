import React from "react";
import TextInput from "../../components/TextInput";

function AgentContact({ formik, styles, title, text }) {
  return (
    <>
      <div className={styles.formDetails}>
        <h2 className={styles.formDetailsTitle}>{title}</h2>
        <p className={styles.formDetailsText}>{text}</p>
      </div>
      <div className={styles.inputsContainer}>
        <TextInput
          label="Mobile:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Agent mobile number"
          className={styles.input}
          value={formik.values.phone_number_one}
          id="phone_number_one"
          type="text"
          errors={formik.errors.phone_number_one}
          touched={formik.touched.phone_number_one}
        />
        <TextInput
          label="Email:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Agent Email"
          className={styles.input}
          value={formik.values.email_one}
          id="email_one"
          type="date"
          errors={formik.errors.email_one}
          touched={formik.touched.email_one}
        />
      </div>
    </>
  );
}

export default AgentContact;
