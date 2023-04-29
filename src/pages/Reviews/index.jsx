import React from "react";
import SectionHeader from "../../components/SectionHeader";
import styles from "./reviews.module.css";
import ReviewCard from "../../components/ReviewCard";

function Reviews() {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <SectionHeader title="Reviews" />
        <div className={styles.contentContainer}>
          <ReviewCard title="User Reviews" info="all user reviews" />
          <ReviewCard title="User Reviews" info="all user reviews" />
          <ReviewCard title="User Reviews" info="all user reviews" />
        </div>
      </div>
      <div className={styles.graphsContainer}>
        <div className={styles.graph}>UserRevies Graph</div>
        <div className={styles.graph}>Agent Reviews Graph</div>
        <div className={styles.graph}>Property Manager Reviews Graph</div>
      </div>
    </div>
  );
}

export default Reviews;
