import axios from "axios";
import {
  ADD_INVOICE_ITEMS,
  APP_CUSTOMER_LIST,
  DELETE_INVOICE,
  EDIT_INVOICE,
  EDIT_POST,
  EMAIL_INBOX,
  EMAIL_READ,
  GET_POSTS,
  HEADER_IMG,
  INTEREST,
  INVOICE,
  INVOICE_ITEMS,
  INVOICE_ITEMS_EDIT,
  POSTS,
  PRODUCTS,
  PRODUCTS_ORDER,
  PROFILE,
} from "./type";
export const getProfileData = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.npoint.io/fbc14eee7441f3b8877b/apps"
    );
    const data = res.data;
    dispatch({
      type: PROFILE,
      payload: data.profile,
    });
    dispatch({
      type: INTEREST,
      payload: data.interest,
    });
    dispatch({
      type: POSTS,
      payload: data.posts,
    });
    dispatch({
      type: HEADER_IMG,
      payload: data.headerImg,
    });
  } catch (err) {
    console.log(err);
  }
};
export const emailRead = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.npoint.io/fbc14eee7441f3b8877b/apps/emails/fullEmail"
    );
    dispatch({
      type: EMAIL_READ,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const emailInbox = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.npoint.io/fbc14eee7441f3b8877b/apps/emails/emailShortList"
    );
    dispatch({
      type: EMAIL_INBOX,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const allProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.npoint.io/fbc14eee7441f3b8877b/apps/shop/products"
    );
    dispatch({
      type: PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const allOrder = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.npoint.io/fbc14eee7441f3b8877b/apps/shop/orders"
    );
    dispatch({
      type: PRODUCTS_ORDER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const invoiceData = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.npoint.io/fbc14eee7441f3b8877b/apps/shop/invoice"
    );
    dispatch({
      type: INVOICE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getInvoiceItems = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.npoint.io/fbc14eee7441f3b8877b/apps/shop/invoice/items"
    );
    dispatch({
      type: INVOICE_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const editInvoiceData = (data) => (dispatch) => {
  dispatch({
    type: EDIT_INVOICE,
    payload: data,
  });
};
export const editInvoiceItem = (data) => (dispatch) => {
  dispatch({
    type: INVOICE_ITEMS_EDIT,
    payload: data,
  });
};
export const addInvoiceItem = (data) => (dispatch) => {
  dispatch({
    type: ADD_INVOICE_ITEMS,
    payload: data,
  });
};
export const deleteInvoiceItem = (data) => (dispatch) => {
  dispatch({
    type: DELETE_INVOICE,
    payload: data,
  });
};

export const getCustomers = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.npoint.io/fbc14eee7441f3b8877b/apps/shop/customerList"
    );
    dispatch({
      type: APP_CUSTOMER_LIST,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllPost = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.npoint.io/fbc14eee7441f3b8877b/apps/posts/data"
    );
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const editPost = (data) => (dispatch) => {
  dispatch({
    type: EDIT_POST,
    payload: data,
  });
};
