import React, { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalState";

function Header() {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((trans) => trans.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  console.log(amount);
  return (
    <div className="header">
      <p>Your balance</p>
      <h2>${total}</h2>
    </div>
  );
}

export default Header;
