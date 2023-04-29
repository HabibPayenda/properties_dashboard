import { useFormik } from "formik";
import React from "react";
import styles from "./userCreate.module.css";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";
import { useDispatch } from "react-redux";
import FormBtn from "../../components/FormBtn";
import userCreateSchema from "./userCreateSchema";
import { addUser } from "../../data/usersSlice";

function UserCreate() {
  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    console.log("clicked");
    dispatch(addUser(formik.values));
    // formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      date_of_birth: "",
      gender: "",
    },
    validationSchema: userCreateSchema,
    onSubmit: handleFormSubmit,
  });

  const showErrors = () => {
    for (let error in formik.errors) {
      if (formik.touched[error]) {
        return <p>{formik.errors[error]}</p>;
      }
    }
  };

  console.log(formik.values);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create New User</h2>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
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
        />
        <FormBtn title="Create" onClick={() => handleFormSubmit()} />
      </form>
      <div>{showErrors()}</div>
    </div>
  );
}

export default UserCreate;
