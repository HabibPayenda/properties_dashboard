import React from "react";
import UserSearchesTable from "../../tables/UserSearchesTable";
import styles from "./userSearches.module.css";
import { useSelector } from "react-redux";
import SectionHeader from "../../components/SectionHeader";

function UserSearches() {
  const user = useSelector((state) => state.users.showUser);
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <SectionHeader title="User Searches" />
        <div style={{ flex: 9, width: "100%" }}>
          {user?.user_searches?.length < 1 && (
            <p>This user has not searched anything yet</p>
          )}
          <UserSearchesTable />
        </div>
      </div>
      <div className={styles.addNew}>Graph</div>
    </div>
  );
}

export default UserSearches;
