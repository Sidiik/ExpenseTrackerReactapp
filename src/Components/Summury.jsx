import React, { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalState";

function Summury() {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((trans) => trans.amount);

  console.log(amount);

  const incomes = amount.filter((income) => income > 0);
  const totalIncome = incomes
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(0);
  const expenses = amount.filter((income) => income < 0);
  const totalExpense = expenses
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(0);
  return (
    <div className="smry mt-4">
      <div className="income">
        <h6 className="">INCOME</h6>
        <h4 className="text-success ">{totalIncome}</h4>
      </div>
      <div className="income">
        <h6 className="">Expense</h6>
        <h4 className="text-danger ">{totalExpense}</h4>
      </div>
    </div>
  );
}

export default Summury;
