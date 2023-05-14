import React from "react";
import styles from "./userReviews.module.css";
import { useSelector } from "react-redux";
import SectionHeader from "../../components/SectionHeader";
import UserReviewsTable from "../../tables/UserReviewsTable";

function UserReviews() {
  const user = useSelector((state) => state.users.showUser);
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <SectionHeader title="User Reviews" />
        <div style={{ flex: 9, width: "100%" }}>
          {user?.user_reviews?.length < 1 && (
            <p>This user has not reviewed anything yet</p>
          )}
          <UserReviewsTable />
        </div>
      </div>
      <div className={styles.addNew}>Graph</div>
    </div>
  );
}

export default UserReviews;
