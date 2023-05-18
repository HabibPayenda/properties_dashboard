import React from "react";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";

function CarCreateInfoForm({ formik, styles, title, text }) {
  return (
    <>
      <div className={styles.formDetails}>
        <h2 className={styles.formDetailsTitle}>{title}</h2>
        <p className={styles.formDetailsText}>{text}</p>
      </div>
      <div className={styles.inputsContainer}>
        <TextInput
          label="Brand:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Car brand"
          className={styles.input}
          value={formik.values.brand}
          id="brand"
          type="text"
          errors={formik.errors.brand}
          touched={formik.touched.brand}
        />
        <TextInput
          label="Model:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Car model"
          className={styles.input}
          value={formik.values.model}
          id="model"
          type="text"
          errors={formik.errors.model}
          touched={formik.touched.model}
        />
        <TextInput
          label="Year:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Production Year"
          className={styles.input}
          value={formik.values.year}
          id="year"
          type="text"
          errors={formik.errors.year}
          touched={formik.touched.year}
        />
        <TextInput
          label="Mile Age:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Car Mile Age"
          className={styles.input}
          value={formik.values.mile_age}
          id="mile_age"
          type="text"
          errors={formik.errors.mile_age}
          touched={formik.touched.mile_age}
        />

        <FormSelect
          id="transmission"
          value={formik.values.availability_status}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Transmission:"
          titles={["Automatic", "Gear"]}
          values={["automatic", "gear"]}
          errors={formik.errors.transmission}
          touched={formik.touched.transmission}
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
        />
        <FormSelect
          id="fuel_type"
          value={formik.values.availability_status}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Fuel Type:"
          titles={["Petrol", "Deasl"]}
          values={["petrol", "deasl"]}
          errors={formik.errors.fuel_type}
          touched={formik.touched.fuel_type}
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
        />
        <TextInput
          label="Engine Size:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Car enginesize"
          className={styles.input}
          value={formik.values.engine_size}
          id="engine_size"
          type="text"
          errors={formik.errors.engine_size}
          touched={formik.touched.engine_size}
        />
      </div>
    </>
  );
}

export default CarCreateInfoForm;
