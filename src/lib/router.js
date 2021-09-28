import { create } from './view/create.js';
import { modalTrash } from './view/deletePost.js';
import { home } from './view/homepage.js';
import { timeLine } from './view/timeLine.js';
import { editPost } from './view/editPost.js';

// Se realizan las Rutas de nuestra SPA
export const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  if (!hash || hash === '') {
    containerRoot.innerHTML = home();
  } else if (hash === '#/create') {
    containerRoot.innerHTML = '';
    containerRoot.appendChild(create());
  } else if (hash === '#/modalTrash') {
    containerRoot.innerHTML = '';
    containerRoot.appendChild(modalTrash());
  } else if (hash === '#/timeLine') {
    containerRoot.innerHTML = '';
    containerRoot.appendChild(timeLine());
  } else if (hash === '#/editPost') {
    containerRoot.innerHTML = '';
    containerRoot.appendChild(editPost());
  } else {
    containerRoot.innerHTML = `
    <h3>Pagina no Encontrada</h3>`;
  }
};
