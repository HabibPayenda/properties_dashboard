import React, { useEffect } from "react";
import SectionHeader from "../../components/SectionHeader";
import styles from "./reviews.module.css";
import ReviewCard from "../../components/ReviewCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserReviews } from "../../data/userReviewsSlice";

function Reviews() {
  const dispatch = useDispatch();
  const userReviews = useSelector((state) => state.userReviews.userReviews);
  useEffect(() => {
    dispatch(getAllUserReviews());
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <SectionHeader title="Reviews" />
        <div className={styles.contentContainer}>
          <ReviewCard title="User Reviews" count={userReviews?.length} />
          <ReviewCard title="Agent Reviews" count="all agent reviews" />
          <ReviewCard
            title="Property Manager Reviews"
            count="all property manager reviews"
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
