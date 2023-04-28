import React from "react";
import styles from "./dashboardCard.module.css";
import FormBtn from "../FormBtn";
import { Link } from "react-router-dom";

function DashBoardCard({ chart, title, text, to }) {
  return (
    <div className={styles.container}>
      <div className={styles.chart}>{chart}</div>
      <div className={styles.footer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.body}>{text}</p>
        <Link to={to}>
          <FormBtn title="View More" />
        </Link>
      </div>
    </div>
  );
}

export default DashBoardCard;
