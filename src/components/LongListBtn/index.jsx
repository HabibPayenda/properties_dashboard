import React from "react";
import styles from "./longListBtn.module.css";
import { NavLink } from "react-router-dom";

function LongListBtn() {
  return <NavLink className={styles.container}>View</NavLink>;
}

export default LongListBtn;
