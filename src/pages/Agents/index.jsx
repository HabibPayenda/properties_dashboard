import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAgents } from "../../data/agentsSlice";
import styles from "./agents.module.css";
import { getAllAdmins } from "../../data/adminSlice";
import SectionHeader from "../../components/SectionHeader";
import AgentsTable from "../../tables/AgentsTable";

function Agents() {
  const dispatch = useDispatch();

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  useEffect(() => {
    dispatch(getAllAgents());
    dispatch(getAllAdmins());
  }, []);

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <div className={styles.agentsListContainer}>
        <SectionHeader
          title="Agents"
          text="Company Agents: The Backbone of Successful Business Operations"
        />
        <div style={{ width: "100%" }}>
          <AgentsTable />
        </div>
      </div>
    </div>
  );
}

export default Agents;
