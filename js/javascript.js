$(document).ready(function () {
    $('a[href^="#"]').click(
        function (e) {

            //No empty link
            if (this.hash !== "") {

                /*Stop the program from doing what it usually do.
                Mainly instant sumonning of the desired section of the page*/
                e.preventDefault();

                //We transfer the anchor into a variable for aestetics mostly
                hash = this.hash;

                /*We animate the whole page using the scrollTop method.
                That method can set the scrollbar to a specific position
                determined by the offset method here.*/
                $('html, body').animate(
                    {
                        scrollTop: $(hash).offset().top

                    }
                    , 1000
                    , function () {

                        //Then we add the hash in the url
                        location.hash = hash;
                    }
                );
            }
        }
    );
});

/*
$(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() >= 100) {
                    $('.nom').fadeOut(1000); // ici la classe menu .menu représente donc mon menu qui dois disparaître au scrollbottom et réapparaître au scrolltop
 
                }else {
                    $(".nom").fadeIn(1000);
                }
            });
 
        });*/

(function() {
    var documentElem = $(document),
        nav =  $('nav'),
        lastScrollTop = 0;

    documentElem.on('scroll', function() {
        var currentScrollTop = $(this).scrolltop();

        if (currentScrollTop > lastScrollTop) nav.addClass('hidden');

        else nav.removeClass('hidden');

        lastScrollTop = currentScrollTop;
    });
})();
























