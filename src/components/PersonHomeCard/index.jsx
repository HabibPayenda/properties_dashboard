import React from "react";
import homeImage from "../../assets/home.jpg";
import styles from "./personHomeCard.module.css";
import { Link } from "react-router-dom";

function PersonHomeCard({ home }) {
  console.log(home);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={home?.property?.image_url || homeImage}
          alt=""
        />
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.name}>{home?.property?.name}</p>
        <p className={styles.rooms}>
          rooms:{home?.rooms?.length > 0 ? home?.rooms?.length : 0}
        </p>
        <Link
          to={`/properties/homes/${home?.id}`}
          state={{ property_id: home?.property_id }}
          className={styles.btn}
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default PersonHomeCard;
