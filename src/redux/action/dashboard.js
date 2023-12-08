import axios from "axios";
import moment from "moment";
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
} from "./type";

export const getDashboardData = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.npoint.io/fbc14eee7441f3b8877b/dashboard/indexPage`
    );
    //  Charts
    dispatch({
      type: DAILY_TARGET_CHART,
      payload: res.data.charts.dailyTargetChart,
    });
    dispatch({
      type: ORDER_CHART,
      payload: res.data.charts.widget1,
    });
    dispatch({
      type: CUSTOMER_CHART,
      payload: res.data.charts.widget2,
    });
    dispatch({
      type: MENU_CHART,
      payload: res.data.charts.widget3,
    });
    dispatch({
      type: CUSTOMER_MAP_CHART,
      payload: res.data.charts.customerMap,
    });
    //     data
    dispatch({
      type: ORDER_REQUEST,
      payload: res.data.recentOrderRequest,
    });
    dispatch({
      type: TRANDING_MENU,
      payload: res.data.trendingMenus,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getorderListPage = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.npoint.io/fbc14eee7441f3b8877b/dashboard/orderListPage"
    );
    dispatch({
      type: ORDERS_LIST,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getOrderDetailPage = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.npoint.io/fbc14eee7441f3b8877b/dashboard/orderDetail"
    );
    dispatch({
      type: ORDER_DETAILS,
      payload: res.data,
    });
    dispatch({
      type: ORDER_DETAILS_ITEMS,
      payload: res.data.items.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteOrderDetailsItem = (id) => (dispatch) => {
  dispatch({
    type: DELETE_ORDER_DETAILS,
    payload: id,
  });
};

export const getCustomerList = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.npoint.io/fbc14eee7441f3b8877b/dashboard/customers"
    );
    dispatch({
      type: CUSTOMER_LIST,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addCustomer = (data) => (dispatch) => {
  const newCustomer = {
    location: data.address,
    CustomerName: data.firstName + " " + data.lastName,
    orderId: Math.round(Math.random() * 10000000),
    date: moment().format("D MMMM YYYY, h:mm:ss a"),
    lastOrder: data.lastOrder,
    totalSpent: data.totalSpent,
  };
  dispatch({
    type: ADD_CUSTOMER_LIST,
    payload: newCustomer,
  });
};

export const getAnalytic = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.npoint.io/fbc14eee7441f3b8877b/dashboard/analytics"
    );
    dispatch({
      type: ANALYTICS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const getReviews = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.npoint.io/fbc14eee7441f3b8877b/dashboard/reviews"
    );
    dispatch({
      type: REVIEWS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
