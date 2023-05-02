import { useFormik } from "formik";
import React from "react";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";
import { useDispatch } from "react-redux";
import FormBtn from "../../components/FormBtn";
import { addUser } from "../../data/usersSlice";
import styles from "./homeRoomCreate.module.css";
import homeRoomCreateSchema from "./hoomRoomCreateSchema";
import { addHomeRoom } from "../../data/homeSlice";

function HomeRoomCreate({ id }) {
  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    console.log("clicked");
    dispatch(addHomeRoom({ ...formik.values, home_id: id }));
    // formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      width: "",
      length: "",
      windows: "",
      cup_board: "",
      to_sun: "",
      color: "",
    },
    validationSchema: homeRoomCreateSchema,
    onSubmit: handleFormSubmit,
  });

  console.log(formik.values);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add New Room</h2>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
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

        <FormBtn title="Create" onClick={formik.handleSubmit} />
      </form>
    </div>
  );
}

export default HomeRoomCreate;
