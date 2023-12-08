import {
  CONTAINER_LAYOUT,
  DEMO,
  DIRACTION,
  HEADER_BG,
  HEADER_POSITION,
  LAYOUT,
  NAV_HEADER_BG,
  PRIMARY,
  SIDEBAR_BG,
  SIDEBAR_POSITION,
  SIDEBAR_STYLE,
  TYPOGRAPHY,
  VERSION,
} from "../action/type";

const initialValue = {
  activeDemo: 1,
  demos: [
    { id: 1, name: "demo 1", image: "/images/demo/pic1.png" },
    { id: 2, name: "demo 2", image: "/images/demo/pic2.png" },
    { id: 3, name: "demo 3", image: "/images/demo/pic3.png" },
    { id: 4, name: "demo 4", image: "/images/demo/pic4.png" },
    { id: 5, name: "demo 5", image: "/images/demo/pic5.png" },
    { id: 6, name: "demo 6", image: "/images/demo/pic6.png" },
    { id: 7, name: "demo 7", image: "/images/demo/pic7.png" },
    { id: 8, name: "demo 8", image: "/images/demo/pic8.png" },
    { id: 9, name: "demo 9", image: "/images/demo/pic9.png" },
    { id: 10, name: "demo 10", image: "/images/demo/pic10.png" },
    { id: 11, name: "demo 11", image: "/images/demo/pic11.png" },
  ],
  typography: "poppins",
  version: "light",
  layout: "vertical",
  primary: "color_1",
  headerBg: "color_1",
  navheaderBg: "color_12",
  sidebarBg: "color_12",
  sidebarStyle: "full",
  sidebarPosition: "fixed",
  headerPosition: "fixed",
  containerLayout: "full",
  direction: "ltr",
};
const demoReducer = (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case DEMO:
      return {
        ...state,
        activeDemo: payload,
      };

    // Theme option
    // verstion
    case VERSION:
      return {
        ...state,
        version: payload,
      };

    // Primary
    case PRIMARY:
      return {
        ...state,
        primary: payload,
      };

    // Navigation header bg
    case NAV_HEADER_BG:
      return {
        ...state,
        navheaderBg: payload,
      };

    // header bg
    case HEADER_BG:
      return {
        ...state,
        headerBg: payload,
      };

    // header bg
    case SIDEBAR_BG:
      return {
        ...state,
        sidebarBg: payload,
      };

    case VERSION:
      return {
        ...state,
        version: payload,
      };

    // Header option
    case LAYOUT:
      return {
        ...state,
        layout: payload,
      };
    case HEADER_POSITION:
      return {
        ...state,
        headerPosition: payload,
      };

    case SIDEBAR_STYLE:
      return {
        ...state,
        sidebarStyle: payload,
      };
    case SIDEBAR_POSITION:
      return {
        ...state,
        sidebarPosition: payload,
      };

    // Content
    case CONTAINER_LAYOUT:
      return {
        ...state,
        containerLayout: payload,
      };
    case DIRACTION:
      return {
        ...state,
        direction: payload,
      };
    case TYPOGRAPHY:
      return {
        ...state,
        typography: payload,
      };

   
    default:
      return state;
  }
};

export default demoReducer;
