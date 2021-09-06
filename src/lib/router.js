import { create } from './view/create.js';
import { profile } from './view/profile.js';
import { home } from './view/homepage.js';
import { timeLine } from './view/timeLine.js';

export const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '#/':
      containerRoot.appendChild(home());
      break;
    case '#/create':
      containerRoot.appendChild(create());
      break;
    case '#/profile':
      containerRoot.appendChild(profile());
      break;
    case '#/timeLine':
      containerRoot.appendChild(timeLine());
      break;
    default:
      containerRoot.innerHTML = `
<h3>Pagina no Encontrada</h3>`;
  }
};

/* export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } if (hash === '#/create') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
}; */
