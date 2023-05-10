import React, { useState } from "react";
import styles from "./propertySlideCard.module.css";

import homeImage from "../../assets/home.jpg";
import FormModal from "../FormModal";
import HomeRoomEdit from "../../Forms/HomeEdit";
import DeleteModalContent from "../DeleteModalContent";
function PropertySlideCard({ room }) {
  const [showRoomEditModal, setShowRoomEditModal] = useState(false);
  const [showRoomDeleteModel, setShowRoomDeleteModal] = useState(false);

  const handleRoomDelete = () => {};

  return (
    <div className={styles.container}>
      <FormModal
        openModal={showRoomEditModal}
        setOpenModal={setShowRoomEditModal}
      >
        <HomeRoomEdit room={room} />
      </FormModal>
      <FormModal
        openModal={showRoomDeleteModel}
        setOpenModal={setShowRoomDeleteModal}
      >
        <DeleteModalContent
          handleDelete={handleRoomDelete}
          handleClose={setShowRoomDeleteModal}
        />
      </FormModal>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={homeImage} alt="" />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.header}>Header</div>
        <div className={styles.content}>
          <div className={styles.contentColumn}>
            <div className={styles.contentItem}>
              <p>Length:</p>
              <p>{room?.length ? `${room?.length} m` : ""}</p>
            </div>
            <div className={styles.contentItem}>
              <p>Width:</p>
              <p>{room?.width ? `${room?.width} m` : ""}</p>
            </div>
          </div>
          <div className={styles.contentColumn}>
            <div className={styles.contentItem}>
              <p>To sun:</p>
              <p>{room?.to_sun ? "Yes" : "No"}</p>
            </div>
            <div className={styles.contentItem}>
              <p>Windows:</p>
              <p>{room?.windows}</p>
            </div>
          </div>
          <div className={styles.contentColumn}>
            <div className={styles.contentItem}>
              Color:
              <div
                style={{
                  height: "10px",
                  width: "10px",
                  backgroundColor: room?.color || "black",
                }}
              ></div>
            </div>
            <div className={styles.contentItem}>
              <p>Cupboards:</p>
              <p>{room?.cup_board ? "Yes" : "No"}</p>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <p
            onClick={() => setShowRoomEditModal(true)}
            className={styles.editBtn}
          >
            Edit
          </p>
          <p
            onClick={() => setShowRoomDeleteModal(true)}
            className={styles.deleteBtn}
          >
            Delete
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropertySlideCard;
