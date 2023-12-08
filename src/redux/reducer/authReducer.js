import { AUTH_ERROR, GET_USER } from "../action/type";

const authReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return {
        ...state,
        users: payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        authErrors: payload,
      };
    default:
      return state;
  }
};
export default authReducer;
