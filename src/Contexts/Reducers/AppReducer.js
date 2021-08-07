export const AppReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_TRANSACTION":
      return state.filter((trans) => trans.id !== action.id);
    case "ADD_TRANSACTION":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 100000),
          text: action.trans.text,
          amount: action.trans.amount,
        },
      ];
  }
};
