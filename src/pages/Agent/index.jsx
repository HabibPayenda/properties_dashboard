import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAgent, getProperties } from "../../data/agentsSlice";
import styles from "./agent.module.css";
import ItemsCard from "../../components/ItemsCard";
import PersonDetailsHeader from "../../components/PersonDetailsHeader";
import FormModal from "../../components/FormModal";
import AgentEdit from "../../Forms/AgentEdit";

function Agent() {
  const { id } = useParams();

  const [showAgentEditModal, setShowAgentEditModal] = useState(false);

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  const agent = useSelector((state) => state.agents.showAgent);
  const agentProperties = useSelector((state) => state.agents.agentProperties);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAgent(id));
    dispatch(getProperties(id));
  }, []);
  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <FormModal
        openModal={showAgentEditModal}
        setOpenModal={setShowAgentEditModal}
      >
        <AgentEdit agent={agent} />
      </FormModal>
      <PersonDetailsHeader person={agent} />
      <div className={styles.btnsContainer}>
        <p
          onClick={() => setShowAgentEditModal(true)}
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
          to="homes"
          total={agentProperties?.homes?.length}
        />
        <ItemsCard
          title="Agent Cars"
          text="These cars belongs to this agent"
          icon={<i className="fa-solid fa-car"></i>}
          to="/properties/homes"
          total={agentProperties?.cars?.length}
        />
        <ItemsCard
          title="Agent Warehouses"
          text="These warehouses belongs to this agent"
          icon={<i className="fa-solid fa-building-columns"></i>}
          to="/properties/homes"
        />
        <ItemsCard
          title="Agent Lands"
          text="These lands belongs to this agent"
          icon={<i className="fa-solid fa-mountain-sun"></i>}
          to="/properties/homes"
        />
      </div>
    </div>
  );
}

export default Agent;
