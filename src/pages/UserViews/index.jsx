import React from "react";
import styles from "./userViews.module.css";
import { useSelector } from "react-redux";
import SectionHeader from "../../components/SectionHeader";
import UserViewsTable from "../../tables/UserViewsTable";

function UserViews() {
  const user = useSelector((state) => state.users.showUser);
  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );
  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <div className={styles.list}>
        <SectionHeader title="User Views" />
        <div style={{ flex: 9, width: "100%" }}>
          {user?.user_views?.length < 1 && (
            <p>This user has not viewed anything yet</p>
          )}
          <UserViewsTable />
        </div>
      </div>
    </div>
  );
}

export default UserViews;
