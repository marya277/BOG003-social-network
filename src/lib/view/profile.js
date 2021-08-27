export const profile = () => {
  const divProfile = document.createElement('div');
  const viewProfile = `
  <h1>Este es tu perfil</h1>`;

  divProfile.innerHTML = viewProfile;
  return divProfile;
};
