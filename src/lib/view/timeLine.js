import { createPost } from '../index.js';
import { showPost } from './showPost.js';

export const timeLine = () => {
  const divTimeLine = document.createElement('div');
  divTimeLine.classList.add('timeLine');
  const viewTimeLine = `
  <header>
    <div class="headerPrincipal">
      <img  class="imgTimeLine" src="img/Logo.png" alt="andariegos">
      <a class="icon" href="#/timeLine"><i class="fas fa-home fa-2x" id="iconHome"></i></a>
      <a class="icon" title="Salir" id="exit"><i class="fas fa-door-open fa-2x" id="iconDoor"></i></a>
      <a class="icon" title="Perfil" href="#/profile"><i class="fas fa-user-circle fa-2x" id="iconProfile"></i></a>
    </div>
  </header>
  <section class="containerTimeLine">
    <div class="toPost" id="toPost">
      <img id="photoProfile" src="img/iconProfile1.png">
      <input id="publication" placeholder="¿Qué te gustaria compartir?"></input>
      <button id="btnPost">Publicar</button>
      <p class="message_denied" id="form_denied_message"></p>
    </div>
    <div class="cards" id="cards"></div>
  </section>`;
  divTimeLine.innerHTML = viewTimeLine;

  const exit = divTimeLine.querySelector('#exit');
  const btnPost = divTimeLine.querySelector('#btnPost');
  const publication = divTimeLine.querySelector('#publication');
  const messageToUser = divTimeLine.querySelector('#form_denied_message');

  // Función que muestra los posts en el muro
  // evento sobre el icono de Salir, cierra sesion el usuario
  exit.addEventListener('click', (e) => {
    e.preventDefault();
    firebase.auth().signOut()
      .then(() => {
        window.location.hash = '';
      })
      .catch((error) => {
        console.error('Error al cerrar sesión', error);
      });
  });
  // evento sobre el botón Publicar post
  btnPost.addEventListener('click', (e) => {
    e.preventDefault();
    const user = firebase.auth().currentUser;
    const description = publication.value;
    if (user == null) {
      messageToUser.innerHTML = `
      ⚠️ para crear el post debe esta logueado`;
      messageToUser.style.display = 'block';
    } else if (description === '') {
      messageToUser.innerHTML = `
      ⚠️ Campo vacio`;
      messageToUser.style.display = 'block';
      setTimeout(() => {
        messageToUser.style.display = 'none';
      }, 3000);
    } else {
      createPost(
        user.uid,
        user.email,
        description,
        user.displayName,
      ).then(() => {
        showPost(divTimeLine);
        publication.value = '';
      }).catch((error) => {
        console.error('Error al realizar el post', error);
      });
    }
  });
  showPost(divTimeLine);
  return divTimeLine;
};
