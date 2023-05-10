import React from "react";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";

function HomeDealInfoForm({ formik, styles, title, text }) {
  return (
    <>
      <div className={styles.formDetails}>
        <h2 className={styles.formDetailsTitle}>{title}</h2>
        <p className={styles.formDetailsText}>{text}</p>
      </div>
      <div className={styles.inputsContainer}>
        <FormSelect
          id="deal_type"
          value={formik.values.availability_status}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Deal Type:"
          titles={["Rent", "Sale", "Graw"]}
          values={["rent", "sale", "graw"]}
          errors={formik.errors.deal_type}
          touched={formik.touched.deal_type}
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
        />
        <TextInput
          label="Duration:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="One duration in months"
          className={styles.input}
          value={formik.values.duration}
          id="duration"
          type="text"
          errors={formik.errors.duration}
          touched={formik.touched.duration}
        />
        <TextInput
          label="Price:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="One duration price"
          className={styles.input}
          value={formik.values.price_per_duration}
          id="price_per_duration"
          type="text"
          errors={formik.errors.price_per_duration}
          touched={formik.touched.price_per_duration}
        />
        <TextInput
          label="Total Price:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Total duration price"
          className={styles.input}
          value={formik.values.total_price}
          id="total_price"
          type="text"
          errors={formik.errors.total_price}
          touched={formik.touched.total_price}
        />
        <TextInput
          label="Total Duration:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Total duration"
          className={styles.input}
          value={formik.values.total_duration}
          id="total_duration"
          type="text"
          errors={formik.errors.total_duration}
          touched={formik.touched.total_duration}
        />
      </div>
    </>
  );
}

export default HomeDealInfoForm;
