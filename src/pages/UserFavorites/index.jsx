import React from "react";
import styles from "./userFavorites.module.css";
import SectionHeader from "../../components/SectionHeader";
import { useSelector } from "react-redux";
import UserFavoritesTable from "../../tables/UserFavoritesTable";

function UserFavorites() {
  const user = useSelector((state) => state.users.showUser);
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <SectionHeader title="User Favorites" />
        <div style={{ flex: 9, width: "100%" }}>
          {user?.user_favorites?.length < 1 && (
            <p>This user has not added anything to favorites yet</p>
          )}
          <UserFavoritesTable />
        </div>
      </div>
      <div className={styles.addNew}>Graph</div>
    </div>
  );
}

export default UserFavorites;
