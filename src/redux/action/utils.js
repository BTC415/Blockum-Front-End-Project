import axios from 'axios';
import moment from 'moment';
import {
  ADD_NOTE,
  ADD_USER,
  CHAT_BOX,
  CHAT_LISTS,
  DELETE_NOTE,
  EDIT_NOTE,
  MSG_BOX,
  NOTES,
  PAGE_TITLE,
  SEARCH_DATA,
  SEND_MSG,
} from './type';

export const pageTitle = (title) => (dispatch) => {
  dispatch({
    type: PAGE_TITLE,
    payload: title,
  });
};

// Resize window
export const resizeWindow = () => {
  const body = document.querySelector('body');
  window.innerWidth >= 768 && window.innerWidth < 1024
    ? body.setAttribute('data-sidebar-style', 'mini')
    : window.innerWidth <= 768
    ? body.setAttribute('data-sidebar-style', 'overlay')
    : body.setAttribute('data-sidebar-style', 'full');
};

//  Body attributes
export const bodyArt = () => {
  const body = document.querySelector('body');
  body.setAttribute('data-typography', 'poppins');
  body.setAttribute('data-theme-version', 'light');
  body.setAttribute('data-layout', 'horizontal');
  body.setAttribute('data-nav-headerbg', 'color_14');
  body.setAttribute('data-headerbg', 'color_14');
  body.setAttribute('data-sidebar-style', 'mini');
  body.setAttribute('data-sibebarbg', 'color_1');
  body.setAttribute('data-primary', 'color_14');
  body.setAttribute('data-sidebar-position', 'static');
  body.setAttribute('data-header-position', 'static');
  body.setAttribute('data-container', 'full');
  body.setAttribute('direction', 'ltr');
};

// preloader
export const preloaderAction = () => {
  window.addEventListener('load', () => {
    document.querySelector('#main-wrapper').classList.add('show');
    document.querySelector('#preloader').style.display = 'none';
  });
};

// dark and light mood
export const moodChange = () => {
  const path = window.location.pathname;
  const body = document.querySelector('body');
  if (path.includes('dark')) {
    body.setAttribute('data-theme-version', 'dark');
  } else {
    body.setAttribute('data-theme-version', 'light');
  }
};

export const sideBarActive = (doc) => {
  let active = doc ? document.querySelectorAll('.mm-collapse a') : [];
  for (let i = 0; i < active.length; i++) {
    const element = active[i];
    if (element.href) {
      if (element.href !== window.location.href) {
        element.classList.remove('mm-active');
        console.log('not match', element.href);
      } else {
        element.classList.add('mm-active');
        element.parentElement.classList.add('mm-active');
        element.parentElement.parentElement.classList.add('mm-show');
        element.parentElement.parentElement.parentElement.classList.add(
          'mm-active'
        );
        element.parentElement.parentElement.parentElement.parentElement.classList.add(
          'mm-show'
        );
        element.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add(
          'mm-active'
        );

        console.log('match', element.href);
      }
    }

    if (window.location.pathname == '/widget-basic') {
    } else {
      document.querySelector('#widget-basic').classList.remove('mm-active');
    }
  }
};

// ChatBox
export const chatBox = (value) => (dispatch) => {
  dispatch({
    type: CHAT_BOX,
    payload: value,
  });
};

export const getHeaderData = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'https://api.npoint.io/fbc14eee7441f3b8877b/header/'
    );
    dispatch({
      type: CHAT_LISTS,
      payload: res.data.chatLists,
    });
    dispatch({
      type: MSG_BOX,
      payload: res.data.msgBox,
    });
    dispatch({
      type: SEARCH_DATA,
      payload: res.data.searchData,
    });
    dispatch({
      type: NOTES,
      payload: res.data.notes,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addNote = (note) => (dispatch) => {
  const newNote = { title: note, date: moment().format('D MMMM YYYY') };
  dispatch({
    type: ADD_NOTE,
    payload: newNote,
  });
};
export const editNote = (note) => (dispatch) => {
  console.log(note);
  dispatch({
    type: EDIT_NOTE,
    payload: note,
  });
};

export const deleteNote = (id) => (dispatch) => {
  dispatch({
    type: DELETE_NOTE,
    payload: id,
  });
};

export const sentMsg = (msg) => (dispatch) => {
  let time = new Date()
    .toLocaleDateString([], { hour: '2-digit', minute: '2-digit' })
    .split(' ')[1];
  let newMsg = {
    img: '/images/avatar/2.jpg',
    name: 'me',
    msg,
    time: `${time}, Today`,
  };

  dispatch({
    type: SEND_MSG,
    payload: newMsg,
  });
};

export const addUser = (userInfo) => (dispatch) => {
  dispatch({
    type: ADD_USER,
    payload: userInfo,
  });
};
