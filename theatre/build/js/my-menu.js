const menuButton = document.querySelector('.btn_for_main-navigation-handle');
const menuList = document.querySelector('.main-navigation');

menuButton.addEventListener('click', () => {
    let expanded = menuButton.getAttribute('aria-axpanded') === 'true' || false;
    menuButton.setAttribute('aria-expanded', !expanded);
    menuButton.classList.toggle('new-menu__button_view_open');
    menuList.classList.toggle('main-navigation_opened');
});