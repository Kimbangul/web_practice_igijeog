$(document).ready(
    function(){

        function navMenu_init(){
            var depth1 = $('header nav .depth-1 > li');

            depth1.hover(
                function(){
                    $(this).find('ul.depth-2').stop().fadeIn(300);
                },
                function(){
                    $(this).find('ul.depth-2').stop().fadeOut(300);
                }
            );
        }


        function slide_init(){
            var slider = $('.slide .slider');
            var currentSlide = 0;
            var slidePosition = 0;
            var slideInterval = -800;

            function slideAni(){
                if (currentSlide == 2){
                    slidePosition = 0;
                    currentSlide = 0;
                }
                else{
                    slidePosition += slideInterval;
                    currentSlide++;
                }
                slider.stop().animate({"left":slidePosition}, 700);
            }

            setInterval(slideAni, 3000);
        }

        function modal_init(){
            var modal = $('#modal');

            $('.notice ul > li:first-child').click(function(e){
                e.preventDefault();

                modal.addClass('active');
            });
            
            
            $('#modal .close-btn').click(function(e){
                e.preventDefault();

                modal.removeClass('active');
            });
            
        }


        slide_init();
        navMenu_init();
        modal_init();
    }
);