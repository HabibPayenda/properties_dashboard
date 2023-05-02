import React from "react";
import styles from "./homeHeader.module.css";

function HomeHeader({ id, rooms, property_manager_id, owner, agent_id, name }) {
  return (
    <div className={styles.container}>
      <p>Id: {id}</p>
      <p>Rooms: {rooms}</p>
      <p>Manager: {property_manager_id}</p>
      <p>Owner: {owner}</p>
      <p>Agent: {agent_id}</p>
      <p>Name: {name}</p>
    </div>
  );
}

export default HomeHeader;
