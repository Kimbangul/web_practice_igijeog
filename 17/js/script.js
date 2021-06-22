$(document).ready(function(){

    function navMenu_init(){
        var depth1 = $('header nav .depth-1 > li');

        depth1.hover(function(){
            $(this).find('.depth-2').stop().slideDown(500);
        },function(){
            $(this).find('.depth-2').stop().slideUp(500);
        });

    }

    function slide_init(){
        var slider = $('.slide .slider');
        var currentPosition = 0;
        var currentSlide = 0;
        var slideInterval = -800;

        function slideAni(){
            console.log(currentSlide);
            console.log(currentPosition);
            if (currentSlide == 2){
                currentPosition = 0;
                slider.stop().animate({"left":"0"},500);
                currentSlide = 0;
            }
            else{
                currentPosition += slideInterval;
                slider.stop().animate({"left" : currentPosition},500);
                currentSlide++;
            }
        }

        setInterval(slideAni, 3000);
    }

    function modal_init(){
        var modal = $('#modal');       

        $('#contents .board .notice ul > li:first-child').click(
            function(){
                modal.addClass('active');
            }
        );

        $('#modal .close-btn').click(function(){
            modal.removeClass('active');

        })

    }

    navMenu_init();
    slide_init();
    modal_init();

});