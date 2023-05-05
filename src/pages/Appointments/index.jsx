import React, { useEffect } from "react";
import styles from "./appointments.module.css";
import SectionHeader from "../../components/SectionHeader";
import AppointmentsTable from "../../tables/Appointments";
import AppointmentCreate from "../../Forms/AppointmentCreate";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../../data/appointmentSlice";

function Appointments() {
  const dispatch = useDispatch();

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  useEffect(() => {
    dispatch(getAllAppointments());
  }, [dispatch]);
  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <div className={styles.listContainer}>
        <SectionHeader title="Appointments" />
        <div className={styles.contentContainer}>
          <div style={{ flex: 9, width: "100%" }}>
            <AppointmentsTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
