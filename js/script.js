window.addEventListener('DOMContentLoaded', ()=> {
    $('.projectslider__slider').slick({
        infinite: true,
        dots: true,
        // autoplay: true,
        // centerMode: true,
        autoplaySpeed: 10000,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/project_slider/slider_arrow/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/project_slider/slider_arrow/next.png"></button>',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true,
                  arrows: false
                }
              },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
                arrows: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                dots: false,
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false
              }
            }
          ]
      });
      $('.companytrust__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/company_trust/arrows/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/company_trust/arrows/next.png"></button>',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                  infinite: true,
                  dots: false,
                  arrows: false
                }
              }
         ]
      });
      $('.ourteam__descr').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/project_slider/slider_arrow/left_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/project_slider/slider_arrow/right_arrow.png"></button>',
      });

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
    // menuHamburger    
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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("ourteam__item");

    if (n >slides.length){
        slideIndex = 1;
    }
    if (n <1){
        slideIndex=slides.length;
    }
    for (i=0; i <slides.length ; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "grid";
}
