import { home } from './view/home.js';
import { create } from './view/create.js';
import { profile } from './view/profile.js';
import { menu } from './view/menu.js';
import { timeLine } from './view/timeLine.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = menu();

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
export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } if (hash === '#/create') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};
