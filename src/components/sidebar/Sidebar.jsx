import React from "react";
import styles from "./sidebar.module.css";
import logo from "../../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../data/adminSlice";
import SideBarItem from "../SideBarItem";
import SideBarItemLink from "../SideBarItemLink";
import userImage from "../../assets/user.jpg";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(signOut());
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.logoContainer}>
            <div className={styles.logoIcon}>
              <i className={["fa-solid fa-igloo"]}></i>
            </div>
            <h1 className={styles.logoText}>PAPI</h1>
          </div>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className={styles.userDetail}>
          <div className={styles.userInfo}>
            <div className={styles.userImageContainer}>
              <img className={styles.userImage} src={userImage} alt="logo" />
            </div>
            <div className={styles.userMessageContianer}>
              <p className={styles.userMessageHi}>Hi,</p>
              <p className={styles.userMessageName}>Habib Payenda</p>
            </div>
          </div>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.sideBarItemsContainer}>
          <li>
            <SideBarItem
              title="Dashboard"
              icon={<i className="fa-solid fa-table-columns"></i>}
              link="/"
            />
          </li>
          <li>
            <SideBarItem
              title="Agents"
              icon={<i className="fa-solid fa-user-tie"></i>}
              link="/agents"
            />
          </li>
          <li>
            <SideBarItem
              title="Properties"
              icon={<i className="fa-solid fa-house-chimney-window"></i>}
              link="/properties"
            />
          </li>
          <li>
            <SideBarItem
              title="Users"
              icon={<i className="fa-solid fa-users"></i>}
              link="/users"
            />
          </li>
          <li>
            <SideBarItem
              title="Reviews"
              icon={<i className="fa-solid fa-comments"></i>}
              link="/reviews"
            />
          </li>
          <li>
            <SideBarItem
              title="Trainings"
              icon={<i className="fa-solid fa-chalkboard"></i>}
              link="/trainings"
            />
          </li>
          <li>
            <SideBarItem
              title="Trainers"
              icon={<i className="fa-solid fa-chalkboard-user"></i>}
              link="/trainers"
            />
          </li>

          <li>
            <SideBarItem
              title="Suggestions"
              icon={<i className="fa-solid fa-lightbulb"></i>}
              link="/suggestions"
            />
          </li>
          <li>
            <SideBarItem
              title="Managers"
              icon={<i className="fa-solid fa-people-roof"></i>}
              link="/property_managers"
            />
          </li>
          <li>
            <SideBarItem
              title="Offers"
              icon={<i className="fa-solid fa-hand-holding-dollar"></i>}
              link="/offers"
            />
          </li>
          <li>
            <SideBarItem
              title="Appointments"
              icon={<i className="fa-solid fa-handshake"></i>}
              link="/appointments"
            />
          </li>
          <li>
            <SideBarItemLink
              title="LogOut"
              icon={<i className="fa-solid fa-right-from-bracket"></i>}
              link="/"
              onClick={handleLogout}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
