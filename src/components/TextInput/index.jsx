import React from "react";
import styles from "./textInput.module.css";

function TextInput({
  name,
  value,
  placeholder,
  id,
  onChange,
  type,
  className,
  label,
  onBlur,
  touched,
  errors,
  containerClassName,
}) {
  const showErrors = () => {
    if (errors && touched) {
      return <span className={styles.errors}>{errors}</span>;
    }
  };
  return (
    <>
      <div className={`${styles.container} ${containerClassName}`}>
        {label && <p className={styles.label}>{label}</p>}
        <input
          onBlur={onBlur}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          id={id}
          onChange={onChange}
          className={`${styles.input} ${className}`}
        />
      </div>
      {showErrors()}
    </>
  );
}

export default TextInput;
