$(function () {
    $('.bike-slider, .slider__items').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $(".menu, .bike__column").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        // $('.menu').removeClass('close');
        $('.header__burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(document).ready(function () {
    $('.menu__link, .menu__up, .bike__link').click(function (event) {
        $('.header__burger, .menu').removeClass('active');
        $('body').removeClass('lock');
        // $('.menu__link').addClass('close');
        $('.menu__up').addClass('menu-up__visible');
    });
});

$(document).ready(function () {
    $('.menu__up').click(function (event) {
        $('.header__burger, .menu').removeClass('active');
        $('body').removeClass('lock');
        // $('.menu__link').addClass('close');
        $('.menu__up').removeClass('menu-up__visible');
    });
});