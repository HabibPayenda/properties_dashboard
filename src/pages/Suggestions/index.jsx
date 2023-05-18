import React from "react";
import SuggestionShowCard from "../../components/SuggestionShowCard";
import styles from "./suggestions.module.css";
import SectionHeader from "../../components/SectionHeader";
import { useSelector } from "react-redux";

function Suggestions() {
  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <SectionHeader title="Suggestions" />
      <div className={styles.contentContainer}>
        <SuggestionShowCard />
        <SuggestionShowCard />
      </div>
    </div>
  );
}

export default Suggestions;
