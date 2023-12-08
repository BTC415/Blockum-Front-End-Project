import { auth } from "../../firebaseConfig";
import { AUTH_ERROR, GET_USER } from "./type";

const currentUser = (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: GET_USER,
        payload: user.providerData[0],
      });
    } else {
      dispatch({
        type: GET_USER,
        payload: null,
      });
      dispatch({
        type: AUTH_ERROR,
        payload: null,
      });
    }
  });
};

export const getUser = () => (dispatch) => {
  currentUser(dispatch);
};

export const registerUser = (userData) => (dispatch) => {
  const { email, password, username } = userData;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      auth.currentUser.updateProfile({
        displayName: username,
      });
      dispatch({
        type: AUTH_ERROR,
        payload: {
          msg: "Register successfully completed",
          auth: true,
        },
      });
      currentUser(dispatch);
    })
    .catch((error) => {
      dispatch({
        type: AUTH_ERROR,
        payload: { msg: error.message, auth: false },
      });
    });
};

export const loginUser = (userData) => (dispatch) => {
  const { email, password } = userData;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      dispatch({
        type: AUTH_ERROR,
        payload: {
          msg: "Login successfully completed",
          auth: true,
        },
      });
      currentUser(dispatch);
    })
    .catch((error) => {
      dispatch({
        type: AUTH_ERROR,
        payload: { msg: error.message, auth: false },
      });
    });
};

export const logoutUser = () => (dispatch) => {
  auth
    .signOut()
    .then(() => {
      currentUser(dispatch);
    })
    .catch((error) => {
      // An error happened.
    });
};
