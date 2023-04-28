import React from "react";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.listContainer}></div>
      <div className={styles.addNewContainer}></div>
    </div>
  );
}

export default Home;
