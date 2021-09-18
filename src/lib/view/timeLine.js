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

    db.collection('posts').onSnapshot((querySnapshot) => {
      const changes = querySnapshot.docChanges();
      changes.forEach((change) => {
        console.log(change.doc.data());
        const cards = divTimeLine.querySelector('#cards');
        cards.innerHTML += `
        <div class="card_publication">
        <h5>${change.doc.data().uid}<i class="fas fa-ellipsis-v"></i></h5>
        <p>${change.doc.data().description}</p>
        <p>${change.doc.data().fecha.toDate()}</p>
        </div>`;
      });
    });
  };
  /* const showPost = () => {
    const db = firebase.firestore();

    db.collection('posts').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        const cards = divTimeLine.querySelector('#cards');
        cards.innerHTML += `
        <div class="card_publication">
        <h5>${doc.data().uid}</h5>
        <p>${doc.data().fecha.toDate()}</p>
        <p>${doc.data().description}</p>
        </div>`;
      });
    });
  }; */

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
        user.displayName,
        user.email,
        description,
      );
    }
  });
  showPost();
  return divTimeLine;
};
