$(document).ready(function(){

    function navMenu_init(){
        $('header nav .depth-1').hover(function(){
            $('header').addClass('active');
            $('header nav .depth-2').stop().slideDown(300);
        }, function(){
            $('header').removeClass('active');
            $('header nav .depth-2').stop().slideUp(300);
        });

    }

    function slide_init(){
        var slider = $('.slide .slider');
        var currentSlide = 0;
        var currentPosition = 0;
        var slideInteval = -1200;

        function slideAni(){
            if (currentSlide == 2){
                slider.animate({"left" : 0}, 500);
                currentPosition = 0;
                currentSlide = 0;
            }
            else{
                slider.animate({"left" : currentPosition + slideInteval}, 500);
                currentPosition+=slideInteval;
                currentSlide++;
            }
        }

        setInterval(slideAni, 3000);

    }

    function modal_init(){
        var closeBtn = $('#modal .close-btn');
        
        $('.board .notice > li:first-child').click(function(e){
            e.preventDefault();
            $('#modal').addClass('active');
        });

       closeBtn.click(function(e){
            e.preventDefault();
            $('#modal').removeClass('active');
        });

        
    }

    navMenu_init();
    slide_init();
    modal_init();
});