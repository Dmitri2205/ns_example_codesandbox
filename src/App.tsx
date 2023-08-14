import React, { useState } from "react";
import useThrottle from "./useThrottle";
import Button from "./Button";
import UserInfo from "./UserInfo";
import styles from "./styles/styles.module.scss";

const URL = "https://jsonplaceholder.typicode.com/users";

type Company = {
  bs: string;
  catchPhrase: string;
  name: string;
};

export type TUser = {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: Company;
  address: any;
};

export interface IUserInfoProps {
  user: TUser;
}

function App(): JSX.Element {
  const [item, setItem] = useState<TUser | number | undefined | null>(null);
  const [cachedUsers, setCachedUsers] = useState<Array<TUser>>([]);

  const receiveRandomUser = () => {
    const randomId = Math.floor(Math.random() * (10 - 1)) + 1;
    const isCached = cachedUsers.find(({ id }: TUser) => id === randomId);
    if (isCached) {
      return setItem(isCached);
    } else {
      fetch(`${URL}/${randomId}`)
        .then((response) => response.json())
        .then((user: TUser) => {
          setCachedUsers((prevCachedUsers) => [...prevCachedUsers, user]);
          setItem(user);
        })
        .catch((error) => {
          setItem(undefined);
          alert(error.message);
        });
    }
  };

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    receiveRandomUser();
  };

  return (
    <div className={styles.get_user_wrapper}>
      <header className={styles.header}>Get a random user</header>
      <Button clickCallback={useThrottle(handleButtonClick, 1000)} />
      <UserInfo user={item as TUser} />
    </div>
  );
}

export default App;
