const hamburger = document.querySelector('#hamburger');
const navbar = document.querySelector('#navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
    hamburger.classList.toggle('open'); // Toggles the "X" icon
});
