import { showPost } from './showPost.js';

export const modalTrash = (id) => {
  const divTrash = document.createElement('div');
  divTrash.classList.add('show');
  const viewTrash = `
  <div class="modal">
      <i class="fas fa-times-circle close"></i>
      <h3>¿Estás seguro que deseas borrar este post?</h3>
      <button class="deletePost">Borrar</button>
    </div>`;
  divTrash.innerHTML = viewTrash;

  const deletePosts = divTrash.querySelectorAll('.deletePost');
  const closeMod = divTrash.querySelectorAll('.close');
  const db = firebase.firestore();

  // Evento sobre boton borrar de la ventana Modal
  deletePosts.forEach((deletePost) => {
    deletePost.addEventListener('click', () => {
      db.collection('posts').doc(id).delete()
        .then(() => {
          divTrash.style.display = 'none';
          const timeLine = document.querySelector('.timeLine');
          showPost(timeLine);
        })
        .catch((error) => console.error('Error eliminando documento', error));
    });
  });
  closeMod.forEach((closeModal) => {
    closeModal.addEventListener('click', () => {
      divTrash.style.display = 'none';
    });
  });
  return divTrash;
};
