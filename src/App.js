import React from "react";
import Transactions from "./Components/Transactions";
import { GlobalProvider } from "./Contexts/GlobalState";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Transactions />
      </div>
    </div>
  );
}

export default App;
