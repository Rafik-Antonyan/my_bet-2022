import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { CoinsContext } from "./context/CoinsContext";
import Footer from "./components/Footer/Footer";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
  const [coin, setCoin] = useState<number>(1000);
  let x = 2;
  function dec() {
    x = x - x ? 1 : 0;
  }
  
  const [activeRotation, setActiveRotation] = useState<boolean>(false);
  return (
    <div style={{ height: "100vh" }}>
      <CoinsContext.Provider
        value={{ coin, setCoin, activeRotation, setActiveRotation }}
      >
        <Header />
        <button onClick={dec}>-</button>
        {x}
        <MainContainer />
        <Footer />
      </CoinsContext.Provider>
    </div>
  );
}

export default App;
