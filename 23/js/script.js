$(document).ready(function(){

    function navMenu_init(){
        var $depth1 = $('header nav .depth-1 > li');

        $depth1.hover(function(){
            $(this).find('.depth-2').stop().slideDown(300);
        },function(){
            $(this).find('.depth-2').stop().slideUp(300);
        });
    }

    function slide_init(){
        var currentSlide = 0;
        var slideInterval = -800;
        var slidePosition = 0;
        var $slider = $('#slide .slider');

        function slideAni(){
            if (currentSlide == 2){
                slidePosition = 0;
                currentSlide = 0;
            }
            else{
                slidePosition += slideInterval;
                currentSlide++;
            }
            $slider.stop().animate({"left":slidePosition}, 500);
        }

        setInterval(slideAni, 3000);
        
    }

    function modal_init(){
        var $modal = $('#modal');
        var $closeBtn = $('#modal .close-btn');

        $('#board .notice ul > li:first-child').click(function(e){
            e.preventDefault();
            $modal.addClass('active');
        });

        $closeBtn.click(function(e){
            e.preventDefault();
            $modal.removeClass('active');
        });
    }

    navMenu_init();
    slide_init();
    modal_init();

});