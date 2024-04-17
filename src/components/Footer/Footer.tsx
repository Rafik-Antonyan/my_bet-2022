import React, { useContext, useState } from "react";
import * as images from "../../images";
import { CoinsContext } from "../../context/CoinsContext";
import { CoinType } from "../../types/CoinType";
import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  let { coin, setCoin, setActiveRotation } = useContext<CoinType>(CoinsContext);
  const [bet, setBet] = useState<number>(10);
  const [active, setActive] = useState<boolean>(true);
  const changeBet = (button: string): void => {
    if (button === "minus" && bet > 10) {
      setBet(bet - 10);
    } else if (button === "plus" && bet < 200) {
      setBet(bet + 10);
    } else if (button === "max") {
      setBet(200);
    }
  };

  const startRotatation = (): void => {
    setActiveRotation(true);
    setActive(false);
    setTimeout(() => {
      setActiveRotation(false);
      setActive(true);
    }, 10000);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footer_btn}>
        {!active ? (
          <img
            style={{ cursor: "not-allowed" }}
            src={images.default.ButtonAuto}
            alt="auto button"
          />
        ) : (
          <img
            onClick={() => setActive(false)}
            src={images.default.ButtonAutoActive}
            alt="auto button active"
          />
        )}
      </div>
      <div className={styles.footer_container}>
        <img src={images.default.TextBet} alt="bet text" />
        <h1>{bet}</h1>
        <img
          onClick={() => changeBet("minus")}
          src={images.default.ButtonMinus}
          alt="minus button"
        />
        <img
          onClick={() => changeBet("plus")}
          src={images.default.ButtonPlus}
          alt="plus button"
        />
        <img
          onClick={() => changeBet("max")}
          src={images.default.ButtonMax}
          alt="max button"
        />
      </div>
      <div className={styles.footer_btn}>
        {!active ? (
          <img
            style={{ cursor: "not-allowed" }}
            src={images.default.ButtonStart}
            alt="start button"
          />
        ) : (
          <img
            onClick={() => startRotatation()}
            src={images.default.ButtonStartActive}
            alt="start button active"
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
