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
} from './type';

export const demoAction = (demoNumber, direction) => (dispatch) => {
  console.log(demoNumber, direction, 'demo sdfgsdfgon');
  const body = document.querySelector('body');
  const themeChange = ({
    typography,
    version,
    layout,
    primary,
    headerBg,
    navheaderBg,
    sidebarBg,
    sidebarStyle,
    sidebarPosition,
    headerPosition,
    containerLayout,
    direction,
  }) => {
    body.setAttribute('data-typography', typography);
    body.setAttribute('data-theme-version', version);
    body.setAttribute('data-layout', layout);
    body.setAttribute('data-nav-headerbg', navheaderBg);
    body.setAttribute('data-headerbg', headerBg);
    body.setAttribute('data-sibebarbg', sidebarBg);
    body.setAttribute('data-sidebar-position', sidebarPosition);
    body.setAttribute('data-header-position', headerPosition);
    body.setAttribute('data-container', containerLayout);
    body.setAttribute('data-primary', primary);
    body.setAttribute('direction', direction);
    body.setAttribute('data-sidebar-style', sidebarStyle);
    switch (direction) {
      case 'rtl':
        body.classList.add(direction);
        body.classList.remove('ltr');
        break;

      default:
        body.classList.add(direction);
        body.classList.remove('rtl');
        break;
    }
  };

  var dezThemeSet1 = {
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
    direction: direction,
  };

  var dezThemeSet2 = {
    typography: 'poppins',
    version: 'light',
    layout: 'vertical',
    primary: 'color_9',
    headerBg: 'color_1',
    navheaderBg: 'color_9',
    sidebarBg: 'color_9',
    sidebarStyle: 'mini',
    sidebarPosition: 'fixed',
    headerPosition: 'fixed',
    containerLayout: 'full',
    direction: direction,
  };

  var dezThemeSet3 = {
    typography: 'poppins',
    version: 'dark',
    layout: 'vertical',
    primary: 'color_7',
    headerBg: 'color_1',
    navheaderBg: 'color_7',
    sidebarBg: 'color_7',
    sidebarStyle: 'modern',
    sidebarPosition: 'fixed',
    headerPosition: 'fixed',
    containerLayout: 'full',
    direction: direction,
  };

  var dezThemeSet4 = {
    typography: 'poppins',
    version: 'dark',
    layout: 'vertical',
    primary: 'color_1',
    headerBg: 'color_1',
    navheaderBg: 'color_1',
    sidebarBg: 'color_1',
    sidebarStyle: 'mini',
    sidebarPosition: 'fixed',
    headerPosition: 'fixed',
    containerLayout: 'full',
    direction: direction,
  };

  var dezThemeSet5 = {
    typography: 'poppins',
    version: 'light',
    layout: 'vertical',
    primary: 'color_1',
    headerBg: 'color_1',
    navheaderBg: 'color_1',
    sidebarBg: 'color_1',
    sidebarStyle: 'mini',
    sidebarPosition: 'fixed',
    headerPosition: 'fixed',
    containerLayout: 'full',
    direction: direction,
  };

  var dezThemeSet6 = {
    typography: 'poppins',
    version: 'light',
    layout: 'horizontal',
    primary: 'color_5',
    headerBg: 'color_1',
    navheaderBg: 'color_1',
    sidebarBg: 'color_1',
    sidebarStyle: 'full',
    sidebarPosition: 'fixed',
    headerPosition: 'static',
    containerLayout: 'full',
    direction: direction,
  };

  var dezThemeSet7 = {
    typography: 'poppins',
    version: 'light',
    layout: 'horizontal',
    primary: 'color_2',
    headerBg: 'color_1',
    navheaderBg: 'color_1',
    sidebarBg: 'color_2',
    sidebarStyle: 'compact',
    sidebarPosition: 'fixed',
    headerPosition: 'static',
    containerLayout: 'full',
    direction: direction,
  };

  var dezThemeSet8 = {
    typography: 'poppins',
    version: 'light',
    layout: 'vertical',
    primary: 'color_15',
    headerBg: 'color_1',
    navheaderBg: 'color_15',
    sidebarBg: 'color_1',
    sidebarStyle: 'overlay',
    sidebarPosition: 'fixed',
    headerPosition: 'fixed',
    containerLayout: 'wide-boxed',
    direction: direction,
  };

  var dezThemeSet9 = {
    typography: 'poppins',
    version: 'light',
    layout: 'horizontal',
    primary: 'color_14',
    headerBg: 'color_14',
    navheaderBg: 'color_14',
    sidebarBg: 'color_1',
    sidebarStyle: 'full',
    sidebarPosition: 'fixed',
    headerPosition: 'fixed',
    containerLayout: 'full',
    direction: direction,
  };

  var dezThemeSet10 = {
    typography: 'poppins',
    version: 'light',
    layout: 'vertical',
    primary: 'color_8',
    headerBg: 'color_1',
    navheaderBg: 'color_8',
    sidebarBg: 'color_8',
    sidebarStyle: 'compact',
    sidebarPosition: 'fixed',
    headerPosition: 'fixed',
    containerLayout: 'full',
    direction: direction,
  };

  var dezThemeSet11 = {
    typography: 'poppins',
    version: 'light',
    layout: 'vertical',
    primary: 'color_9',
    headerBg: 'color_9',
    navheaderBg: 'color_1',
    sidebarBg: 'color_1',
    sidebarStyle: 'full',
    sidebarPosition: 'fixed',
    headerPosition: 'fixed',
    containerLayout: 'full',
    direction: direction,
  };

  switch (demoNumber) {
    case 1:
      themeChange(dezThemeSet1);
      break;
    case 2:
      themeChange(dezThemeSet2);
      break;
    case 3:
      themeChange(dezThemeSet3);
      break;
    case 4:
      themeChange(dezThemeSet4);
      break;
    case 5:
      themeChange(dezThemeSet5);
      break;
    case 6:
      themeChange(dezThemeSet6);
      break;
    case 7:
      themeChange(dezThemeSet7);
      break;
    case 8:
      themeChange(dezThemeSet8);
      break;
    case 9:
      themeChange(dezThemeSet9);
      break;
    case 10:
      themeChange(dezThemeSet10);
      break;
    case 11:
      themeChange(dezThemeSet11);
      break;
    default:
      themeChange(dezThemeSet1);
  }

  dispatch({
    type: DEMO,
    payload: demoNumber,
  });
};

