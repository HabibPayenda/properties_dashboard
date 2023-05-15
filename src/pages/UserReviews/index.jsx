import React from "react";
import styles from "./userReviews.module.css";
import { useSelector } from "react-redux";
import SectionHeader from "../../components/SectionHeader";
import UserReviewsTable from "../../tables/UserReviewsTable";

function UserReviews() {
  const user = useSelector((state) => state.users.showUser);
  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );
  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <div className={styles.list}>
        <SectionHeader title="User Reviews" />
        <div style={{ flex: 9, width: "100%" }}>
          {user?.user_reviews?.length < 1 && (
            <p>This user has not reviewed anything yet</p>
          )}
          <UserReviewsTable />
        </div>
      </div>
    </div>
  );
}

export default UserReviews;
