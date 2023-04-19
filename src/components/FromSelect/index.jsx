import React from "react";
import styles from "./formSelect.module.css";

function FormSelect({ label, titles, values, value, onChange, onBlur, id }) {
  return (
    <>
      <div className={styles.container}>
        {label && <p className={styles.label}>{label}</p>}
        <select
          onBlur={onBlur}
          id={id}
          value={value}
          onChange={onChange}
          className={styles.select}
          defaultChecked={true}
          defaultValue
        >
          {titles?.map((title, index) => {
            return (
              <option
                key={title}
                className={styles.option}
                value={values[index]}
              >
                {title}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default FormSelect;
