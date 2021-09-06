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
        <input type="text" class="form__input" id="user_create" placeholder="Usuario">
   </div>

    <div class="input_create">
      <i class="fas fa-envelope"></i>
      <input type="text" class="form__input" id="email" placeholder="@Correo">
    </div>

    <div class="input_create">
      <i class="fas fa-unlock-alt"></i>
      <input type="text" class="form__input" id="password_create" placeholder="Contraseña">
    </div>

    <div class="input_create">
      <i class="fas fa-lock"></i>
      <input type="text" class="form__input" id="pasword2_create" placeholder="Confirmar contraseña">
    </div>

    <div class="form_send">
      <center>
          <button type="submit" class="send">Enviar</button>
          <p class="form_confirmation_message" id="form_confirmation_message">Formulario enviado exitosamente!</p>
      </center>
  </form>
</section>
<footer class="footerPrincipal"></footer>
`;
  divCreate.innerHTML = viewCreate;
  return divCreate;
};
