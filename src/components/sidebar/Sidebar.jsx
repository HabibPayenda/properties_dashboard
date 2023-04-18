import React from "react";
// import styles from "./sidebar.module.css";
import logo from '../../assets/logo.jpg'
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="flex flex-grow flex-col bg-yellow-50 h-screen items-center justify-start col-span-2">
      <div className="p-4">
        <img className="h-20" src={logo} alt="logo" />
        <h2 className="text-blue-500">Dashboard</h2>
      </div>
      <nav className="w-full">
        <ul className="w-full flex gap-3 flex-col">
          <Link to="/">
            <li className="bg-blue-500 text-white w-full" >
              Home
            </li>
          </Link>
          <Link to="/properties" className="bg-blue-500 text-white w-full" >
            <li>
              Properties
            </li>
          </Link>
          <Link to="/users" className="bg-blue-500 transition-all hover:bg-slate-600 text-white w-full" href="/">
            <li>
              Users
            </li>
          </Link>
          <Link className="bg-blue-500 text-white w-full" >
            <li>
              Users
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;