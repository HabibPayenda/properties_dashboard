import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../data/usersSlice";
import styles from "./user.module.css";
import ItemsCard from "../../components/ItemsCard";
import PersonDetailsHeader from "../../components/PersonDetailsHeader";

function User() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.showUser);

  const isSidebarShown = useSelector(
    (state) => state.appManagement.isSidebarShown
  );

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  return (
    <div className={isSidebarShown ? styles.container : styles.containerClose}>
      <PersonDetailsHeader person={user} />
      <div className={styles.userDetails}>
        <ItemsCard
          to="searches"
          title="Searches"
          text="user searches"
          icon={<i className="fa-solid fa-magnifying-glass"></i>}
          total={user?.user_searches?.length}
        />

        <ItemsCard
          to="views"
          title="Views"
          text="user views"
          icon={<i className="fa-solid fa-eye"></i>}
          total={user?.user_views?.length}
        />
        <ItemsCard
          to="favorites"
          title="Favorites"
          text="user favorites"
          icon={<i className="fa-solid fa-heart"></i>}
          total={user?.user_favorites?.length}
        />
        <ItemsCard
          to="reviews"
          title="Reviews"
          text="user reviews"
          icon={<i className="fa-solid fa-star"></i>}
          total={user?.reviews?.length}
        />
      </div>
    </div>
  );
}

export default User;
