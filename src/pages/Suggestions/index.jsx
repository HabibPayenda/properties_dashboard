import React from "react";
import SuggestionShowCard from "../../components/SuggestionShowCard";
import styles from "./suggestions.module.css";
import SectionHeader from "../../components/SectionHeader";
import { useSelector } from "react-redux";
import ItemsCard from "../../components/ItemsCard";

function Suggestions() {
  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <SectionHeader title="Suggestions" />
      <div className={styles.contentContainer}>
        <ItemsCard
          title="Users Suggestions"
          text="These suggestions belongs to users"
          icon={<i className="fa-solid fa-house"></i>}
          to="users"
          total={0}
        />
        <ItemsCard
          title="Agents Suggestions"
          text="These suggestions belongs to agents"
          icon={<i className="fa-solid fa-house"></i>}
          to="agents"
          total={0}
        />
        <ItemsCard
          title="Managers Suggestions"
          text="These suggestions belongs to managers"
          icon={<i className="fa-solid fa-house"></i>}
          to="property_managers"
          total={0}
        />
      </div>
    </div>
  );
}

export default Suggestions;
