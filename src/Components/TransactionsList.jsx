import React, { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalState";
import Transaction from "./Transaction";

function TransactionsList() {
  const { transactions, deleteTrans } = useContext(GlobalContext);
  return (
    <div className="trans-list mt-4">
      <div className="title">History</div>
      <ul className="list">
        {transactions.map((trans) => (
          <Transaction trans={trans} key={trans.id} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionsList;
