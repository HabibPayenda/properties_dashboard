import React, { useEffect } from "react";
import LineChart from "../../charts/LineChart";
import { Chart as ChartJS, registerables } from "chart.js";
import DashBoardCard from "../../components/DashboardCard";
import styles from "./dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../../components/Calendar";
import { getAllAppointments } from "../../data/appointmentSlice";
import { getAllUsers, getRecentUsers } from "../../data/usersSlice";
import { getAllAdmins } from "../../data/adminSlice";
import { getAllHomes } from "../../data/homeSlice";
import { getAllAgents } from "../../data/agentsSlice";
import RecentUsers from "../../components/RecentUsers";
import DashboardSmallCard from "../../components/DashboardSmallCard";
import SmallBtn from "../../components/SmallBtn";
import { getAllPropertyManagers } from "../../data/propertyManagersSlice";
import { getAllCars } from "../../data/CarsSlice";
import { getAllLands } from "../../data/LandsSlice";

function Dashboard() {
  ChartJS.register(...registerables);

  const agentsLabels = useSelector((state) => state.agents.chartMonths);
  const agentsData = useSelector((state) => state.agents.chartData);
  const homesLabels = useSelector((state) => state.homes.chartMonths);
  const homesData = useSelector((state) => state.homes.chartData);
  const homes = useSelector((state) => state.homes.homes);
  const cars = useSelector((state) => state.cars.cars);
  const lands = useSelector((state) => state.lands.lands);
  const recentUsers = useSelector((state) => state.users.recentUsers);
  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecentUsers());
    dispatch(getAllAppointments());
    dispatch(getAllUsers());
    dispatch(getAllAdmins());
    dispatch(getAllHomes());
    dispatch(getAllAgents());
    dispatch(getAllPropertyManagers());
    dispatch(getAllCars());
    dispatch(getAllLands());
    dispatch(getAllUsers());
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
            total={homes?.length}
          />
          <DashboardSmallCard
            to="properties/cars"
            subTitle="Explore Cars"
            title="Cars"
            color1="#00b260"
            color2="#00d673"
            icon={<i className="fa-solid fa-car"></i>}
            total={cars?.length}
          />
          <DashboardSmallCard
            to="properties/warehouses"
            subTitle="Explore Warehouses"
            title="Warehouses"
            color1="#be28cf"
            color2="#f68ae2"
            icon={<i className="fa-solid fa-building-columns"></i>}
            total={0}
          />
          <DashboardSmallCard
            to="properties/lands"
            subTitle="Explore Lands"
            title="Lands"
            color1="#149c9e"
            color2="#1cdadd"
            icon={<i className="fa-solid fa-mountain-sun"></i>}
            total={lands?.length}
          />
        </div>
        <div className={styles.dashboardTopRight}></div>
      </div>
      <div className={styles.dashboardBottom}>
        <div className={styles.dashboardBottomLeft}>
          <div className={styles.dashboardChartContainer}>
            <LineChart label="Agents" data={agentsData} labels={agentsLabels} />
            <LineChart label="Homes" data={homesData} labels={homesLabels} />
          </div>
          <div className={styles.dashboardCalendarContainer}>
            <div className={styles.calendarHeader}>
              <h3 className={styles.calendarTitle}> Todays Appointments</h3>
              <p> active: 3</p>
              <SmallBtn title="View All" to="/appointments" />
            </div>
            <div
              style={{ height: "190px", width: "100%", overflowY: "scroll" }}
            >
              <Calendar />
            </div>
          </div>
        </div>
        <RecentUsers recentUsers={recentUsers} users={users} />
      </div>
    </div>
  );
}

export default Dashboard;
