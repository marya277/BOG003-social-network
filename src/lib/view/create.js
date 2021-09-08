import { validator } from '../index.js';

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
          <button type="submit" class="send" id="">Enviar</button>
          <p class="form_confirmation_message" id="form_confirmation_message">Formulario enviado exitosamente!</p>
      </center>
  </form>
</section>
<footer class="footerPrincipal"></footer>
`;
  divCreate.innerHTML = viewCreate;
  // Eventos de los Inputs --Usuario--Email--Contraseña
  setTimeout(() => {
    const email = document.getElementById('email');
    email.addEventListener('change', validator);
  }, 1000);

  setTimeout(() => {
    const userCreate = document.getElementById('user_create');
    userCreate.addEventListener('change', validator);
  }, 1000);

  setTimeout(() => {
    const passwordCreate = document.getElementById('password_create');
    passwordCreate.addEventListener('change', validator);
  }, 1000);

  setTimeout(() => {
    const passwordCreate2 = document.getElementById('password2_create');
    passwordCreate2.addEventListener('change', validator);
  }, 1000);

  // setTimeout(() => {
  // const send = document.getElementById('send');
  // send.addEventListener('sumit', (e) => {
  // e.preventDefault();
  // });
  // }, 1000);
  return divCreate;
};
