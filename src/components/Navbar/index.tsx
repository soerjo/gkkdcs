import React from "react";
import { Avatar } from "@material-ui/core";
import styles from "./styles.module.scss";
import { capitelizeString, firstChar } from "../../utils/stringEdit";
import { IDataUser } from "../../interfaces/IDataUser";
import Logo from "../../assets/icons/logo.svg";

const dummyUser: IDataUser = {
  name: "soerjo hastomo",
  level: "admin",
  image: undefined,
};

const Navbar = ({ page, login }: { page: string; login: boolean }) => {
  const [size, setSize] = React.useState<number[]>([0, 0]);
  const user = {
    ...dummyUser,
    name: capitelizeString(dummyUser.name),
  };

  const updateSize = () => setSize([window.innerWidth, window.innerHeight]);

  React.useEffect(() => {
    window.addEventListener("resize", updateSize);
    // updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, [size]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <a href="/">
            <img src={Logo} alt="logoGkkdcs" />
            GKKD-CS
          </a>
        </h2>

        {size[0] > 720 &&
          (login ? (
            <div className={styles.user}>
              <Avatar
                alt={user.name}
                src={user.image && user.image}
                className={styles.avatar}
              >
                {!user.image && firstChar(user.name)}
              </Avatar>
              <div className={styles.detail}>
                <p className={styles.name}>{user.name}</p>
                <p className={styles.level}>{user.level}</p>
              </div>
            </div>
          ) : (
            <h3>Login</h3>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
