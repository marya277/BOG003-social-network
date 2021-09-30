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
  })
    .then((refDoc) => {
      console.log(refDoc.id);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

export const editingPost = (id, description) => {
  const db = firebase.firestore();
  const editInfo = db.collection('posts').doc(id);
  return editInfo.update({
    description,
  })
    .then(() => {
      console.log('Aqui esta tu función de editar', description);
    })
    .catch((error) => {
      console.log('Error editing document:', error);
    });
};
