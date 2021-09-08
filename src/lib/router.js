import { create } from './view/create.js';
import { profile } from './view/profile.js';
import { home } from './view/homepage.js';
import { timeLine } from './view/timeLine.js';

// Se realizan las Rutas de nuestra SPA
export const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  if (!hash || hash === '') {
    containerRoot.innerHTML = home();
  } else if (hash === '#/create') {
    containerRoot.innerHTML = '';
    containerRoot.appendChild(create());
  } else if (hash === '#/profile') {
    containerRoot.innerHTML = '';
    containerRoot.appendChild(profile());
  } else if (hash === '#/timeLine') {
    containerRoot.innerHTML = '';
    containerRoot.appendChild(timeLine());
  } else {
    containerRoot.innerHTML = `
    <h3>Pagina no Encontrada</h3>`;
  }
};
