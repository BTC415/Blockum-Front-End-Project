import axios from 'axios';
import { ADD_DEPOSIT, NOTIFICATION, NOTIFICATION_2, WALLET_CONNECT } from './type';

export const notificationFun = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'https://api.npoint.io/fbc14eee7441f3b8877b/header/notification'
    );
    dispatch({
      type: NOTIFICATION,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const notificationFun2 = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'https://api.npoint.io/fbc14eee7441f3b8877b/header/notification2'
    );
    dispatch({
      type: NOTIFICATION_2,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const walletConnect = () => async (dispatch) => {
  try {
    dispatch({
      type: WALLET_CONNECT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
