import React, { useContext } from "react";
import { GlobalContext, GlobalProvider } from "../Contexts/GlobalState";
import Header from "./Header";
import Summury from "./Summury";
import TransactionsList from "./TransactionsList";
import AddTransaction from "./addTransaction";

function Transactions() {
  return (
    <div className="transactions">
      <GlobalProvider>
        <Header />
        <Summury />
        <TransactionsList />

        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default Transactions;
