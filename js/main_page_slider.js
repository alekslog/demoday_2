$(document).ready(function(){
    $(".slider").slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1001,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 781,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});

