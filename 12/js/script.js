$(document).ready(function(){

    console.log('ready');

    function navMenu_init(){
        var $depth1 = $('header nav ul.depth-1>li');
        var $depth2 = $('header nav ul.submenu');

        $depth1.hover(function(){

            console.log('on');
            $depth2.stop().slideDown(300);

        },
        function(){

            console.log('off');
            $depth2.stop().slideUp(300);

        });
    }

    function slide_init(){
        var $sliderWrap = $('#slide .slide-wrap');
        var $slideImg = $('#slide .img-box');
        var $currentSlide = 0;        
        var $slideInterval = -1200;
        

        function slideAnimate(){            
            if ($currentSlide == 2){
                $sliderWrap.animate({'left' : '0'}, 500);
                $currentSlide = 0;            
               
            }
            else{
                var $currentPosition = parseInt($('#slide .slide-wrap').css('left'));
                $sliderWrap.animate({'left': $currentPosition + $slideInterval + 'px'}, 500);
                $currentSlide++;               
            }
        }

        setInterval(slideAnimate, 3000);
    }

    function tapMenu_init(){
        var $tapMenu = $('.tap-menu');
        var $tapMenuCate = $('.tap-menu .tap-menu-list > div');
        
        $tapMenuCate.click(
            
            function(){
                console.log($(this));
                if ($(this).hasClass('first-menu')){
                    $tapMenu.addClass('first-menu');
                    $tapMenu.removeClass('second-menu');
                }
                else{
                    $tapMenu.removeClass('first-menu');
                    $tapMenu.addClass('second-menu');
                }
            }
        );

    }

    function modal_init(){
        $('#content > .tap-menu .notice .notice-list > li:first-child').click(
            function(e){
                e.preventDefault();
                $('#modal').addClass('active');
            }
        );

        $('#modal a.btn').click(function(e){
            e.preventDefault();
            $('#modal').removeClass('active');

        });
    }

    navMenu_init();
    slide_init();
    tapMenu_init();
    modal_init();
});