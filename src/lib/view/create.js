export const create = () => {
  const divCreate = document.createElement('div');
  const viewCreate = `
  <h1>Crea tu Usuario</h1>`;
  divCreate.innerHTML = viewCreate;
  return divCreate;
};
