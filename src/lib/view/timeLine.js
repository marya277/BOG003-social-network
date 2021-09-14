export const timeLine = () => {
  const divTimeLine = document.createElement('div');
  const viewTimeLine = `
  <header>
  <div class="headerPrincipal">
  <img  class="imgTimeLine" src="img/Logo.png" alt="andariegos">
  <a class="icon" href="#/timeLine"><i class="fas fa-home fa-2x" id="iconHome"></i></a>
  <a class="icon" title="Salir" id="exit"><i class="fas fa-door-open fa-2x" id="iconDoor"></i></a>
  <a class="icon" title="Perfil" href="#/profile"><i class="fas fa-user-circle fa-2x" id="iconProfile"></i></a>
  </div>
  </header>
  <section class="containerTimeLine">
  <div class="uno"></div>
  <div class="dos"></div>
  <div class="tres"></div>
  <div class="cuatro"></div>
  </section>
  <div>
  </div>`;
  divTimeLine.innerHTML = viewTimeLine;

  const exit = divTimeLine.querySelector('#exit');

  exit.addEventListener('click', (e) => {
    e.preventDefault();
    firebase.auth().signOut()
      .then(() => {
        window.location.hash = '';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  });
  return divTimeLine;
};
setTimeout(() => {
  switch (window.location.hash) {
    case '#/timeLine':
      document.getElementById('root').innerHTML = '';
      document.getElementById('root').appendChild(timeLine());
      break;
    default:
      break;
  }
}, 1000);
