import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAgent } from "../../data/agentsSlice";
import SectionHeader from "../../components/SectionHeader";
import styles from "./agent.module.css";
import ContentHeader from "../../components/ContentHeader";
import ItemsCard from "../../components/ItemsCard";
import PersonDetailsHeader from "../../components/PersonDetailsHeader";

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
      <PersonDetailsHeader person={agent} />
      <div className={styles.btnsContainer}>
        <p
          onClick={() => setShowHomeEditModal(true)}
          className={styles.editBtn}
        >
          Edit
        </p>
        <p
          onClick={() => setShowHomeDeleteModal(true)}
          className={styles.deleteBtn}
        >
          Delete
        </p>
      </div>
      <div className={styles.contentContainer}>
        <ItemsCard
          title="Agent Homes"
          text="These homes belongs to this agent"
          icon={<i className="fa-solid fa-house"></i>}
          to="/properties/homes"
        />
        <ItemsCard
          title="Agent Homes"
          text="These homes belongs to this agent"
          icon={<i className="fa-solid fa-house"></i>}
          to="/properties/homes"
        />
        <ItemsCard
          title="Agent Homes"
          text="These homes belongs to this agent"
          icon={<i className="fa-solid fa-house"></i>}
          to="/properties/homes"
        />
        <ItemsCard
          title="Agent Homes"
          text="These homes belongs to this agent"
          icon={<i className="fa-solid fa-house"></i>}
          to="/properties/homes"
        />
      </div>
    </div>
  );
}

export default Agent;
