import React from "react";
import { useParams } from "react-router-dom";

function Appointment() {
  const { id } = useParams();
  return (
    <div>
      <p>{`Appointment ${id}`}</p>
    </div>
  );
}

export default Appointment;
