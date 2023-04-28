import { useFormik } from "formik";
import React from "react";
import homeCreateSchema from "./homeCreateSchema";
import styles from "./homeCreate.module.css";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";
import { useDispatch, useSelector } from "react-redux";
import FormBtn from "../../components/FormBtn";
import { addHome } from "../../data/homeSlice";

function HomeCreate() {
  const agents = useSelector((state) => state.agents.agents);
  const propertyManagers = useSelector(
    (state) => state.propertyManagers.propertyManagers
  );
  console.log(agents);

  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    console.log("clicked");
    dispatch(addHome(formik.values));
  };

  const formik = useFormik({
    initialValues: {
      owner_name: "",
      name: "",
      description: "",
      status: "",
      property_manager_id: "",
      agent_id: "",
    },
    validationSchema: homeCreateSchema,
    onSubmit: handleFormSubmit,
  });

  const showErrors = () => {
    for (let error in formik.errors) {
      if (formik.touched[error]) {
        return <p>{formik.errors[error]}</p>;
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create New Home</h2>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <TextInput
          label="Owner:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Owner Name"
          className={styles.input}
          value={formik.values.owner_name}
          id="owner_name"
          type="text"
          errors={formik.errors.owner_name}
          touched={formik.touched.owner_name}
        />

        <TextInput
          label="Name:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Home Name"
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
          placeholder="Home Description"
          className={styles.input}
          value={formik.values.description}
          id="description"
          type="text"
          name="name"
          errors={formik.errors.description}
          touched={formik.touched.description}
        />

        <FormSelect
          id="status"
          value={formik.values.status}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Status:"
          titles={["Available", "Not Available"]}
          values={["available", "not_available"]}
          errors={formik.errors.status}
          touched={formik.touched.status}
        />

        <FormSelect
          value={formik.values.agent_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Agent:"
          titles={agents.map((agent) => agent.name)}
          values={agents.map((agent) => agent.id)}
          errors={formik.errors.agent_id}
          touched={formik.touched.agent_id}
          id="agent_id"
        />
        <FormSelect
          value={formik.values.property_manager_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Manager:"
          titles={propertyManagers.map(
            (propertyManager) => propertyManager.name
          )}
          values={agents.map((propertyManager) => propertyManager.id)}
          errors={formik.errors.property_manager_id}
          touched={formik.touched.property_manager_id}
          id="property_manager_id"
        />
        <FormBtn title="Create" onClick={formik.handleSubmit} />
      </form>
      <div>{showErrors()}</div>
    </div>
  );
}

export default HomeCreate;
