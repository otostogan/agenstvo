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
    //wowjs
    new WOW().init();
    //validateofForm

    function validate(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                  },
                email: {
                    required: true,
                    email: true
                },
                phone: "required",
                permis: "required",
                permisbottom: "required"
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите  {0} символa")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправельно введен адрес почты"
                },
                permis: "(Пожалуйста, дайте согласие на обработку данных!)",
                permisbottom: "(Пожалуйста, дайте согласие на обработку данных!)"
              }        
        });
    }
    validate(".feed-form");
    validate(".feed-onpage");
});


