$(document).ready(function () {
    $('.bottom-content').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 5,
        arrows: true,
        prevArrow: '<div class="prev-arrow"><img src="../assents/icons/leftArrow.svg" alt="arrow" ></div>',
        nextArrow: '<div class="next-arrow"><img src="../assents/icons/rightArrow.svg" alt="arrow" ></div>',
    });
    $('.section2-cards').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 5,
        arrows: true,
        prevArrow: '<div class="prev-arrow"><img src="../assents/icons/leftArrow.svg" alt="arrow" ></div>',
        nextArrow: '<div class="next-arrow"><img src="../assents/icons/rightArrow.svg" alt="arrow" ></div>',
    });
    $('.section3-cards').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 5,
        arrows: true,
        prevArrow: '<div class="prev-arrow"><img src="../assents/icons/leftArrow.svg" alt="arrow" ></div>',
        nextArrow: '<div class="next-arrow"><img src="../assents/icons/rightArrow.svg" alt="arrow" ></div>',
    });
});