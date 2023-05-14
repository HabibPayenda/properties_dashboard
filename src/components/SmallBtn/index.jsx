import React from "react";

import styles from "./smallBtn.module.css";
import { Link } from "react-router-dom";

function SmallBtn({ title, to }) {
  return (
    <Link to={to} className={styles.container}>
      {title}
    </Link>
  );
}

export default SmallBtn;
