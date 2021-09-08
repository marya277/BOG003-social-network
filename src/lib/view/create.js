// import { validator } from '../index.js';

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
      <input type="text" class="form__input" id="email" placeholder="@Correo" required>
    </div>

    <div class="input_create">
      <i class="fas fa-unlock-alt"></i>
      <input type="text" class="form__input" id="password_create" placeholder="Contraseña" required>
    </div>

    <div class="input_create">
      <i class="fas fa-lock"></i>
      <input type="text" class="form__input" id="password2_create" placeholder="Confirmar contraseña" required>
    </div>

    <div class="form_send">
      <center>
          <button type="submit" class="send" id="send">Enviar</button>
          <p class="form_confirmation_message" id="form_confirmation_message"></p>
          <p class="form_denied_message" id="form_denied_message"></p>
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

  userCreate.addEventListener('change', () => {
    if (userCreate.value.length > 8) {
      console.log('valido');
    } else {
      messageToUser.innerHTML = `
      Usuario no Valido`;
    }
  });
  email.addEventListener('change', () => {
    const expressionsEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (expressionsEmail.test(email.value)) {
      console.log('valido');
    } else {
      console.log('no valido');
    }
  });
  passwordCreate.addEventListener('change', () => {
    const password = /^.{4,12}$/;
    if (password.test(passwordCreate.value)) {
      console.log('valido');
    } else {
      console.log('no valido');
    }
  });
  passwordConfirmation.addEventListener('change', () => {
    if (passwordCreate.value !== passwordConfirmation.value) {
      console.log('Diferentes');
    } else {
      console.log('Iguales');
    }
  });
  btnSend.addEventListener('clic', (e) => {
    e.preventDefault();
  });
  return divCreate;
};
