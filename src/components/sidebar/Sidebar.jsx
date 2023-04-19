import React from "react";
// import styles from "./sidebar.module.css";
import logo from '../../assets/logo.jpg'
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../data/adminSlice";

const Sidebar = (props) => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(signOut())
  }
  return (
    <div className="flex flex-grow flex-col bg-yellow-50 h-screen items-center justify-start col-span-2">
      <div className="p-4">
        <img className="h-20" src={logo} alt="logo" />
        <h2 className="text-blue-500">Dashboard</h2>
      </div>
      <nav className="w-full">
        <ul className="w-full flex gap-3 flex-col">
          <NavLink to="/">
            <li className="bg-blue-500 text-white w-full" >
              Home
            </li>
          </NavLink>
          <NavLink to="/agents" className="bg-blue-500 text-white w-full" >
            <li>
              Agents
            </li>
          </NavLink>
          <NavLink to="/properties" className="bg-blue-500 text-white w-full" >
            <li>
              Properties
            </li>
          </NavLink>
          <NavLink to="/users" className="bg-blue-500 transition-all hover:bg-slate-600 text-white w-full" href="/">
            <li>
              Users
            </li>
          </NavLink>
          <NavLink to="/reviews" className="bg-blue-500 text-white w-full" >
            <li>
              Reviews
            </li>
          </NavLink>
          <NavLink to="/trainings" className="bg-blue-500 text-white w-full" >
            <li>
              Trainings
            </li>
          </NavLink>
          <NavLink to="/trainers" className="bg-blue-500 text-white w-full" >
            <li>
              Trainers
            </li>
          </NavLink>
          <NavLink to="/suggestions" className="bg-blue-500 text-white w-full" >
            <li>
              Suggestions
            </li>
          </NavLink>
          <NavLink to="/property_managers" className="bg-blue-500 text-white w-full" >
            <li>
              Property Managers
            </li>
          </NavLink>
          <NavLink to="/offers" className="bg-blue-500 text-white w-full" >
            <li>
              Offers
            </li>
          </NavLink>
          <NavLink to="/appointments" className="bg-blue-500 text-white w-full" >
            <li>
              Appointments
            </li>
          </NavLink>
          <NavLink to="/" onClick={handleLogout} className="bg-blue-500 text-white w-full" >
            <li>
              Logout
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;