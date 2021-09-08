// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
};

export const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      // const credential = result.credential;

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

const validatorEmail = () => {
  const expressionsEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const email = document.getElementById('email');
  if (expressionsEmail.test(email.value)) {
    console.log('valido');
  } else {
    console.log('no valido');
  }
};

const validatorUser = () => {
  const userCreate = document.getElementById('user_create');
  if (userCreate.value.length > 8) {
    console.log('valido');
  } else {
    console.log('no valido');
  }
};

const validatorPassword = () => {
  const password = /^.{4,12}$/;
  const passwordCreate = document.getElementById('password_create');
  if (password.test(passwordCreate.value)) {
    console.log('valido');
  } else {
    console.log('no valido');
  }
};

const validatorPassword2 = () => {
  const password = /^.{4,12}$/;
  const passwordCreate2 = document.getElementById('password2_create');
  if (password.test(passwordCreate2.value)) {
    console.log('valido');
  } else {
    console.log('no valido');
  }
};

export const validator = (e) => {
  switch (e.target.id) {
    case 'email':
      validatorEmail();
      break;
    case 'user_create':
      validatorUser();
      break;
    case 'password_create':
      validatorPassword();
      break;
    case 'password2_create':
      validatorPassword2();
      break;
    default:
      break;
  }
};
