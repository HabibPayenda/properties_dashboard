import React from "react";
import styles from "./dashboardSmallCard.module.css";
import { Link } from "react-router-dom";

function DashboardSmallCard({
  title,
  subTitle,
  icon,
  to,
  color1,
  color2,
  total,
}) {
  return (
    <Link
      to={to}
      className={styles.container}
      style={{
        background:
          color1 && color2
            ? `linear-gradient( 45deg, ${color1}, ${color2})`
            : "#fff",
        boxShadow: `1px 1px 6px ${color2}`,
      }}
    >
      <div className={styles.info}>
        <h3 className={styles.subTitle}>{subTitle}</h3>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.iconContainer}>{icon}</div>
      <p className={styles.text}>{total} total.</p>
    </Link>
  );
}

export default DashboardSmallCard;
