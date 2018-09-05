$(document).ready(function () {

    var btnVolverArriba = $('#btnVolverArriba');

    $(window).on('scroll', function () {
        var windowHeight = $(window).outerHeight();

        if ($(window).scrollTop() >= windowHeight / 2) {
            btnVolverArriba.css('margin-right', 0);
        }else{
            btnVolverArriba.css('margin-right', '-100px');
        }
    });

    $('a.volver-arriba').on('click', function (e) {
        e.preventDefault();

        if ($(window).scrollTop() != 0) {
            $('html, body').stop().animate({scrollTop: 0}, 500);
        }
    });

    $('a.scroll-suave').on('click', function (e) {
        e.preventDefault();

        var seccionOffsetTop = $($(this).attr('href')).offset().top - 83;

        $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 500);

    });

});
