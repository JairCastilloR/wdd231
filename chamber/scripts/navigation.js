const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !expanded);

    nav.classList.toggle('show'); 
});
