import React, { useEffect } from "react";
import styles from "./home.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "../../data/homeSlice";
import PropertyDetailsCard from "../../components/PropertyDetailsCard";
import HomesSlider from "../../Sliders/HomesSlider";

function Home() {
  const { id } = useParams();
  const home = useSelector((state) => state.homes.showHome);
  const dispatch = useDispatch();

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  useEffect(() => {
    dispatch(getHome(id));
  }, []);

  console.log("home", home);
  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <div className={styles.listContainer}>
        <PropertyDetailsCard home={home} />

        <HomesSlider home={home} />
      </div>
    </div>
  );
}

export default Home;
