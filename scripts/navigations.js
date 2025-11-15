const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('primary-nav');

menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('open');
    menuToggle.classList.toggle('open'); 
});
