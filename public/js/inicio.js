$(document).ready(function () {

    'use strict';

    $(window).on('scroll', function () {
        var menu_area = $('.nav-area');
        if ($(window).scrollTop() > 200) {
            menu_area.addClass('sticky_navigation');
        } else {
            menu_area.removeClass('sticky_navigation');
        }
    });

    //************ smooth scroll js

    $('a.smooth-menu,a.dadada,a.skill-btn').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
    });

    //*********** scrollspy js

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });



});
