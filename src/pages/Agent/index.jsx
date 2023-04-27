import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAgent } from "../../data/agentsSlice";
import SectionHeader from "../../components/SectionHeader";
import styles from "./agent.module.css";

function Agent() {
  const { id } = useParams();

  const agent = useSelector((state) => state.agents.showAgent);
  console.log(agent);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAgent(id));
  }, []);
  return (
    <div className={styles.container}>
      <SectionHeader title={`Agent ${agent?.name} details`} />
      <div className={styles.contentContainer}>Agent</div>
    </div>
  );
}

export default Agent;
