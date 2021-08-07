import React, { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalState";

function Transaction({ trans }) {
  const sign = trans.amount < 0 ? "-" : "+";
  const { dispatch, deleteTransaction } = useContext(GlobalContext);
  return (
    <div className={sign == "+" ? "trans-item plus" : "trans-item minus"}>
      <li>
        <div className="itemInfo">
          <div className="text">{trans.text}</div>
          <div className="actions">
            <div className="text">
              {sign}${Math.abs(trans.amount)}
            </div>
            <div className="remove" onClick={() => deleteTransaction(trans.id)}>
              &times;
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Transaction;
