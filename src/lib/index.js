// Función para ingresar con cuenta Google.
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      window.location.hash = '#/timeLine';
      const user = result.user;
      console.log('user', user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log('error', errorMessage);
    });
};
//  Función que crea una colección de las publicaciones
export const createPost = (uid, email, description, displayName) => {
  const db = firebase.firestore();

  return db.collection('posts').add({
    uid,
    email,
    description,
    displayName,
    fecha: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

//  Función editar las publicaciones
export const editingPost = (id, description) => {
  const db = firebase.firestore();
  const editInfo = db.collection('posts').doc(id);
  return editInfo.update({
    description,
  });
};

// Función crear los likes las publicaciones
export const createLike = (id, uid) => {
  const db = firebase.firestore();
  const likePost = db.collection('posts').doc(id);
  likePost.update({
    likes: firebase.firestore.FieldValue.arrayUnion(uid),
  });
};

// Función quitar los likes las publicaciones
export const removeLike = (id, uid) => {
  const db = firebase.firestore();
  const likePost = db.collection('posts').doc(id);
  likePost.update({
    likes: firebase.firestore.FieldValue.arrayRemove(uid),
  });
};
