import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./sideBarItem.module.css";
import { useSelector } from "react-redux";
function SideBarItem({ title, icon, link, onClick }) {
  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );
  return (
    <NavLink
      onClick={onClick ? onClick : null}
      className={({ isActive }) =>
        isActive
          ? isSidebarShown
            ? styles.active
            : styles.activeClose
          : isSidebarShown
          ? styles.container
          : styles.containerClose
      }
      to={link}
    >
      {icon && <div className={styles.iconContainer}>{icon}</div>}
      <p className={styles.title}>{title}</p>
    </NavLink>
  );
}

export default SideBarItem;
