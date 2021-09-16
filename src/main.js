// Este es el punto de entrada de tu aplicacion

import { home } from './lib/view/homepage.js';
import { showTemplate } from './lib/router.js';
import { create } from './lib/view/create.js';
import { timeLine } from './lib/view/timeLine.js';

const startApp = () => {
  window.addEventListener('hashchange', () => {
    showTemplate(window.location.hash);
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      switch (window.location.hash) {
        case '#/timeLine':
          document.getElementById('root').innerHTML = '';
          document.getElementById('root').appendChild(timeLine());
          break;
        default:
          break;
      }
    } else {
      switch (window.location.hash) {
        case '#/create':
          document.getElementById('root').innerHTML = '';
          document.getElementById('root').appendChild(create());
          break;
        default:
          document.getElementById('root').innerHTML = home();
          break;
      }
    }
  });
};

window.addEventListener('load', startApp);
