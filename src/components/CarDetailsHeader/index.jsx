import React, { useState } from "react";
import styles from "./carDetailsHeader.module.css";
import { Link, useNavigate } from "react-router-dom";
import homeImage from "../../assets/home.jpg";
import ModalLink from "../ModalLink";
import FormModal from "../FormModal";
import HomeRoomCreate from "../../Forms/HomeRoomCreate";
import HomeAmenityCreate from "../../Forms/HomeAmenityCreate";
import PropertyRestrictionCreate from "../../Forms/PropertyRestrictionCreate";
import AmenitiesList from "../AmenitiesList";
import RestrictionsList from "../RestrictionsList";
import HomeEdit from "../../Forms/HomeEdit";
import DeleteModalContent from "../DeleteModalContent";
import { useDispatch } from "react-redux";
import { deleteHome } from "../../data/homeSlice";
import OfferCreate from "../../Forms/OfferCreate";
import PropertyDetailsHeader from "../PropertyDetailsHeader";

function CarDetailsCard({ car }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showRoomModal, setShowRoomModal] = useState(false);
  const [showAmenityAddModal, setShowAmenityAddModal] = useState(false);
  const [showRestricionAddModal, setShowRestrictionAddModal] = useState(false);
  const [showAmenityViewModal, setShowAmenityViewModal] = useState(false);
  const [showRestrictionsViewModal, setShowRestrictionsViewModal] =
    useState(false);
  let [showHomeDeleteModal, setShowHomeDeleteModal] = useState(false);
  const [showHomeEditModal, setShowHomeEditModal] = useState(false);
  const [showCreateOfferModal, setShowCreateOfferModal] = useState(false);

  const handleShowRoomModal = () => {
    setShowRoomModal(true);
  };

  const handleHomeDelete = () => {
    dispatch(deleteHome(home.id));
    setShowHomeDeleteModal(false);
    navigate("/properties/homes");
  };

  return (
    <div className={styles.container}>
      <PropertyDetailsHeader />
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={car?.image_url || homeImage}
            alt=""
          />
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.propertyDetails}>
            <div className={styles.propertyDetailsName}>
              <h2 className={styles.title}>{car?.property?.name}</h2>
              <p className={styles.subTitle}>{car?.property?.description}</p>
            </div>
            <div className={styles.propertyDetailsValues}>
              <div className={styles.propertyDetailsValuesColumn}>
                <div className={styles.dealPrice}>
                  <i className="fa-solid fa-house"></i> <p>{car?.model}</p>
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
                  {/* <p>
                    {homeProperty?.deal_infos?.length > 0
                      ? homeProperty?.deal_infos[0]?.price_per_duration
                      : "None"}
                  </p> */}
                </div>
                <div className={styles.dealType}>
                  <i className="fa-solid fa-filter"></i>
                  {/* {homeProperty?.deal_infos?.length > 0
                    ? homeProperty?.deal_infos[0]?.deal_type
                    : "None"} */}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyOptions}>
            <div className={styles.amenities}>
              <p
                onClick={() => setShowAmenityViewModal(true)}
                className={styles.propertyOptionsTitle}
              >
                Amenities
              </p>
            </div>
            <div className={styles.restrictions}>
              <p
                onClick={() => setShowRestrictionsViewModal(true)}
                className={styles.propertyOptionsTitle}
              >
                Restrictions
              </p>
            </div>
          </div>
          <div className={styles.propertyOptions}>
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
      </div>
    </div>
  );
}

export default CarDetailsCard;
