import React, { useEffect } from "react";
import styles from "./appointments.module.css";
import SectionHeader from "../../components/SectionHeader";
import AppointmentsTable from "../../tables/Appointments";
import AppointmentCreate from "../../Forms/AppointmentCreate";
import { useDispatch } from "react-redux";
import { getAllAppointments } from "../../data/appointmentSlice";

function Appointments() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAppointments());
  }, []);
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
        <AppointmentCreate />
      </div>
    </div>
  );
}

export default Appointments;
