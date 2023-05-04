import moment from "moment/moment";
import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";

import styles from "./calendar.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const localizer = momentLocalizer(moment);

function Calendar(props) {
  const appointments = useSelector((state) => state.appointments.appointments);

  const events = [];

  appointments?.forEach((appointment) => {
    let event = {};
    event.start = moment(appointment.start.slice(0, -1)).toDate();
    event.end = moment(appointment.end.slice(0, -1)).toDate();
    // event.start = appointment.start;
    // event.end = appointment.end;
    event.title = appointment.notes;
    event.id = appointment.id;
    events.push(event);
  });

  const components = {
    event: (props) => {
      console.log(props);
      return <Link to={`appointments/${props.event.id}`}>{props.title}</Link>;
    },
  };

  return (
    <BigCalendar
      className={styles.container}
      style={{ height: "300px" }}
      {...props}
      localizer={localizer}
      defaultView={"day"}
      events={events}
      components={components}
      toolbar={false}
    />
  );
}

export default Calendar;
