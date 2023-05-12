import React from "react";
import styles from "./personDetails.module.css";

import userImage from "../../assets/user.jpg";

function PersonDetailsHeader({ person }) {
  return (
    <div className={styles.container}>
      <div className={styles.circleContainer}>
        <div className={styles.circle}>
          <img className={styles.image} src={userImage} alt="" />
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.hiddenCirle}></div>
        <div className={styles.detailsContentContainer}>
          <div className={styles.detailsContent}>
            <p className={styles.detailsTitle}>{person?.name}</p>
            <p className={styles.detailsItem}>last_active:</p>
          </div>
          <div className={styles.detailsContent}>
            <p className={styles.detailsTitle}>Contact</p>
            <p className={styles.detailsItem}>
              {`Mobile: ${person?.contact?.phone_number_one || null}`}
            </p>
            <p className={styles.detailsItem}>
              {`Email: ${person?.contact?.email_one || null}`}
            </p>
          </div>
          <div className={styles.detailsContent}>
            <p className={styles.detailsTitle}>Address</p>
            <p className={styles.detailsItem}>
              {`City: ${person?.addresses[0]?.city || null}`}
            </p>
            <p className={styles.detailsItem}>
              {`District: ${person?.addresses[0]?.district || null}`}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.btnsContainer}>
        <p
          onClick={() => setShowHomeEditModal(true)}
          className={styles.editBtn}
        >
          Edit
        </p>
        <p
          onClick={() => setShowHomeDeleteModal(true)}
          className={styles.deleteBtn}
        >
          Delete
        </p>
      </div>
    </div>
  );
}

export default PersonDetailsHeader;
