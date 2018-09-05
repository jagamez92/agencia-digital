$(document).ready(function () {
    $('.proyect').on('click',function (e) {
        e.preventDefault();
        var imagen = $(this).css('backgroundImage').slice(5, -2);

        var contentPortfolio = $(this).find('.content-portfolio').clone();

        var modal = '<div class="modal-portfolio" id="modalPortfolio">'+
                        '<div class="container-modal">'+
                             '<div class="imagen" style="background-image: url('+imagen+')"></div>'+

                             '<div class="btn-cerrar" id="btnCerrar">'+
                                '<i class="fas fa-times"></i>'+
                            '</div>'+
                        '</div>'+
                    '</div>';


        $('#portfolio').after(modal);

        $('#modalPortfolio .imagen').after(contentPortfolio);

        $('#btnCerrar').on('click', function () {
            $('#modalPortfolio').remove();
        });
    });
});

