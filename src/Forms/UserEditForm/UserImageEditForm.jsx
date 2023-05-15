import React from "react";
import FormImageSelect from "../../components/FormImageSelect";

function UserImageEditForm({ styles, title, text, setImage }) {
  return (
    <>
      <div className={styles.formDetails}>
        <h2 className={styles.formDetailsTitle}>{title}</h2>
        <p className={styles.formDetailsText}>{text}</p>
      </div>
      <div className={styles.inputsContainerImage}>
        <FormImageSelect setImage={setImage} />
      </div>
    </>
  );
}

export default UserImageEditForm;
