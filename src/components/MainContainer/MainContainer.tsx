import React from "react";
import styles from "./styles.module.scss";
import Game from "../Game/Game";

const MainContainer: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContainer_container}>
        <Game />
      </div>
    </div>
  );
};

export default MainContainer;
