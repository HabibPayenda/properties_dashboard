import React from "react";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";

function UserDetailsForm({ formik, styles, title, text }) {
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
          placeholder="User Name"
          className={styles.input}
          value={formik.values.name}
          id="name"
          type="text"
          errors={formik.errors.name}
          touched={formik.touched.name}
        />

        <TextInput
          label="Password:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Password"
          className={styles.input}
          value={formik.values.password}
          id="password"
          type="text"
          errors={formik.errors.password}
          touched={formik.touched.password}
        />

        <TextInput
          label="Date of birth:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="DOB"
          className={styles.input}
          value={formik.values.date_of_birth}
          id="date_of_birth"
          type="date"
          errors={formik.errors.date_of_birth}
          touched={formik.touched.date_of_birth}
        />

        <FormSelect
          id="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Status:"
          titles={["Male", "Female"]}
          values={["male", "female"]}
          errors={formik.errors.gender}
          touched={formik.touched.gender}
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
        />
      </div>
    </>
  );
}

export default UserDetailsForm;
