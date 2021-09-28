export const editPost = (id) => {
  const divEditPost = document.createElement('div');
  divEditPost.classList.add('divEditPost');
  const viewEditPost = `
    <div class="modalEdit">
        <i class="fas fa-times-circle closeEdit"></i>
        <input class="editPost" id="publicationEdit"></input>
        <button class="edit">editar</button>
      </div>`;
  divEditPost.innerHTML = viewEditPost;

  const editPosts = divEditPost.querySelectorAll('.edit');
  // const showEdit = divEditPost.querySelector('.modalEdit');
  const closeEdit = divEditPost.querySelectorAll('.closeEdit');
  // const publicationEdit = divEditPost.querySelectorAll('.publicationEdit');
  const db = firebase.firestore();

  // Evento sobre boton borrar de la ventana Modal
  editPosts.forEach((edit) => {
    edit.addEventListener('click', () => {
      db.collection('posts').doc(id).get()
        .then(() => {
          console.log('Aqui esta tu función de borrar');
        })
        .catch((error) => console.error('Error eliminando documento', error));
    });
  });
  closeEdit.forEach((close) => {
    close.addEventListener('click', () => {
      console.log('intentas cerrar tu modal');
    });
  });
  return divEditPost;
};
