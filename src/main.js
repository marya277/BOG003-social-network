// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { home } from './lib/view/homepage.js';
import { showTemplate } from './lib/router.js';

const startApp = () => {
  document.getElementById('root').innerHTML = home();
  window.addEventListener('hashchange', () => {
    myFunction();
    showTemplate(window.location.hash);
  });
};

window.addEventListener('load', startApp);
