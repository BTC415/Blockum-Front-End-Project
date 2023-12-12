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
  body.setAttribute('data-sibebarbg', 'color_14');
  body.setAttribute('data-primary', 'color_14');
  body.setAttribute('data-sidebar-position', 'static');
  body.setAttribute('data-header-position', 'static');
  body.setAttribute('data-container', 'wide');
  body.setAttribute('direction', 'ltr');
  body.setAttribute('data-sidebar-style', 'full');
};

// preloader
export const preloaderAction = () => {
  window.addEventListener('load', () => {
    document.querySelector('#main-wrapper').classList.add('show');
    document.querySelector('#preloader').style.display = 'none';
  });
};

// Header toggle
export const headerToggle = () => {
  var btn = document.querySelector('.nav-control');
  var aaa = document.querySelector('#main-wrapper');

  const toggleFunc = () => {
    return aaa.classList.toggle('menu-toggle');
  };
  btn.addEventListener('click', toggleFunc);
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
