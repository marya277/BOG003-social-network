import { modalTrash } from './deletePost.js';
import { editPost } from './editPost.js';

export const showPost = (divTimeLine) => {
  const db = firebase.firestore();
  const cards = divTimeLine.querySelector('#cards');
  cards.innerHTML = '';
  db.collection('posts').orderBy('fecha', 'desc').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const user = firebase.auth().currentUser;
      const idPost = doc.data();
      idPost.id = doc.id;
      idPost.uid = doc.uid;

      if (user.uid === doc.data().uid) {
        cards.innerHTML += `
        <div class="card_publication">
          <h5>${doc.data().displayName}<i class="fas fa-edit edit" data-id="${idPost.id}"></i><i class="fas fa-trash trash" data-id="${idPost.id}"></i></h5>
          <p>${doc.data().description}</p>
          <p>${doc.data().fecha.toDate().toDateString()}</p>
        </div>
        `;
      } else {
        cards.innerHTML += `
        <div class="card_publication">
          <h5>${doc.data().displayName}</h5>
          <p>${doc.data().description}</p>
          <p>${doc.data().fecha.toDate().toDateString()}<i class="heart"></i><i class="fal fa-heart Heartmovile"></i></p>
        </div>`;
      }
    });
    // Evento sobre cada icono de Trash que llama a la ventana modal
    const trashes = divTimeLine.querySelectorAll('.trash');
    trashes.forEach((trash) => {
      trash.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        const modal = modalTrash(id);
        divTimeLine.appendChild(modal);
      });
    });

    const edited = divTimeLine.querySelectorAll('.edit');
    edited.forEach((edit) => {
      edit.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        const postEdit = editPost(id);
        divTimeLine.appendChild(postEdit);
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
