import React from "react";
import styles from "./formBtn.module.css";

function FormBtn({ title, onClick, loading }) {
  return (
    <button
      disabled={loading === "pending" ? true : false}
      type="submit"
      className={styles.btn}
      onClick={onClick}
    >
      {loading === "pending" ? loading : title}
    </button>
  );
}

export default FormBtn;
