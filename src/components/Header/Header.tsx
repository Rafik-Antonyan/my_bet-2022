import React, { useContext } from "react";
import * as images from "../../images";
import styles from "./styles.module.scss";
import { CoinsContext } from "../../context/CoinsContext";
import { CoinType } from "../../types/CoinType";

const Header = () => {
  const { coin } = useContext<CoinType>(CoinsContext);

  return (
    <div className={styles.header}>
      <img src={images.default.Logo} alt="logo" />
      <div className={styles.header_container}>
        <h1>{coin}</h1>
        <img src={images.default.Coins} alt="coins" />
      </div>
    </div>
  );
};

export default Header;
