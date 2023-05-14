import React from "react";
import styles from "./tablePersonBadge.module.css";

import userImage from "../../assets/user.jpg";
import { useSelector } from "react-redux";

function TablePersonBadge({ id }) {
  const agents = useSelector((state) => state.agents.agents);
  const agent = agents.filter((agent) => agent.id === id);
  return (
    <span className={styles.details}>
      <span className={styles.imageContainer}>
        <img src={userImage} className={styles.image} alt="user_image" />
      </span>
      <span className={styles.detailsInfo}>
        <h4 className={styles.title}>{agent[0]?.name}</h4>
        <p className={styles.subTitle}>Afghanistan</p>
      </span>
    </span>
  );
}

export default TablePersonBadge;
