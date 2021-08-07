import React, { createContext, useReducer } from "react";
import { AppReducer } from "./Reducers/AppReducer";

export const GlobalContext = createContext();

// provider

export const GlobalProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(AppReducer, []);

  // actions

  const deleteTransaction = (id) => {
    dispatch({ type: "REMOVE_TRANSACTION", id: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions,
        dispatch,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
