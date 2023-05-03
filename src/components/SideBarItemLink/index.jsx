import React from "react";
import { Link } from "react-router-dom";
import styles from "./sideBarItemLink.module.css";
import { useSelector } from "react-redux";
function SideBarItemLink({ title, icon, link, onClick }) {
  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );
  return (
    <Link
      onClick={onClick ? onClick : null}
      className={isSidebarShown ? styles.container : styles.containerClose}
      to={link}
    >
      {icon && <div className={styles.iconContainer}>{icon}</div>}

      <p className={styles.title}>{title}</p>
    </Link>
  );
}

export default SideBarItemLink;
