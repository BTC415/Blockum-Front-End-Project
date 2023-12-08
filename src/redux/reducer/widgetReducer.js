import { WIDGET_BASIC } from "../action/type";

const widgetReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case WIDGET_BASIC:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};
export default widgetReducer;
