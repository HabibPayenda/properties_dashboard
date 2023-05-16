import React from "react";
import TextInput from "../../components/TextInput";

function OfferCreateDeatailsForm({ formik, styles, title, text }) {
  return (
    <>
      <div className={styles.formDetails}>
        <h2 className={styles.formDetailsTitle}>{title}</h2>
        <p className={styles.formDetailsText}>{text}</p>
      </div>
      <div className={styles.inputsContainer}>
        <TextInput
          label="Start Date:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="start date"
          className={styles.input}
          value={formik.values.start_date}
          id="name"
          type="date"
          name="start_date"
          errors={formik.errors.start_date}
          touched={formik.touched.start_date}
        />
        <TextInput
          label="End Date:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Hire date"
          className={styles.input}
          value={formik.values.end_date}
          name="end_date"
          type="date"
          errors={formik.errors.end_date}
          touched={formik.touched.end_date}
        />
        <TextInput
          label="Title:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Title"
          className={styles.input}
          value={formik.values.title}
          name="title"
          type="text"
          errors={formik.errors.title}
          touched={formik.touched.title}
        />
        <TextInput
          label="Description:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Description"
          className={styles.input}
          value={formik.values.description}
          name="description"
          type="text"
          errors={formik.errors.description}
          touched={formik.touched.description}
        />
        <TextInput
          label="Offer Price:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Price"
          className={styles.input}
          value={formik.values.offer_price}
          name="offer_price"
          type="text"
          errors={formik.errors.offer_price}
          touched={formik.touched.offer_price}
        />
      </div>
    </>
  );
}

export default OfferCreateDeatailsForm;
