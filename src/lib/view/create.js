// import { auth } from '../index.js';

export const create = () => {
  const divCreate = document.createElement('div');
  const viewCreate = `
  <header>
  <div class="headerPrincipal" ></div>
  </header>
  <section class="container_create">
      <center>
        <img  class="img_create" src="img/Logo.png" alt="andariegos" >
        <h2>Registrarse</h2>
      </center>
 
<form class="createAccount">
    <div class="input_create">
    <i class="fas fa-user"></i>
        <input type="text" class="form__input" id="user_create" placeholder="Usuario" required>
   </div>

   <div class="input_create">
      <i class="fas fa-envelope"></i>
      <input type="email" class="form__input" name="email" id="email" placeholder="@Correo" required>
    </div>

    <div class="input_create">
      <i class="fas fa-unlock-alt"></i>
      <input type="password" class="form__input" name="password1" id="password_create" placeholder="Contraseña" required>
    </div>

    <div class="input_create">
      <i class="fas fa-lock"></i>
      <input type="password" class="form__input" name"password2" id="password2_create" placeholder="Confirmar contraseña" required>     
    </div>
    <p class="form_denied_message" id="form_denied_message"></p>

    <div class="form_send">
      <center>
        <p class="form_confirmation_message" id="form_confirmation_message"></p>
        <button id="send" type="submit" class="send" >Enviar</button>
      </center>
  </form>
</section>
<footer class="footerPrincipal"></footer>
`;
  divCreate.innerHTML = viewCreate;

  const btnSend = divCreate.querySelector('#send');
  const userCreate = divCreate.querySelector('#user_create');
  const email = divCreate.querySelector('#email');
  const passwordCreate = divCreate.querySelector('#password_create');
  const passwordConfirmation = divCreate.querySelector('#password2_create');
  const messageToUser = divCreate.querySelector('#form_denied_message');
  const messageConfirm = divCreate.querySelector('#form_confirmation_message');
  const auth = firebase.auth();
  // const database = firebase.firestore();

  // Se crea un evento que verifica el input de Usuario
  userCreate.addEventListener('change', () => {
    if (userCreate.value.length > 5) {
      messageToUser.style.display = 'none';
    } else {
      messageToUser.innerHTML = `
      ⚠️ Usuario debe ser mínimo 6 caracteres, máximo 12 caracteres`;
      messageToUser.style.display = 'block';
    }
  });
  // Se crea un evento que verifica los inputs de Password
  passwordConfirmation.addEventListener('change', () => {
    if (passwordCreate.value !== passwordConfirmation.value) {
      messageToUser.innerHTML = `
      ⚠️ La Contraseña no coincide`;
      messageToUser.style.display = 'block';
    } else {
      messageToUser.style.display = 'none';
    }
  });
  /* Se crea un evento sobre el boton Enviar que verifica nuevamente los inputs de usuario y
      password, evitando que el formulario se envie sin esa verificación */
  btnSend.addEventListener('click', (e) => {
    e.preventDefault();
    if (userCreate.value.length < 5) {
      messageToUser.innerHTML = `
      ⚠️ Error al enviar formulario. Usuario debe ser mínimo 6 caracteres, máximo 12 caracteres`;
      messageToUser.style.display = 'block';
    } else if (passwordConfirmation.value !== passwordCreate.value) {
      messageToUser.innerHTML = `
      ⚠️ Error al enviar formulario. Su contraseña no coincide`;
      messageToUser.style.display = ('block', 4000);
    } else {
      // Se realiza la autenticacion para email y password
      const valueEmail = email.value;
      const password = passwordConfirmation.value;
      const Username = userCreate.value;
      auth.createUserWithEmailAndPassword(valueEmail, password)
        // Se guarda el dato de nombre de Usuario
        .then((result) => {
          result.user.updateProfile({
            displayName: Username,
          });
          /* Se le envia un correo de verificaion al usuario, correo que al aceptar lo redirige a
      nuestra pagina, si no valida, firebase no lo dejara registrado */
          const config = {
            url: 'http://127.0.0.1:5500/src/index.html#',
          };
          result.user.sendEmailVerification(config).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          });
          // Se saca al usuario de la cuenta, para que valide su email y pueda ingresar verificado
          auth.signOut();
          messageConfirm.innerHTML = `
        ✅ Usuario Registrado. Por favor, verifique su correo y confirme su cuenta`;
          messageConfirm.style.display = 'block';
          // se redirecciona al usuario a la pagina principal
          setTimeout(() => {
            window.location.hash = '';
          }, 3000);
        // const user = userCredential.user; (userCredencial usandose en then como argumento)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          switch (errorCode) {
            case 'auth/email-already-in-use':
              messageToUser.innerHTML = `
              ⚠️ Error al enviar formulario. Este email ya esta registrado`;
              messageToUser.style.display = 'block';
              break;
            case 'auth/invalid-display-name':
              messageToUser.innerHTML = `
              ⚠️ Error al enviar formulario. Por favor, ingrese un nombre de Usuario`;
              messageToUser.style.display = 'block';
              break;
            case 'auth/invalid-email':
              messageToUser.innerHTML = `
              ⚠️ Error al enviar formulario. Por favor, ingrese un Email valido`;
              messageToUser.style.display = 'block';
              break;
            case 'auth/weak-password':
              messageToUser.innerHTML = `
              ⚠️ Error al enviar formulario. Su contraseña debe tener al menos 6 caracteres`;
              messageToUser.style.display = 'block';
              break;
            default:
              break;
          }
        });
    }
  });
  console.log(divCreate);
  return divCreate;
};
