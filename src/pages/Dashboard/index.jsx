import React, { useEffect } from "react";
import LineChart from "../../charts/LineChart";
import { Chart as ChartJS, registerables } from "chart.js";
import DashBoardCard from "../../components/DashboardCard";
import styles from "./dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../../components/Calendar";
import { getAllAppointments } from "../../data/appointmentSlice";
import { getAllUsers } from "../../data/usersSlice";
import { getAllAdmins } from "../../data/adminSlice";
import { getAllHomes } from "../../data/homeSlice";
import { getAllAgents } from "../../data/agentsSlice";
import RecentUsers from "../../components/RecentUsers";
import DashboardSmallCard from "../../components/DashboardSmallCard";

function Dashboard() {
  ChartJS.register(...registerables);

  const agentsLabels = useSelector((state) => state.agents.chartMonths);
  const agentsData = useSelector((state) => state.agents.chartData);
  const homesLabels = useSelector((state) => state.homes.chartMonths);
  const homesData = useSelector((state) => state.homes.chartData);
  const appointments = useSelector((state) => state.appointments.appointments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAppointments());
    dispatch(getAllUsers());
    dispatch(getAllAdmins());
    dispatch(getAllHomes());
    dispatch(getAllAgents());
  }, []);

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );
  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <div className={styles.dashboardTop}>
        <div className={styles.dashboardTopLeft}>
          <DashboardSmallCard
            to="properties/homes"
            subTitle="Explore Homes"
            title="Homes"
            color1="#1533c8"
            color2="#4f95e1"
            icon={<i className="fa-solid fa-house"></i>}
          />
          <DashboardSmallCard
            to="properties/cars"
            subTitle="Explore Cars"
            title="Cars"
            color1="#00b260"
            color2="#00d673"
            icon={<i className="fa-solid fa-car"></i>}
          />
          <DashboardSmallCard
            to="properties/warehouses"
            subTitle="Explore Warehouses"
            title="Warehouses"
            color1="#be28cf"
            color2="#f68ae2"
            icon={<i className="fa-solid fa-building-columns"></i>}
          />
          <DashboardSmallCard
            to="properties/lands"
            subTitle="Explore Lands"
            title="Lands"
            color1="#149c9e"
            color2="#1cdadd"
            icon={<i className="fa-solid fa-mountain-sun"></i>}
          />
        </div>
        <div className={styles.dashboardTopRight}></div>
      </div>
      <div className={styles.calendarContainer}>
        <Calendar />
        <RecentUsers />
      </div>
    </div>
  );
}

export default Dashboard;
