import {
  BASIC_TABLE,
  BORDER_TABLE,
  DELETE_BORDER_TABLE,
  DELETE_EXAM_TOPPERS,
  DELETE_PROFILE_TABLE,
  DELETE_RECENT_PAYMENT_QUEUE,
  DELETE_TABLE_STRIPPED,
  EDIT_BORDER_TABLE,
  EDIT_EXAM_TOPPERS,
  EDIT_PROFILE_TABLE,
  EDIT_RECENT_PAYMENT_QUEUE,
  EDIT_TABLE_STRIPPED,
  EXAM_TOPPERS,
  FEE_TABLE,
  GET_BS_TABLE,
  PATIENT_TABLE,
  PROFILE_TABLE,
  RECENT_PAYMENT_QUEUE,
  TABLE_STRIPPED,
} from "../action/type";

const tableReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case PROFILE_TABLE:
      return {
        ...state,
        profile: payload,
      };
    case FEE_TABLE:
      return {
        ...state,
        fees: payload,
      };
    case PATIENT_TABLE:
      return {
        ...state,
        patient: payload,
      };
    case BASIC_TABLE:
      return {
        ...state,
        basic: payload,
      };
    case DELETE_PROFILE_TABLE:
      return {
        ...state,
        profile: state.profile.filter((table, i) => i !== payload && table),
      };
    case EDIT_PROFILE_TABLE:
      return {
        ...state,
        profile: state.profile.map((table, i) =>
          i == payload.id ? payload.data : table
        ),
      };
    // bs table
    case GET_BS_TABLE:
      return {
        ...state,
        bsTables: payload,
      };
    case RECENT_PAYMENT_QUEUE:
      return {
        ...state,
        recentPayment: payload,
      };
    case EXAM_TOPPERS:
      return {
        ...state,
        examTopper: payload,
      };
    case BORDER_TABLE:
      return {
        ...state,
        borderTable: payload,
      };
    case TABLE_STRIPPED:
      return {
        ...state,
        tableStripped: payload,
      };
    case DELETE_RECENT_PAYMENT_QUEUE:
      return {
        ...state,
        recentPayment: state.recentPayment.filter(
          (table, i) => i !== payload && table
        ),
      };
    case DELETE_BORDER_TABLE:
      return {
        ...state,
        borderTable: state.borderTable.filter(
          (table, i) => i !== payload && table
        ),
      };
    case DELETE_TABLE_STRIPPED:
      return {
        ...state,
        tableStripped: state.tableStripped.filter(
          (table, i) => i !== payload && table
        ),
      };
    case DELETE_EXAM_TOPPERS:
      return {
        ...state,
        examTopper: state.examTopper.filter(
          (table, i) => i !== payload && table
        ),
      };
    case EDIT_RECENT_PAYMENT_QUEUE:
      return {
        ...state,
        recentPayment: state.recentPayment.map((table, i) =>
          i == payload.id ? payload.data : table
        ),
      };
    case EDIT_EXAM_TOPPERS:
      return {
        ...state,
        examTopper: state.examTopper.map((table, i) =>
          i == payload.id ? payload.data : table
        ),
      };
    case EDIT_BORDER_TABLE:
      return {
        ...state,
        borderTable: state.borderTable.map((table, i) =>
          i == payload.id ? payload.data : table
        ),
      };
    case EDIT_TABLE_STRIPPED:
      return {
        ...state,
        tableStripped: state.tableStripped.map((table, i) =>
          i == payload.id ? payload.data : table
        ),
      };
    default:
      return state;
  }
};
export default tableReducer;
