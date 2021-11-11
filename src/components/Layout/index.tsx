import React from "react";
import Navbar from "../Navbar";
import styles from "./layout.module.scss";

export interface ILayout {
  page?: string;
  login?: boolean;
}

const Layout: React.FC<ILayout> = ({
  children,
  page = "dasboard",
  login = false,
}) => {
  return (
    <>
      <Navbar page={page} login={login} />
      <div className={styles.content}>{children}</div>
    </>
  );
};

export default Layout;
