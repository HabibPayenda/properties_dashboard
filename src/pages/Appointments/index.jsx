import React from "react";
import styles from "./appointments.module.css";
import SectionHeader from "../../components/SectionHeader";
import HomeCreate from "../../Forms/HomeCreate";
import AppointmentsTable from "../../tables/Appointments";

function Appointments() {
  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <SectionHeader title="Appointments" />
        <div className={styles.contentContainer}>
          <div style={{ flex: 9, width: "100%" }}>
            <AppointmentsTable />
          </div>
        </div>
      </div>
      <div className={styles.addNewContainer}>
        <HomeCreate />
      </div>
    </div>
  );
}

export default Appointments;
