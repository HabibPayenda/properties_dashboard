import React, { useEffect } from "react";
import SectionHeader from "../../components/SectionHeader";
import styles from "./reviews.module.css";
import ReviewCard from "../../components/ReviewCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserReviews } from "../../data/userReviewsSlice";
import { getAllAgentReviews } from "../../data/agentReviewsSlice";
import { getAllPropertyManagerReviews } from "../../data/propertyManagerReviewsSlice";

function Reviews() {
  const dispatch = useDispatch();
  const userReviews = useSelector((state) => state.userReviews.userReviews);
  const agentReviews = useSelector((state) => state.agentReviews.agentReviews);
  const propertyManagerReviews = useSelector(
    (state) => state.propertyManagerReviews.propertyManagerReviews
  );
  useEffect(() => {
    dispatch(getAllUserReviews());
    dispatch(getAllAgentReviews());
    dispatch(getAllPropertyManagerReviews());
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <SectionHeader title="Reviews" />
        <div className={styles.contentContainer}>
          <ReviewCard title="User Reviews" count={userReviews?.length} />
          <ReviewCard title="Agent Reviews" count={agentReviews?.length} />
          <ReviewCard
            title="Property Manager Reviews"
            count={propertyManagerReviews?.length}
          />
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
