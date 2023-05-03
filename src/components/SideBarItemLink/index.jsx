import React from "react";
import { Link } from "react-router-dom";
import styles from "./sideBarItemLink.module.css";
function SideBarItemLink({ title, icon, link, onClick }) {
  return (
    <Link
      onClick={onClick ? onClick : null}
      className={styles.container}
      to={link}
    >
      {icon && <div className={styles.iconContainer}>{icon}</div>}
      <p className={styles.title}>{title}</p>
    </Link>
  );
}

export default SideBarItemLink;
