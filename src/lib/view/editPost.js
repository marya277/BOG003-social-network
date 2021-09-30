import { editingPost } from '../index.js';

export const editPost = (id) => {
  const divEditPost = document.createElement('div');
  divEditPost.classList.add('divEditPost');
  const viewEditPost = `
    <div class="modalEdit">
        <i class="fas fa-times-circle closeEdit"></i>
        <input class="editPost" id="inputEdit" size="27"></input>
        <button class="editing">editar</button>
      </div>`;
  divEditPost.innerHTML = viewEditPost;

  const editPosts = divEditPost.querySelectorAll('.editing');
  // const showEdit = divEditPost.querySelector('.modalEdit');
  const closeEdit = divEditPost.querySelectorAll('.closeEdit');
  const inputEdit = divEditPost.querySelector('#inputEdit');

  const db = firebase.firestore();
  const docRef = db.collection('posts').doc(id);
  docRef.get().then((doc) => {
    const informationDataBase = doc.data().description;
    inputEdit.value = informationDataBase;
  }).catch((error) => {
    console.log('Error getting document:', error);
  });

  // Evento sobre boton editar de la ventana Modal
  editPosts.forEach((edit) => {
    edit.addEventListener('click', () => {
      const description = inputEdit.value;
      editingPost(id, description);
    });
  });
  closeEdit.forEach((close) => {
    close.addEventListener('click', () => {
      divEditPost.style.display = 'none';
    });
  });
  return divEditPost;
};
