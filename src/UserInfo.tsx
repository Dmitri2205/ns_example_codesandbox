import React from "react";
import { IUserInfoProps } from "./App";
import styles from "./styles/styles.module.scss";

const UserInfo = ({ user }: IUserInfoProps) => {
  return (
    <>
      {user ? (
        <table className={styles.user_table}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.phone}</td>
            </tr>
          </tbody>
        </table>
      ) : user === undefined ? (
        <p>Seems, there is some error...</p>
      ) : (
        <p>Seems, there is no user yet...</p>
      )}
    </>
  );
};

export default UserInfo;
