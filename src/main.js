// Este es el punto de entrada de tu aplicacion

import { home } from './lib/view/homepage.js';
import { showTemplate } from './lib/router.js';

const startApp = () => {
  document.getElementById('root').innerHTML = home();
  window.addEventListener('hashchange', () => {
    showTemplate(window.location.hash);
  });
};

window.addEventListener('load', startApp);
