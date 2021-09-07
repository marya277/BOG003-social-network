import { login } from '../index.js';

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
        <input type="text" placeholder="Email" class="LogIn_input">
        <input type="text" placeholder="Password" class="LogIn_input">
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
      login();
    });
  }, 1000);
  return viewHome;
};

/* <ul>
<li><a href="#/">Inicio</a></li>
<li><a href="#/create"></a></li>
<li><a href="#/profile">Mi Perfil</a></li>
<li><a href="#/timeLine">Muro</a></li>
</ul>
*/
