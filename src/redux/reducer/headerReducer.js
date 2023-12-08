import { NOTIFICATION, NOTIFICATION_2 } from "../action/type";

const headerReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case NOTIFICATION:
      return {
        ...state,
        notification: payload,
      };
    case NOTIFICATION_2:
      return {
        ...state,
        notification_2: payload,
      };
    default:
      return state;
  }
};

export default headerReducer;
