import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./offers.module.css";
import SectionHeader from "../../components/SectionHeader";
import ItemsCard from "../../components/ItemsCard";
import { getAllOffers } from "../../data/offersSlice";

function Offers() {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers.offers);
  console.log(offers);

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  useEffect(() => {
    dispatch(getAllOffers());
  }, []);

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <SectionHeader
        title="Offers"
        text="Unbeatable Property Offers: Your Guide to Finding Your Dream Home at a Great Price"
      />
      <div className={styles.contentContainer}>
        <ItemsCard
          title="Homes Offers"
          text="Unbeatable Homes Offers"
          icon={<i className="fa-solid fa-house"></i>}
          to="homes"
          total={offers?.home_offers?.length}
        />
        <ItemsCard
          title="Cars Offers"
          text="Unbeatable Cars Offers"
          icon={<i className="fa-solid fa-car"></i>}
          to="/properties/homes"
          total={offers?.car_offers?.length}
        />
        <ItemsCard
          title="Warehouses Offers"
          text="Unbeatable Warehouses Offers"
          icon={<i className="fa-solid fa-building-columns"></i>}
          to="/properties/homes"
          total={offers?.warehouse_offers?.length}
        />
        <ItemsCard
          title="Lands Offers"
          text="Unbeatable Lands Offers"
          icon={<i className="fa-solid fa-mountain-sun"></i>}
          to="/properties/homes"
          total={offers?.land_offers?.length}
        />
      </div>
    </div>
  );
}

export default Offers;
