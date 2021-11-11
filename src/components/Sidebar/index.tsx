import React from "react";
import styles from "./styles.module.scss";
import { routes } from "../../config/routes";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>sidebar</h1>
      {routes.map((route, index) => (
        <div key={index} className={styles.menu}>
          <p>{route.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
