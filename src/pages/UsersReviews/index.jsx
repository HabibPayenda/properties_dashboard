import React from "react";
import SectionHeader from "../../components/SectionHeader";
import { useSelector } from "react-redux";
import styles from "./usersReviews.module.css";
import UsersReviewsTable from "../../tables/UsersReviewsTable";

function UsersReviews() {
  const userReviews = useSelector((state) => state.userReviews.userReviews);
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <SectionHeader title="Users Reviews" />
        <div style={{ flex: 9, width: "100%" }}>
          {userReviews?.length < 1 && <p>There is no users reviews yet</p>}
          <UsersReviewsTable />
        </div>
      </div>
      <div className={styles.addNew}>Graph</div>
    </div>
  );
}

export default UsersReviews;
