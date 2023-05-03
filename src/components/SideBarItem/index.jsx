import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./sideBarItem.module.css";
function SideBarItem({ title, icon, link, onClick }) {
  return (
    <NavLink
      onClick={onClick ? onClick : null}
      className={({ isActive }) =>
        isActive ? styles.active : styles.container
      }
      to={link}
    >
      {icon && <div className={styles.iconContainer}>{icon}</div>}
      <p className={styles.title}>{title}</p>
    </NavLink>
  );
}

export default SideBarItem;
