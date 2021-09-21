import { loginGoogle } from '../index.js';

export const home = () => {
  const viewHome = `
  <header >
    <div class="headerPrincipal" ></div>
  </header>
  <section class="container">
      <div class="bienvenida">
        <center>
        <h1>Bienvenido a</h1>
        <figure>
          <img src="img/Logo.png" alt="logo">
        </figure>
        <h4>Una Red Social para viajeros<br>Comparte tus experiencias con otros</h4>
      </center>
      </div>
      <div class="desktop">
      <form class="LogIn">
        <input type="email" placeholder="Email" class="LogIn_input" id="login_email">
        <input type="password" placeholder="Password" class="LogIn_input"  id= "login_password">
        <p class="message_denied" id="form_denied_message"></p>

        <button type="submit" class="btonSesion" id="btonSesion">Iniciar Sesión</button>
      </form>
    <div class="google">
      <div class="btnGoogle">
      <input type="image"   id="btnGoogle" src="img/Google.png" alt="google">
      </div>
      <p>¿No tienes una cuenta?</p>
      <a href="#/create">
      <button class="btonSesion" id="btnCreate" >Crear cuenta</button>
      </a>
    </div>
    </div>
    </section>
    <footer class="footerPrincipal"></footer>
  `;
  // Autenticación de Google
  setTimeout(() => {
    const btnGoogle = document.getElementById('btnGoogle');
    btnGoogle.addEventListener('click', () => {
      loginGoogle();
    });
  }, 1000);
  setTimeout(() => {
    const btonSesion = document.getElementById('btonSesion');
    const btnLoginemail = document.getElementById('login_email');
    const btnLoginPassword = document.getElementById('login_password');
    const messageConfirm = document.getElementById('form_denied_message');
    btonSesion.addEventListener('click', (e) => {
      e.preventDefault();
      const inputEmail = btnLoginemail.value;
      const inputPassword = btnLoginPassword.value;
      firebase.auth().signInWithEmailAndPassword(inputEmail, inputPassword)
        .then((result) => {
        // Signed in
          if (result.user.emailVerified) {
            window.location.hash = '#/timeLine';
          } else {
            messageConfirm.innerHTML = `
            ⚠️ Por favor, verifique su correo y confirme su cuenta`;
            messageConfirm.style.display = 'block';
            firebase.auth().singout();
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          switch (errorCode) {
            case 'auth/user-not-found':
              messageConfirm.innerHTML = `
              ⚠️ Este correo no esta registrado`;
              messageConfirm.style.display = 'block';
              break;
            case 'auth/wrong-password':
              messageConfirm.innerHTML = `
              ⚠️ Contraseña Incorrecta`;
              messageConfirm.style.display = 'block';
              break;
            default:
              break;
          }
        });
    });
  }, 4000);
  return viewHome;
};
