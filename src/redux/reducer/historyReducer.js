import { ADD_DEPOSIT, ADD_DISTRIBUTE } from "../action/type";

const initialState = {
  deposites: [],
  distributes: [],
};

const historyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_DEPOSIT:
      return {
        ...state,
        deposites: [...state.deposites, payload],
      };
    case ADD_DISTRIBUTE:
      return {
        ...state,
        distributes: [...state.distributes, payload],
      };
    default:
      return state;
  }
};
export default historyReducer;
