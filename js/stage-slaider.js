const mediaQuery = window.matchMedia('(max-width: 768px)');
if(mediaQuery.matches){
    let slideIndex2 = 1;
    showSlides(slideIndex2);

    function plusSlides2(n){
        showSlides(slideIndex2 += n);
    }

    function currentSlide2(n){
        showSlides(slideIndex2 = n);
    }

    function showSlides(n){
        let i;
        let slides = document.getElementsByClassName("stagesofdev-slider");

        if (n >slides.length){
            slideIndex2 = 1;
        }
        if (n <1){
            slideIndex2=slides.length;
        }
        for (i=0; i <slides.length ; i++){
            slides[i].style.display = "none";
        }
        slides[slideIndex2-1].style.display = "block";
}
}
