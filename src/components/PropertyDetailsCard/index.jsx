import React, { useState } from "react";
import styles from "./propertyDetailsCard.module.css";
import { Link } from "react-router-dom";
import homeImage from "../../assets/home.jpg";
import ModalLink from "../ModalLink";
import FormModal from "../FormModal";
import HomeRoomCreate from "../../Forms/HomeRoomCreate";

function PropertyDetailsCard() {
  const [showRoomModal, setShowRoomModal] = useState(false);

  const handleShowRoomModal = () => {
    setShowRoomModal(true);
  };

  return (
    <div className={styles.container}>
      <FormModal openModal={showRoomModal} setOpenModal={setShowRoomModal}>
        <HomeRoomCreate />
      </FormModal>
      <div className={styles.header}>
        <Link className={styles.backLink} to="..">
          <i className="fa-solid fa-arrow-left"></i>
          Homes
        </Link>
        <div className={styles.linksContainer}>
          <ModalLink title="Add Room" onClick={handleShowRoomModal} />
          <ModalLink title="Add Bath" />
          <ModalLink title="Add Kitchen" />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={homeImage} alt="" />
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.propertyDetails}>
            <div className={styles.propertyDetailsName}>
              <h2 className={styles.title}>Home one</h2>
              <p className={styles.subTitle}>A beutiful home</p>
            </div>
            <div className={styles.propertyDetailsValues}>
              <div className={styles.propertyDetailsValuesColumn}>
                <div className={styles.dealPrice}>
                  <i class="fa-solid fa-house"></i> <p>5</p>
                </div>
                <div className={styles.dealType}>
                  <i className="fa-solid fa-shower"></i> 2
                </div>
              </div>
              <div className={styles.propertyDetailsValuesColumn}>
                <div className={styles.dealPrice}>
                  <i className="fa-solid fa-kitchen-set"></i> <p>1</p>
                </div>
                <div className={styles.dealType}>
                  <i className="fa-solid fa-chart-area"></i> 180
                </div>
              </div>
              <div className={styles.propertyDetailsValuesColumn}>
                <div className={styles.dealPrice}>
                  <i className="fa-solid fa-coins"></i>
                  <p>12000</p>
                </div>
                <div className={styles.dealType}>
                  <i className="fa-solid fa-filter"></i>
                  Rent
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyOptions}>
            <div className={styles.amenities}>
              <p className={styles.propertyOptionsTitle}>Amenities</p>
              <div className={styles.propertyOptionsItem}>
                <i className="fa-solid fa-check"></i>
                <p>Parking</p>
              </div>
            </div>
            <div className={styles.restrictions}>
              <p className={styles.propertyOptionsTitle}>Restrictions</p>
              <div className={styles.propertyOptionsItem}>
                <i className="fa-solid fa-xmark"></i>
                <p>Internet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetailsCard;
