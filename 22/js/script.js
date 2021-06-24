$(document).ready(function(){

    function navMenu_init(){
        var $depth1 = $('header .menu .depth-1 > li');
        var $depth2 = $('header .menu .depth-2');        

        $depth1.hover(function(){
            $('header').addClass('active');
            $depth2.stop().slideDown(400);

        }, function(){
            $('header').removeClass('active');
            $depth2.stop().slideUp(200);
        });

    }

    function slide_init(){

        var currentSlide = 0;
        var currentPosition = 0;
        var slideInerval = -1200;

        function slideAni(){
            if (currentSlide == 2){
                currentPosition = 0;
                currentSlide = 0;
            }
            else{
                currentPosition += slideInerval;
                currentSlide++;
            }

            $('#slide .slider').stop().animate({"left": currentPosition}, 700);

        }

        setInterval(slideAni, 3000);

    }

    function modal_init(){
        var $modal = $('#modal');
        var $closeBtn = $('#modal .close-btn');

        $('#board .notice ul > li').click(function(e){
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