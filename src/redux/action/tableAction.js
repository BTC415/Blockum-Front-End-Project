import axios from "axios";
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
} from "./type";

export const getTableData = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.npoint.io/fbc14eee7441f3b8877b/tables/dataTable`
    );
    dispatch({
      type: BASIC_TABLE,
      payload: res.data.basic,
    });
    dispatch({
      type: PROFILE_TABLE,
      payload: res.data.profile,
    });
    dispatch({
      type: FEE_TABLE,
      payload: res.data.fees,
    });
    dispatch({
      type: PATIENT_TABLE,
      payload: res.data.patient,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteProfileTable = (id) => (dispatch) => {
 
  dispatch({
    type: DELETE_PROFILE_TABLE,
    payload: id,
  });
};

export const editProfileTable = (data) => (dispatch) => {
  dispatch({
    type: EDIT_PROFILE_TABLE,
    payload: data,
  });
};

// bs table
export const getBsTableData = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.npoint.io/fbc14eee7441f3b8877b/tables/bsTable"
    );
    dispatch({
      type: GET_BS_TABLE,
      payload: res.data,
    });
    dispatch({
      type: RECENT_PAYMENT_QUEUE,
      payload: res.data.recentPaymentsQueue,
    });
    dispatch({
      type: EXAM_TOPPERS,
      payload: res.data.examToppers,
    });
    dispatch({
      type: BORDER_TABLE,
      payload: res.data.borderedTable,
    });
    dispatch({
      type: TABLE_STRIPPED,
      payload: res.data.tableStripped,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteRecentPayment = (id) => (dispatch) => {
  dispatch({
    type: DELETE_RECENT_PAYMENT_QUEUE,
    payload: id,
  });
};
export const deleteExamToppers = (id) => (dispatch) => {
  dispatch({
    type: DELETE_EXAM_TOPPERS,
    payload: id,
  });
};
export const deleteBorderTable = (id) => (dispatch) => {
  dispatch({
    type: DELETE_BORDER_TABLE,
    payload: id,
  });
};
export const deleteStrippedTable = (id) => (dispatch) => {
  dispatch({
    type: DELETE_TABLE_STRIPPED,
    payload: id,
  });
};

//  Edit
export const editRecentPaymentQueue = (data) => (dispatch) => {
  dispatch({ type: EDIT_RECENT_PAYMENT_QUEUE, payload: data });
};
export const editExamToppers = (data) => (dispatch) => {
  dispatch({ type: EDIT_EXAM_TOPPERS, payload: data });
};
export const editBorderTable = (data) => (dispatch) => {
  dispatch({ type: EDIT_BORDER_TABLE, payload: data });
};
export const editTableStripped = (data) => (dispatch) => {
  dispatch({ type: EDIT_TABLE_STRIPPED, payload: data });
};
