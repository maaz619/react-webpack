import React, { useState } from "react";

const App = () => {
  const [timer, setTimer] = useState("");
  const ticToc = () => {
    let date = new Date().toLocaleTimeString();
    setTimer(date);
  };
  setInterval(() => {
    ticToc();
  }, 1000);
  return <h1>{timer}</h1>;
};

export default App;
