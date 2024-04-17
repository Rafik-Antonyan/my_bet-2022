import React, { useContext, useEffect, useState } from "react";
import { getSymbols } from "../../Symbols";
import styles from "./styles.module.scss";
import { CoinsContext } from "../../context/CoinsContext";
import { CoinType } from "../../types/CoinType";
import { getLines } from "../../utils/GetLines";

const Game: React.FC = () => {
  const { activeRotation } = useContext<CoinType>(CoinsContext);
  const finalState: any[] = [];
  const [column1, setColumn1] = useState<any[]>([]);
  const [column2, setColumn2] = useState<any[]>([]);
  const [column3, setColumn3] = useState<any[]>([]);
  const [column4, setColumn4] = useState<any[]>([]);
  const [column5, setColumn5] = useState<any[]>([]);
  const [final, setFinal] = useState<boolean>(false);
  const symbols: any[] = [column1, column2, column3, column4, column5];

  useEffect(() => {
    if (activeRotation) {
      setFinal(false);

      setTimeout(() => {
        setFinal(true);
      }, 10000);

      setColumn1(getSymbols());
      setColumn2(getSymbols());
      setColumn3(getSymbols());
      setColumn4(getSymbols());
      setColumn5(getSymbols());
    }
  }, [activeRotation]);

  useEffect(() => {
    if (final) {
      symbols.map((symbol) => {
        finalState.push(symbol.slice(30));
        return symbol;
      });
      getLines(finalState);
    }
  }, [final]);

  return (
    <div className={styles.game}>
      <div className={styles.game_container}>
        {symbols.map((symbol: number[], index: number) => {
          return (
            <div className={styles.game_container_column} key={index}>
              {activeRotation &&
                symbol.map((eachSymbol: any, ind: number) => {
                  return (
                    <div
                      className={`${styles.game_container_column_row} ${styles.action}`}
                      key={ind}
                    >
                      <img src={eachSymbol.source} alt={eachSymbol.source} />
                    </div>
                  );
                })}
              {!activeRotation &&
                !final &&
                symbol.slice(0, 3).map((eachSymbol: any, ind: number) => {
                  return (
                    <div
                      className={`${styles.game_container_column_row}`}
                      key={ind}
                    >
                      <img src={eachSymbol.source} alt={eachSymbol.source} />
                    </div>
                  );
                })}
              {!activeRotation &&
                final &&
                symbol.slice(30).map((eachSymbol: any, ind: number) => {
                  return (
                    <div
                      className={`${styles.game_container_column_row}`}
                      key={ind}
                    >
                      <img src={eachSymbol.source} alt={eachSymbol.source} />
                      <h1 style={{ color: "red", fontSize: "40px" }}>{ind}</h1>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Game;
