

$(document).ready(function () {

    //funckija za pokazivanje lozinke
    $('.password span').click(function () {
        $(this).toggleClass('fa-eye  fa-eye-slash');

        var type = $(this).parent().siblings('input').attr('type');

        if (type == 'password') {
            $(this).parent().siblings().attr('type', 'text');
        } else {
            $(this).parent().siblings().attr('type', 'password');
        }
    });


    //scroll efect
    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.hideme').each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({'opacity': '1'}, 400);

            }

        });

    });

    $(".fancybox").fancybox();


    //funckija za pokazivanje i sakrivanje tabele
    var smallShow = false;  // false ovde jer na pocetku nije vidljiva istorija

    $('.showOrderHistory').click(function () {
        $('.hidingArticle').slideToggle();
        smallShow = !smallShow;
        $(this).html(function (i, v) {
            return v === 'Show order history<span class="fa fa-caret-down"></span>' ? 'Hide order history<span class="fa fa-caret-up"></span>' : 'Show order history<span class="fa fa-caret-down"></span>';
        });
    });
    $(window).resize(function () {
        if ($(window).width() >= 768) {
            $('.hidingArticle').show();
        } else {
            if (smallShow)
                $('.hidingArticle').show();
            else
                $('.hidingArticle').hide();
        }
    });

    //slajder
    $("#owl-demo").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });
    
    //validacija forme
    $('#forma, #formBlogPost, #hello-form').validator();
});

