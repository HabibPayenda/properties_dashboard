import React, { useEffect } from "react";
import styles from "./home.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "../../data/homeSlice";
import SectionHeader from "../../components/SectionHeader";
import HomeHeader from "../../components/HomeHeader";
import HomeRoomCreate from "../../Forms/HomeRoomCreate";

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
        <SectionHeader title="Home" />
        <div style={{ flex: 9, width: "100%" }}>
          <HomeHeader
            id={home?.id}
            name={home?.property?.name}
            agent_id={home?.property?.agent_id}
            owner={home?.owner_name}
            property_manager_id={home?.property?.property_manager_id}
            rooms={home?.home_rooms?.length}
          />
        </div>
      </div>
      <div className={styles.addNewContainer}>
        <HomeRoomCreate id={id} />
      </div>
    </div>
  );
}

export default Home;
