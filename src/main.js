// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { menu } from './lib/view/viewmenu.js';
// import { home } from './lib/view/viewHome.js';
import { changeRoute } from './Lib/router.js';

document.getElementById('root').innerHTML = menu();
const init = () => {
  document.getElementById('root').innerHTML = menu();
  window.addEventListener('hashchange', () => {
    myFunction();
    changeRoute(window.location.hash);
  });
};
window.addEventListener('load', init);
