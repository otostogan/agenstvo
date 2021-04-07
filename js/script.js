window.addEventListener('DOMContentLoaded', ()=> {
    //menuHamburger    
    const hamburger = document.querySelector('.header__hamberger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('showmenu');
    } );

    closeElem.addEventListener('click', () => {
        menu.classList.remove('showmenu');
    });
    new WOW().init();
});


