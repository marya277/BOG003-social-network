// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { menu } from './lib/view/menu.js';
import { changeRoute } from './lib/router.js';

const startApp = () => {
  document.getElementById('root').innerHTML = menu();
  window.addEventListener('hashchange', () => {
    myFunction();
    changeRoute(window.location.hash);
  });
};

window.addEventListener('load', startApp);
