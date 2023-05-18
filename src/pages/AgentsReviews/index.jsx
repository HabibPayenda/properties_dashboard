import React from "react";
import SectionHeader from "../../components/SectionHeader";
import UsersReviewsTable from "../../tables/UsersReviewsTable";
import styles from "./agentsReviews.module.css";
import { useSelector } from "react-redux";

function AgentsReviews() {
  const agentReviews = useSelector((state) => state.agentReviews.agentReviews);
  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );
  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <div className={styles.list}>
        <SectionHeader title="Agents Reviews" />
        <div style={{ flex: 9, width: "100%" }}>
          {agentReviews?.length < 1 && <p>There is no agents reviews yet</p>}
          <UsersReviewsTable />
        </div>
      </div>
    </div>
  );
}

export default AgentsReviews;
