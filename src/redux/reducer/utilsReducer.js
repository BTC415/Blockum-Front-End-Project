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
} from "../action/type";

const utilsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case PAGE_TITLE:
      return {
        ...state,
        pageTitle: payload,
      };
    case CHAT_BOX:
      return {
        ...state,
        chatBox: payload,
      };
    case CHAT_LISTS:
      return {
        ...state,
        chatLists: payload,
      };
    case MSG_BOX:
      return {
        ...state,
        msgBox: payload,
      };
    case SEND_MSG:
      return {
        ...state,
        msgBox: [...state.msgBox, payload],
      };
    case ADD_USER:
      return {
        ...state,
        chatLists: [payload, ...state.chatLists],
      };
    case SEARCH_DATA:
      return {
        ...state,
        searchData: payload,
      };
    case NOTES:
      return {
        ...state,
        notes: payload,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [payload, ...state.notes],
      };
    case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note, i) =>
          i !== payload.id ? note : payload.note
        ),
      };

    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note, i) => i !== payload && note),
      };

    default:
      return state;
  }
};
export default utilsReducer;
