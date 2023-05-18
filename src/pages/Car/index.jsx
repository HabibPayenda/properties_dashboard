import React, { useEffect, useState } from "react";
import styles from "./car.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CarDetailsCard from "../../components/CarDetailsHeader";
import { getCar } from "../../data/CarsSlice";
import PropertyDetailsHeader from "../../components/PropertyDetailsHeader";
import FormModal from "../../components/FormModal";
import OfferCreate from "../../Forms/OfferCreate";
import ModalLink from "../../components/ModalLink";

function Car() {
  const [showCreateOfferModal, setShowCreateOfferModal] = useState(false);
  const { id } = useParams();
  const car = useSelector((state) => state.cars.showCar);
  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  console.log("car is :", car);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCar(id));
  }, []);

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <FormModal
        openModal={showCreateOfferModal}
        setOpenModal={setShowCreateOfferModal}
      >
        <OfferCreate
          deal_info_id={car?.deal_info?.id}
          property_id={car?.property?.id}
          home_id={0}
        />
      </FormModal>
      <PropertyDetailsHeader>
        <ModalLink
          title="Create Offer"
          onClick={() => setShowCreateOfferModal(true)}
        />
      </PropertyDetailsHeader>
      <CarDetailsCard car={car} />
      <div className={styles.listContainer}>{id}</div>
    </div>
  );
}

export default Car;
