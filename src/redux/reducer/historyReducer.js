import { ADD_DEPOSIT, ADD_DISTRIBUTE, INIT_HISTORY } from '../action/type';

const initialState = {
  deposits: [],
  distributes: [],
};

const historyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_DEPOSIT:
      return {
        ...state,
        deposits: [payload, ...state.deposits],
      };
    case ADD_DISTRIBUTE:
      return {
        ...state,
        distributes: [payload, ...state.distributes],
      };
    case INIT_HISTORY:
      return { ...payload };
    default:
      return state;
  }
};
export default historyReducer;
