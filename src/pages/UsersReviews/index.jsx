import React from "react";
import UserReviewsTable from "../../tables/UsersReviewsTable";
import SectionHeader from "../../components/SectionHeader";
import { useSelector } from "react-redux";
import styles from "./usersReviews.module.css";

function UsersReviews() {
  const userReviews = useSelector((state) => state.userReviews.userReviews);
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <SectionHeader title="Users Reviews" />
        <div style={{ flex: 9, width: "100%" }}>
          {userReviews?.length < 1 && <p>There is no users reviews yet</p>}
          <UserReviewsTable />
        </div>
      </div>
      <div className={styles.addNew}>Graph</div>
    </div>
  );
}

export default UsersReviews;
