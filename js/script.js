window.addEventListener('DOMContentLoaded', ()=> {
      //modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');


    
    modalTrigger.forEach(btn =>{
        btn.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.add('fade');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal(){
        modal.classList.add('hide');
        modal.classList.remove('show');
        modal.classList.remove('fade');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if(e.target == modal){
            closeModal();
        }
    });

    document.addEventListener('keydown', (e)=>{
        if(e.code === "Escape" && modal.classList.contains('show')){
            closeModal();
        }
    });
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


