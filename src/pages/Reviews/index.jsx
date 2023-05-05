import React, { useEffect } from "react";
import SectionHeader from "../../components/SectionHeader";
import styles from "./reviews.module.css";
import ReviewCard from "../../components/ReviewCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserReviews } from "../../data/userReviewsSlice";
import { getAllAgentReviews } from "../../data/agentReviewsSlice";
import { getAllPropertyManagerReviews } from "../../data/propertyManagerReviewsSlice";
import { Link } from "react-router-dom";

function Reviews() {
  const dispatch = useDispatch();
  const userReviews = useSelector((state) => state.userReviews.userReviews);
  const agentReviews = useSelector((state) => state.agentReviews.agentReviews);
  const propertyManagerReviews = useSelector(
    (state) => state.propertyManagerReviews.propertyManagerReviews
  );

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );
  useEffect(() => {
    dispatch(getAllUserReviews());
    dispatch(getAllAgentReviews());
    dispatch(getAllPropertyManagerReviews());
  }, []);
  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <div className={styles.list}>
        <SectionHeader
          title="Reviews"
          text="Discover the Best Sources: Unleashing the Power of Crowdsourced Reviews!"
        />
        <div className={styles.contentContainer}>
          <Link style={{ flex: 1, height: "33%", width: "100%" }} to="users">
            <ReviewCard title="User Reviews" count={userReviews?.length} />
          </Link>

          <Link style={{ flex: 1, height: "33%", width: "100%" }} to="agents">
            <ReviewCard title="Agent Reviews" count={agentReviews?.length} />
          </Link>

          <Link
            style={{ flex: 1, height: "33%", width: "100%" }}
            to="property_managers_reviews"
          >
            <ReviewCard
              title="Property Manager Reviews"
              count={propertyManagerReviews?.length}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
