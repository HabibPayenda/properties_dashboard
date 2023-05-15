import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../data/usersSlice";
import styles from "./user.module.css";
import UserDetailCard from "../../components/UserDetailCard";

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
      <div className={styles.userInfo}>
        <p>{user?.name}</p>
        <p>{user?.date_of_birth}</p>
        <p>{user?.gender}</p>
      </div>
      <div className={styles.userDetails}>
        <Link to="searches">
          <UserDetailCard
            title="Searches"
            count={user?.user_searches?.length}
          />
        </Link>
        <Link to="views">
          <UserDetailCard title="Views" count={user?.user_views?.length} />
        </Link>
        <Link to="favorites">
          <UserDetailCard
            title="Favorites"
            count={user?.user_favorites?.length}
          />
        </Link>
        <Link to="reviews">
          <UserDetailCard title="Reviews" count={user?.user_reviews?.length} />
        </Link>
        <UserDetailCard
          title="Addresses"
          count={user?.user_addresses?.length}
        />
        <UserDetailCard title="Contacts" count={user?.user_contact?.length} />
      </div>
    </div>
  );
}

export default User;
