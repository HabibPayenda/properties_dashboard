import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAgent } from "../../data/agentsSlice";
import SectionHeader from "../../components/SectionHeader";
import styles from "./agent.module.css";
import ContentHeader from "../../components/ContentHeader";
import ItemsCard from "../../components/ItemsCard";

function Agent() {
  const { id } = useParams();

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  const agent = useSelector((state) => state.agents.showAgent);
  console.log(agent);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAgent(id));
  }, []);
  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <SectionHeader title={`Agent ${agent?.name} details`} />
      <div className={styles.contentContainer}>
        <ItemsCard />
      </div>
    </div>
  );
}

export default Agent;
