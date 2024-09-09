
/*code for hamburger menu */

const hamburgerButton = document.querySelector('.hamburger-button');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerButton.addEventListener('click', () => {
  hamburgerButton.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
});