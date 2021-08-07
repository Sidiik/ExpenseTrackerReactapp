import React, { useState, useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalState";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { dispatch } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TRANSACTION",
      trans: {
        text,
        amount: +amount,
      },
    });
    setText("");
    setAmount("");
  };

  return (
    <div className="add" onSubmit={onSubmit}>
      <h4 className="text-primary">Add new Transactions</h4>
      <form>
        <div className="form-group">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="form-control"
            placeholder="Transaction text"
          />
        </div>
        <div className="form-group mt-2">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            className="form-control"
            placeholder="Amount"
          />
        </div>
        <div className="form-group mt-2 mb-3">
          <button className="btn-primary btn w-100">Add transaction</button>
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
