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

  // Función que muestra los posts en el muro
  const showPost = () => {
    const db = firebase.firestore();
    const cards = divTimeLine.querySelector('#cards');
    cards.innerHTML = '';
    db.collection('posts').orderBy('fecha', 'desc').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const user = firebase.auth().currentUser;
        const idPost = doc.data();
        idPost.id = doc.id;
        idPost.uid = doc.uid;
        console.log(user.uid);
        console.log(doc.data().uid);

        if (user.uid === doc.data().uid) {
          cards.innerHTML += `
        <div class="card_publication">
          <h5>${doc.data().displayName}<i class="fas fa-edit edit" data-id="${idPost.id}"></i><i class="fas fa-trash trash" id="trash_${idPost.id}" data-id="${idPost.id}"></i></h5>
          <p>${doc.data().description}</p>
          <p>${doc.data().fecha ? doc.data().fecha.toDate().toDateString() : 'sin fecha'}</p>
        </div>`;
        } else {
          cards.innerHTML += `
        <div class="card_publication">
          <h5>${doc.data().displayName}</h5>
          <p>${doc.data().description}</p>
          <p>${doc.data().fecha.toDate().toDateString()}<i class="heart"></i></p>
        </div>`;
        }
      });
      // Evento sobre cada icono de Trash que borra el post
      const trashes = divTimeLine.querySelectorAll('.trash');
      trashes.forEach((trash) => {
        trash.addEventListener('click', (e) => {
          const id = e.target.dataset.id;
          db.collection('posts').doc(id).delete()
            .then(() => {
              showPost();
            })
            .catch((error) => console.error('Error eliminando documento', error));
        });
      });

      const edited = divTimeLine.querySelectorAll('.edit');
      // console.log(edited);
      edited.forEach((edit) => {
        edit.addEventListener('click', () => {
          /* const id = e.target.dataset.id;
          console.log(id); */
        });
      });

      const hearts = divTimeLine.querySelectorAll('.heart');
      hearts.forEach((heart) => {
        heart.addEventListener('click', () => {
          heart.classList.toggle('heart-animation');
        });
      });
    })
      .catch((error) => {
        console.error('Error al publicar el post', error);
      });
  };
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
        showPost();
        publication.value = '';
      }).catch((error) => {
        console.error('Error al realizar el post', error);
      });
    }
  });
  showPost();
  return divTimeLine;
};
