export const create = () => {
  const divCreate = document.createElement('div');
  const viewCreate = `

  <header  class="principal"></header>
  <section class="container_home">
    <center>
      <figure>
 <img  class="img_create" src="img/Logo.png" alt="andariegos" >
        </figure>
        <h2>Llenar formulario</h2>
        </center>
  </section>
<div class="createAccount">
<div class="user_create">
<i class="fas fa-user"></i>
        <input type="text" class="form__input" id="usuario" placeholder="usuario">
   </div>

<div class="email_create">
<i class="fas fa-envelope"></i>
        <input type="text" class="form__input" id="email" placeholder="@correo">
  </div>

<div class="password_create">
<i class="fas fa-unlock-alt"></i>
        <input type="text" class="form__input" id="password_create" placeholder="contraseña">
</div>

<div class="password_create">

<i class="fas fa-lock"></i>
        <input type="text" class="form__input" id="pasword2_create" placeholder=" confirmar contraseña">
</div>

<div class="form_send">
<center>
 <button type="submit" class="form_confirmation_message"
 ">enviar</button>
 <p class="form__mensaje-exito" id="form_confirmation_message"
 ">Formulario enviado exitosamente!</p>
 </center>
</div>
`;
  divCreate.innerHTML = viewCreate;
  return divCreate;
};
