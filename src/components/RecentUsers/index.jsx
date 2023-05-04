import React from "react";
import styles from "./recentUsers.module.css";
import RecentUserCard from "../RecentUserCard";
import SmallBtn from "../SmallBtn";

function RecentUsers() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerRight}>
          <h3 style={styles.title}>Recent Users</h3>
          <p className={styles.subTitle}>Total: {10}</p>
        </div>
        <SmallBtn to="/users" title="View All" />
      </div>
      <div className={styles.content}>
        <RecentUserCard />
        <RecentUserCard />
        <RecentUserCard />
        <RecentUserCard />
        <RecentUserCard />
        <RecentUserCard />
        <RecentUserCard />
        <RecentUserCard />
        <RecentUserCard />
        <RecentUserCard />
        <RecentUserCard />
      </div>
    </div>
  );
}

export default RecentUsers;
