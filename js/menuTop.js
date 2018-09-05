$(document).ready(function () {
   var menu = $('#nav_bar');

   $(window).on('scroll', function () {

       if ( $(window).scrollTop() > 0) {
           menu.removeClass('menu-on-top');
       }
       else {
           menu.addClass('menu-on-top');
       }
   })

});
