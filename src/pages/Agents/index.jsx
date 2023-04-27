import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAgents } from "../../data/agentsSlice";

import AgentCreate from "../../Forms/AgentCreate";

import styles from "./agents.module.css";
import { getAllAdmins } from "../../data/adminSlice";
import LongList from "../../components/LongList";
import SectionHeader from "../../components/SectionHeader";
import AgentsTable from "../../tables/AgentsTable";

function Agents() {
  const agents = useSelector((state) => state.agents.agents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAgents());
    dispatch(getAllAdmins());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.agentsListContainer}>
        <SectionHeader title="Agents" />
        {/* <LongList data={agents} /> */}
        <div style={{ flex: 9, width: "100%" }}>
          <AgentsTable />
        </div>
      </div>
      <div className={styles.addNewAgentContainer}>
        <AgentCreate />
      </div>
    </div>
  );
}

export default Agents;
