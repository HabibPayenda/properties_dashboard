import React from "react";
import LineChart from "../../charts/LineChart";
import { Chart as ChartJS, registerables } from "chart.js";
import DashBoardCard from "../../components/DashboardCard";
import styles from "./dashboard.module.css";
import { useSelector } from "react-redux";

function Dashboard() {
  ChartJS.register(...registerables);

  const agentsLabels = useSelector((state) => state.agents.chartMonths);
  const agentsData = useSelector((state) => state.agents.chartData);
  const homesLabels = useSelector((state) => state.homes.chartMonths);
  const homesData = useSelector((state) => state.homes.chartData);

  return (
    <div className={styles.container}>
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
  );
}

export default Dashboard;
