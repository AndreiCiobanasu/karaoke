$(document).ready(function() {


	$('#menu_open').on('click', function(){
        $('#section_menu').css('display','flex');
        $('#menu_open').css('display','none');
        $('body').css('position', 'fixed');
    });
    
    $('#section_menu a').on('click',closeMenu);


    function closeMenu(){
        $('#section_menu').css('display','none');
        $('#menu_open').css('display','flex');
        $('body').css('position', 'static');

    }

});