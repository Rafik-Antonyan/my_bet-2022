import { createContext } from "react";
import { CoinType } from "../types/CoinType";

export const CoinsContext = createContext<CoinType>({} as CoinType)