$(document).ready(function ($) {
    $('.catalog-slider').owlCarousel({
        dots: false,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });
});