import React from "react";
import styles from "./personHomes.module.css";
import { useSelector } from "react-redux";
import SectionHeader from "../../components/SectionHeader";
import PersonHomeCard from "../../components/PersonHomeCard";

function PersonHomes() {
  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );
  const agentProperties = useSelector((state) => state.agents.agentProperties);
  const { homes } = agentProperties;

  const renderHomes = homes?.map((home) => {
    return <PersonHomeCard home={home} />;
  });

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <SectionHeader
        title="Agent Homes"
        text="Embark on a Journey of Discovery: Exploring Homes That Capture the Heart and Mind"
      />
      <div className={styles.contentContainer}>
        {homes.length > 0 ? (
          renderHomes
        ) : (
          <h1>This Agent doesn't have any homes rigestered.</h1>
        )}
      </div>
    </div>
  );
}

export default PersonHomes;