// Theme action
export const themeVersionAction = (value) => (dispatch) => {
  const body = document.querySelector('body');
  body.setAttribute('data-theme-version', value);
  dispatch({
    type: VERSION,
    payload: value,
  });
};

export const primaryAction = (value) => (dispatch) => {
  const body = document.querySelector('body');
  body.setAttribute('data-primary', value);
  dispatch({
    type: PRIMARY,
    payload: value,
  });
};

export const navigationHeaderAction = (value) => (dispatch) => {
  const body = document.querySelector('body');
  body.setAttribute('data-nav-headerbg', value);
  dispatch({
    type: NAV_HEADER_BG,
    payload: value,
  });
};
export const headerBgAction = (value) => (dispatch) => {
  const body = document.querySelector('body');
  body.setAttribute('data-headerbg', value);
  dispatch({
    type: HEADER_BG,
    payload: value,
  });
};
export const sideBarBgAction = (value) => (dispatch) => {
  const body = document.querySelector('body');
  body.setAttribute('data-sibebarbg', value);
  dispatch({
    type: SIDEBAR_BG,
    payload: value,
  });
};

// Header action
export const headerLayoutAction = (value) => (dispatch) => {
  const body = document.querySelector('body');
  body.setAttribute('data-layout', value);
  dispatch({
    type: LAYOUT,
    payload: value,
  });
};
export const headerPositionAction = (value) => (dispatch) => {
  const body = document.querySelector('body');
  body.setAttribute('data-header-position', value);
  dispatch({
    type: HEADER_POSITION,
    payload: value,
  });
};

export const sidebarStyleAction = (value) => (dispatch) => {
  const body = document.querySelector('body');
  if (
    body.getAttribute('data-layout') === 'horizontal' &&
    value === 'overlay'
  ) {
    alert('Sorry! Overlay is not possible in Horizontal layout.');
  } else {
    body.setAttribute('data-sidebar-style', value);
    dispatch({
      type: SIDEBAR_STYLE,
      payload: value,
    });
  }
};
export const sidebarPositionAction = (value) => (dispatch) => {
  const body = document.querySelector('body');
  body.setAttribute('data-sidebar-position', value);
  dispatch({
    type: SIDEBAR_POSITION,
    payload: value,
  });
};

// Content action
export const containerAction = (value) => (dispatch) => {
  const body = document.querySelector('body');
  body.setAttribute('data-container', value);
  if (value === 'boxed') {
    console.log(value);
    body.setAttribute('data-sidebar-style', 'overlay');
    dispatch({
      type: SIDEBAR_STYLE,
      payload: 'overlay',
    });
  }
  dispatch({
    type: CONTAINER_LAYOUT,
    payload: value,
  });
};

export const directionAction = (value) => (dispatch) => {
  const body = document.querySelector('body');
  body.setAttribute('direction', value);
  body.className = value;
  dispatch({
    type: DIRACTION,
    payload: value,
  });
};

export const typographyAction = (value) => (dispatch) => {
  const body = document.querySelector('body');
  body.setAttribute('data-typography', value);
  dispatch({
    type: TYPOGRAPHY,
    payload: value,
  });
};
