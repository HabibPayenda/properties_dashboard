import React, { useState } from "react";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";

function HomeDetailsForm({
  formik,
  styles,
  agents,
  propertyManagers,
  title,
  text,
  imageRef,
  setImage,
}) {
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = () => {
    const file = imageRef.current.files[0];
    setImage(imageRef.current.files[0]);
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        setImageUrl(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className={styles.formDetails}>
        <h2 className={styles.formDetailsTitle}>{title}</h2>
        <p className={styles.formDetailsText}>{text}</p>
      </div>
      <div className={styles.inputsContainer}>
        <img
          style={{ height: "100px", width: "100px" }}
          src={imageUrl || null}
          alt=""
        />
        <input
          onChange={handleImageChange}
          type="file"
          placeholder="Image"
          ref={imageRef}
        />

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
          errors={formik.errors.description}
          touched={formik.touched.description}
        />

        <FormSelect
          id="availability_status"
          value={formik.values.availability_status}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Status:"
          titles={["Available", "Not Available"]}
          values={["available", "not_available"]}
          errors={formik.errors.availability_status}
          touched={formik.touched.availability_status}
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
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
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
        />
        <FormSelect
          value={formik.values.property_manager_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Manager:"
          titles={propertyManagers.map(
            (propertyManager) => propertyManager.name
          )}
          values={propertyManagers.map((propertyManager) => propertyManager.id)}
          errors={formik.errors.property_manager_id}
          touched={formik.touched.property_manager_id}
          id="property_manager_id"
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
        />
      </div>
    </>
  );
}

export default HomeDetailsForm;
