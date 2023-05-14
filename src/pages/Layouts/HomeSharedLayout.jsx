import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function HomeSharedLayout() {
  return (
    <div className="mainContainer">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default HomeSharedLayout;
