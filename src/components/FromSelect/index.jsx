import React, { useState } from "react";
import styles from "./formSelect.module.css";
import Select from "react-select";

function FormSelect({
  label,
  titles,
  values,
  onBlur,
  id,
  errors,
  touched,
  setFieldValue,
  setFieldTouched,
  formSubmitted,
}) {
  let options = [];
  titles?.forEach((label, idx) => {
    let option = {};
    option.label = label;
    option.value = values[idx];
    options.push(option);
  });

  const showErrors = () => {
    if (errors && touched) {
      return <span className={styles.errors}>{errors}</span>;
    }
  };

  const [newValue, setNewValue] = useState({ label: "Select", value: null });

  const handleOptionChange = (value) => {
    setFieldValue(id, value.value);
    setNewValue(value);
  };

  return (
    <>
      <div className={styles.container}>
        {label && <p className={styles.label}>{label}</p>}
        <Select
          onChange={(value) => handleOptionChange(value)}
          onBlur={() => setFieldTouched(id)}
          id={id}
          className={styles.select}
          options={options}
          value={newValue}
        />
      </div>
      {showErrors()}
    </>
  );
}

export default FormSelect;
