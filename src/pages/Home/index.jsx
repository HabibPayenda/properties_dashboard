import React, { useEffect } from "react";
import styles from "./home.module.css";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHome, getHomeProperty } from "../../data/homeSlice";
import PropertyDetailsCard from "../../components/PropertyDetailsCard";
import HomesSlider from "../../Sliders/HomesSlider";

function Home() {
  const { id } = useParams();
  const location = useLocation();
  const home = useSelector((state) => state.homes.showHome);
  const homeProperty = useSelector((state) => state.homes.homeProperty);

  const dispatch = useDispatch();

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  useEffect(() => {
    dispatch(getHome(id));
    dispatch(getHomeProperty(location.state.property_id));
  }, [dispatch]);

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <div className={styles.listContainer}>
        <PropertyDetailsCard home={home} homeProperty={homeProperty} />

        <HomesSlider home={home} />
      </div>
    </div>
  );
}

export default Home;
