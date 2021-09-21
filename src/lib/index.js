// Función para ingresar con cuenta Google.
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      window.location.hash = '#/timeLine';
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('user', user);
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // const credential = error.credential;
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

/* export const checkPost = () => {
  const db = firebase.firestore();

  db.collection('posts').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    // console.log(`${doc.id} => ${doc.data()}`);
    });
  });
}; */

/* export const checkPost = () => {
  const db = firebase.firestore();

  db.collection('posts').get().then((querySnapshot) => {
    const post = [];
    querySnapshot.forEach((doc) => {
      post.push(doc.data());
    // console.log(`${doc.id} => ${doc.data()}`);
    });
    return console.log(post);
  });
}; */
