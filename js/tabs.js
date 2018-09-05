$(document).ready(function () {
    var tab = $('.encabezados-tabs li a');
    var contenidoTab = $('.contenido-tabs');
    var bg = $('.bg-izq');

    tab.first().addClass('active');
    contenidoTab.hide();
    contenidoTab.first().show();

    bg.hide();
    bg.first().show();

    tab.on('click', function (e) {
        e.preventDefault()
        tab.removeClass('active');
        $(this).addClass('active');

        contenidoTab.hide();
        bg.hide();
        var href = $(this).attr('href');
        $(href).show();

    })
});
