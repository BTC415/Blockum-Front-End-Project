import {
  ADD_CUSTOMER_LIST,
  ANALYTICS,
  CUSTOMER_CHART,
  CUSTOMER_LIST,
  CUSTOMER_MAP_CHART,
  DAILY_TARGET_CHART,
  DELETE_ORDER_DETAILS,
  MENU_CHART,
  ORDERS_LIST,
  ORDER_CHART,
  ORDER_DETAILS,
  ORDER_DETAILS_ITEMS,
  ORDER_REQUEST,
  REVIEWS,
  TRANDING_MENU,
} from "../action/type";

const dashBoardReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case DAILY_TARGET_CHART:
      return {
        ...state,
        dailyTargetChart: payload,
      };
    case ORDER_CHART:
      return {
        ...state,
        orderChart: payload,
      };
    case CUSTOMER_CHART:
      return {
        ...state,
        customerChart: payload,
      };
    case MENU_CHART:
      return {
        ...state,
        menuChart: payload,
      };
    case CUSTOMER_MAP_CHART:
      return {
        ...state,
        customerMapChart: payload,
      };
    case TRANDING_MENU:
      return {
        ...state,
        trendingMenu: payload,
      };
    case ORDER_REQUEST:
      return {
        ...state,
        orderRequest: payload,
      };
    case ORDERS_LIST:
      return {
        ...state,
        ordersList: payload,
      };
    case ORDER_DETAILS:
      return {
        ...state,
        orderDetail: payload,
      };
    case ORDER_DETAILS_ITEMS:
      return {
        ...state,
        orderDetailItems: payload,
      };
    case DELETE_ORDER_DETAILS:
      return {
        ...state,
        orderDetailItems: state.orderDetailItems.filter(
          (order, i) => i !== payload && order
        ),
      };
    case CUSTOMER_LIST:
      return {
        ...state,
        customerList: payload,
      };
    case ADD_CUSTOMER_LIST:
      return {
        ...state,
        customerList: [payload, ...state.customerList],
      };
    case ANALYTICS:
      return {
        ...state,
        analytics: payload,
      };
    case REVIEWS:
      return {
        ...state,
        reviews: payload,
      };
    default:
      return state;
  }
};
export default dashBoardReducer;
