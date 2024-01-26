$(document).ready(function () {
    $('.right-aside').slick({
        // autoplay: true,
        // autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        prevArrow: '<div class="prev-arrow"><img src="../assents/icons/leftArrow.svg" alt="arrow" ></div>',
        nextArrow: '<div class="next-arrow"><img src="../assents/icons/rightArrow.svg" alt="arrow" ></div>',
    });
})