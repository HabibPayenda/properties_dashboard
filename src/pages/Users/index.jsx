import React, { useEffect } from "react";
import SectionHeader from "../../components/SectionHeader";
import styles from "./users.module.css";
import UserCreate from "../../Forms/UserCreate";
import { useDispatch, useSelector } from "react-redux";
import UsersTable from "../../tables/UsersTable";
import { getAllUsers } from "../../data/usersSlice";

function Users() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <SectionHeader title="Users" />
        <div style={{ flex: 9, width: "100%" }}>
          {users.length < 1 ? <p>No users yet</p> : <UsersTable />}
        </div>
      </div>
      <div className={styles.addNew}>
        <UserCreate />
      </div>
    </div>
  );
}

export default Users;
