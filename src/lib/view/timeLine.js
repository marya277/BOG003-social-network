import { createPost } from '../index.js';

export const timeLine = () => {
  const divTimeLine = document.createElement('div');
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
    <div class="cards" id="cards">
    </div>
    <div class="tres"></div>
    <div class="cuatro"></div>
  </section>`;
  divTimeLine.innerHTML = viewTimeLine;

  const exit = divTimeLine.querySelector('#exit');
  const btnPost = divTimeLine.querySelector('#btnPost');
  const publication = divTimeLine.querySelector('#publication');
  const messageToUser = divTimeLine.querySelector('#form_denied_message');

  const showPost = () => {
    const db = firebase.firestore();
    const cards = divTimeLine.querySelector('#cards');
    cards.innerHTML = '';
    db.collection('posts').orderBy('fecha', 'desc').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        cards.innerHTML += `
        <div class="card_publication">
        <div class="menu">
              <i class="fas fa-ellipsis-v" id="menu">
                <li class"option" id="">Editar</li>
                <li class"option" id="">Borrar</li>
              </i>
          </div>
          <h5>${doc.data().displayName}</h5>
          <p>${doc.data().description}</p>
          <p>${doc.data().fecha ? doc.data().fecha.toDate() : 'sin fecha'}</p>
        </div>`;

        const menu = divTimeLine.querySelector('#menu');
        const options = divTimeLine.querySelector('.option');

        menu.addEventListener('click', () => {
          options.style.display = 'block';
          console.log('presionaste menu');
        });
      });
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  exit.addEventListener('click', (e) => {
    e.preventDefault();
    firebase.auth().signOut()
      .then(() => {
        window.location.hash = '';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  });

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
        showPost();
      });
    }
  });
  showPost();
  return divTimeLine;
};
