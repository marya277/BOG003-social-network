export const home = () => {
  const divHome = document.createElement('div');
  const viewHome = `
  <p>bienvenido a andariegos</p>`;
  divHome.innerHTML = viewHome;
  return divHome;
};
