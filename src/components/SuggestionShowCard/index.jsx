import React from "react";
import styles from "./suggestionShowCard.module.css";

function SuggestionShowCard({ suggestion }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.header}>
        <div className={styles.img}></div>
        <div>
          <h4>{suggestion?.user?.name || "Susan Wong"}</h4>
          <span>Developer</span>
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.title}>{suggestion?.title || "Title"}</p>
        <p>
          {suggestion?.description ||
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto qui reprehenderit temporibus corrupti iure ratione debitis! Consectetur quaerat quo facilis odio, quos, deleniti similique quam nisi cumque"}
        </p>
      </div>

      <div className={styles.footer}>2023 - 5 - 15</div>
    </div>
  );
}

export default SuggestionShowCard;
