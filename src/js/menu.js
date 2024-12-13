const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close');

// Ouvrir le menu
menuToggle.addEventListener('click', () => {
    menu.classList.add('active');
});

// Fermer le menu
menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
});