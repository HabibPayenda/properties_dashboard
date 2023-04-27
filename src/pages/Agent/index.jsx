import React from "react";
import { useParams } from "react-router-dom";

function Agent() {
  const { id } = useParams();
  console.log(params);
  return <div>Agent</div>;
}

export default Agent;
