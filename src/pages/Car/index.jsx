import React, { useEffect } from "react";
import styles from "./car.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CarDetailsCard from "../../components/CarDetailsHeader";
import { getCar } from "../../data/CarsSlice";

function Car() {
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
      <CarDetailsCard car={car} />
      <div className={styles.listContainer}>{id}</div>
    </div>
  );
}

export default Car;
