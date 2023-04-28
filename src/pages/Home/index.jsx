import React from "react";
import styles from "./home.module.css";
import { useParams } from "react-router-dom";

function Home() {
  const { id } = useParams();
  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>{`Hello home ${id}`}</div>
      <div className={styles.addNewContainer}></div>
    </div>
  );
}

export default Home;
