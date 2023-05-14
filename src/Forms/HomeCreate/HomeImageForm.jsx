import React from "react";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";
import FormImageSelect from "../../components/FormImageSelect";

function HomeImageForm({ styles, title, text, setImage }) {
  return (
    <>
      <div className={styles.formDetails}>
        <h2 className={styles.formDetailsTitle}>{title}</h2>
        <p className={styles.formDetailsText}>{text}</p>
      </div>
      <div className={styles.inputsContainer}>
        <FormImageSelect setImage={setImage} />
      </div>
    </>
  );
}

export default HomeImageForm;
