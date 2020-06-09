const menuButton = document.querySelector('.new-menu__button');
const menuList = document.querySelector('.new-menu__list');

menuButton.addEventListener('click', () => {
    let expanded = menuButton.getAttribute('aria-axpanded') === 'true' || false;
    menuButton.setAttribute('aria-expanded', !expanded);
    menuButton.classList.toggle('new-menu__button_view_open');
    menuList.classList.toggle('new-menu__list_view_open');
});
