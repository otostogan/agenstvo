document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        console.log(preloader);
        if(!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1000);
};