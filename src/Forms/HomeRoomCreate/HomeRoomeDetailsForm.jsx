import React from "react";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";

function HomeRoomDetailsForm({ formik, styles, title, text }) {
  return (
    <>
      <div className={styles.formDetails}>
        <h2 className={styles.formDetailsTitle}>{title}</h2>
        <p className={styles.formDetailsText}>{text}</p>
      </div>
      <div className={styles.inputsContainer}>
        <TextInput
          label="Width:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Room Width in meters."
          className={styles.input}
          value={formik.values.width}
          id="width"
          type="text"
          errors={formik.errors.width}
          touched={formik.touched.width}
        />

        <TextInput
          label="Length:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Room length in meters."
          className={styles.input}
          value={formik.values.length}
          id="length"
          type="text"
          errors={formik.errors.length}
          touched={formik.touched.length}
        />

        <TextInput
          label="Windows:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Room windows count."
          className={styles.input}
          value={formik.values.windows}
          id="windows"
          type="text"
          errors={formik.errors.windows}
          touched={formik.touched.windows}
        />

        <TextInput
          label="Color:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Room color."
          className={styles.input}
          value={formik.values.color}
          id="color"
          type="color"
          errors={formik.errors.color}
          touched={formik.touched.color}
        />

        <FormSelect
          id="cup_board"
          value={formik.values.cup_board}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Cup Board:"
          titles={["Yes", "No"]}
          values={[true, false]}
          errors={formik.errors.cup_board}
          touched={formik.touched.cup_board}
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
        />

        <FormSelect
          id="to_sun"
          value={formik.values.to_sun}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="To Sun:"
          titles={["Yes", "No"]}
          values={[true, false]}
          errors={formik.errors.to_sun}
          touched={formik.touched.to_sun}
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
        />
      </div>
    </>
  );
}

export default HomeRoomDetailsForm;
