const hamburger = document.querySelector('#hamburger');
const navigation = document.querySelector('#navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamburger.classList.toggle('show'); // Toggles the "X" icon
});
