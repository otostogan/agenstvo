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