// Este es el punto de entrada de tu aplicacion

import { home } from './lib/view/homepage.js';
import { showTemplate } from './lib/router.js';
import { create } from './lib/view/create.js';

const startApp = () => {
  document.getElementById('root').innerHTML = home();
  window.addEventListener('hashchange', () => {
    showTemplate(window.location.hash);
  });
  switch (window.location.hash) {
    case '#/create':
      document.getElementById('root').innerHTML = '';
      document.getElementById('root').appendChild(create());
      break;
    default:
      break;
  }
};

window.addEventListener('load', startApp);
