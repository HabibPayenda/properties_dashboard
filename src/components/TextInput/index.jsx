import React from "react";
import styles from './textInput.module.css'

function TextInput({
  name,
  value,
  placeholder,
  id,
  onChange,
  type,
  className,
  label
}) {
  return (
    <div className={styles.container}>
      {label && <p className={styles.label}>{label}</p>}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        className={[styles.input]}
        />
      </div>
  );
}

export default TextInput;
