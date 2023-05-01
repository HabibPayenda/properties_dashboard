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

  return (
    <div className={styles.container}>
      <div className={styles.chartsContianer}>
        <DashBoardCard
          chart={
            <LineChart data={agentsData} labels={agentsLabels} label="Agents" />
          }
          title="Agents"
          text="All agents graph"
          to="agents"
        />
        <DashBoardCard
          chart={
            <LineChart data={homesData} labels={homesLabels} label="Homes" />
          }
          title="Homes"
          text="All homes graph"
          to="properties/homes"
        />
        <DashBoardCard
          chart={
            <LineChart data={agentsData} labels={agentsLabels} label="Agents" />
          }
          title="Agents"
          text="All agents graph"
          to="agents"
        />
        <DashBoardCard
          chart={
            <LineChart data={agentsData} labels={agentsLabels} label="Agents" />
          }
          title="Agents"
          text="All agents graph"
          to="agents"
        />
      </div>
      <div className={styles.calendarContainer}>
        <Calendar />
      </div>
    </div>
  );
}

export default Dashboard;
