import React from "react";
import SectionHeader from "../../components/SectionHeader";
import styles from "./users.module.css";

function Users() {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <SectionHeader title="Users" />
        <div style={{ flex: 9, width: "100%" }}></div>
      </div>
      <div className={styles.addNew}></div>
    </div>
  );
}

export default Users;
