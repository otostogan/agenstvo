window.addEventListener('DOMContentLoaded', ()=> {
        function scrollTo(element){
        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }

    const buttons = document.querySelectorAll('.btn-invittoyellow'),
        landingPage = document.querySelector('#landingPage'),
        corporateWebsite = document.querySelector('#corporateWebsite'),
        webshop = document.querySelector('#webShop'),
        seocase = document.querySelector('#seocase');

    buttons.forEach(btn => {
        let href = btn.getAttribute('href');
        console.log(href);
        btn.addEventListener('click',(e)=>{
            e.preventDefault();
            
            if(btn.classList.contains('landingPage')){
                scrollTo(landingPage);
            }
            if(btn.classList.contains('corporateWebsite')){
                scrollTo(corporateWebsite);
            }
            if(btn.classList.contains('webShop')){
                scrollTo(webshop);
            }
            if(btn.classList.contains('seocase')){
                scrollTo(seocase);
            }
        });
    });
    
    const mediaQuery = window.matchMedia('(max-width: 1250px)');
    if(mediaQuery.matches){
        $('.exemple__wrapper').slick({
            dots: true,
            infinite: true,
            speed: 300,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/cases/arrows/prev.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/cases/arrows/next.svg"></button>',
        });
    }
});
