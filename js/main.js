$(document).ready(function(){

    // Hide and show Button on scroll 

    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $('.scrolltop').fadeIn(500);
        }else{
            $('.scrolltop').fadeOut(500);
        }
    });

    // scroll top animation

    $('.scrolltop').click(function(){
        $('html,body').animate({scrollTop: 0}, 1000);
    });

});