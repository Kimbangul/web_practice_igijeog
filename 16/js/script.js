$(document).ready(function(){
    function navMenu_init(){
        var depth1 = $('header nav .depth-1 > li');

        depth1.hover(function(){
            $('header nav .depth-2').stop().slideDown(300);
            $('header').addClass('active');
        }, function(){
            $('header nav .depth-2').stop().slideUp(300);
            $('header').removeClass('active');
        });
    }

    function slide_init(){
        var slide = $('.slide .slider');
        var currentSlide = 0;
        var currentPosition = 0;
        var slideInterval = -1200;

        function slideAni(){
            if (currentSlide == 2){
                slide.animate({"left":"0"}, 500);
                currentSlide = 0;
                currentPosition = 0;
            }
            else{
                currentPosition += slideInterval;

                slide.animate({"left":currentPosition}, 500);
                currentSlide++;
            }
        }

        setInterval(slideAni, 3000);
    }

    function modal_init(){
        var modal = $('#modal');
        var closeBtn = $('#modal .close-btn');

        $('.board .notice > ul > li:first-child').click(function(e)
        {
            e.preventDefault();
            modal.addClass('active');
        });

        closeBtn.click(function(e){
            e.preventDefault();
            modal.removeClass('active');
        })
    }

    navMenu_init();
    slide_init();
    modal_init();
});