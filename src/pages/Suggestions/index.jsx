import React from "react";
import SuggestionShowCard from "../../components/SuggestionShowCard";
import styles from "./suggestions.module.css";
import SectionHeader from "../../components/SectionHeader";

function Suggestions() {
  return (
    <div className={styles.container}>
      <SectionHeader title="Suggestions" />
      <div className={styles.contentContainer}>
        <SuggestionShowCard />
        <SuggestionShowCard />
      </div>
    </div>
  );
}

export default Suggestions;
