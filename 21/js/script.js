$(document).ready(function(){

    function navMenu_init(){
        var depth1 = $('header nav .depth-1 > li');
        var depth2 = $('header nav .depth-2')

        depth1.hover(function(){
             $('header').addClass('active');
             depth2.stop().slideDown(400);
        },function(){
            $('header').removeClass('active');
            depth2.stop().slideUp(300);
        })
    }

    function slide_init(){

        
        var slide = $('.slide .img-box');
        var currentSlide = 0;

        slide.eq(0).siblings('.img-box').hide();

        function slideAni(){
            console.log(currentSlide);
            if (currentSlide == 2){
                console.log('초기화!');
                slide.eq(currentSlide).stop().fadeOut(500);
                slide.eq(0).fadeIn(500);
                currentSlide = 0;
            }
            else{
                slide.eq(currentSlide).stop().fadeOut(500);
                slide.eq(currentSlide+1).fadeIn(500);
                currentSlide++;
            }
        }

        setInterval(slideAni, 3000);
    }

    function modal_init(){
        var modal = $('#modal');
        var closeBtn = $('#modal .close-btn');

        $('.board .notice ul > li:first-child').click(function(e){
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