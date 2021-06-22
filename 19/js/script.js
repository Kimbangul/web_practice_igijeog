$(document).ready(function(){

    function navMenu_init(){
        var depth1 = $('header nav .depth-1 > li');

        depth1.hover(function(){
            $(this).find('.depth-2').stop().slideDown(500);
        }, function(){
            $(this).find('.depth-2').stop().slideUp(500);
        });

    }

    function slide_init(){
        var currentSlide = 0;
        var currentPosition = 0;
        var slider = $('.slide .slider');
        var slideInterval = -1200;
        
        function slideAni(){
            if(currentSlide == 2){
                currentPosition = 0;
                currentSlide = 0;
            }
            else{
                currentPosition+=slideInterval;
                currentSlide++;
            }
            slider.stop().animate({"left" : currentPosition}, 700);
        }

        setInterval(slideAni, 3000);

    }

    function modal_init(){
        var modal = $('#modal');
        var closeBtn = $("#modal .close-btn");

        $('.content .notice ul > li:first-child').click(function(e){
            e.preventDefault();
            modal.addClass('active');
        });

        closeBtn.click(function(e){
            e.preventDefault();
            modal.removeClass('active');
        });


    }

    navMenu_init();
    slide_init();
    modal_init();
});