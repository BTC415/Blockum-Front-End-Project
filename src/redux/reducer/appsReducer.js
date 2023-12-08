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
} from "../action/type";

const appReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case PROFILE:
      return {
        ...state,
        profile: payload,
      };
    case INTEREST:
      return {
        ...state,
        interest: payload,
      };
    case POSTS:
      return {
        ...state,
        posts: payload,
      };
    case HEADER_IMG:
      return {
        ...state,
        headerImg: payload,
      };
    case EMAIL_READ:
      return {
        ...state,
        fullEmail: payload,
      };
    case EMAIL_INBOX:
      return {
        ...state,
        emailInbox: payload,
      };
    case PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case PRODUCTS_ORDER:
      return {
        ...state,
        orderList: payload,
      };
    case INVOICE:
      return {
        ...state,
        invoiceData: payload,
      };
    case INVOICE_ITEMS:
      return {
        ...state,
        invoiceItems: payload,
      };
    case EDIT_INVOICE:
      return {
        ...state,
        invoiceData: payload,
      };
    case INVOICE_ITEMS_EDIT:
      return {
        ...state,
        invoiceItems: state.invoiceItems.map((table, i) =>
          i == payload.id ? payload.data : table
        ),
      };
    case ADD_INVOICE_ITEMS:
      return {
        ...state,
        invoiceItems: [payload, ...state.invoiceItems],
      };
    case DELETE_INVOICE:
      return {
        ...state,
        invoiceItems: state.invoiceItems.filter(
          (invoice, i) => i !== payload && invoice
        ),
      };
    case APP_CUSTOMER_LIST:
      return {
        ...state,
        customerList: payload,
      };
    case GET_POSTS:
      return {
        ...state,
        allPosts: payload,
      };
    case EDIT_POST:
      return {
        ...state,
        allPosts: state.allPosts.map((post, i) =>
          i === payload.id ? payload.data : post
        ),
      };
    default:
      return state;
  }
};
export default appReducer;
