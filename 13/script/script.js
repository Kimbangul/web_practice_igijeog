$(document).ready(function(){

    function navMenu_init(){
        var depth1List = $("header nav .depth-1");
        var depth2List = $("header nav .depth-2");

        depth1List.hover(function(){
            depth2List.stop().slideDown(500);
        }, function(){
            depth2List.stop().slideUp(300);
        });
    }

    function slide_init(){
        var slider = $('#slide .slide-wrap');
        var positionInterval= -1200; 
        var currentPosition = 0;
        var currentSlide = 0;

        function slideAni(){
            if (currentSlide == 2){
                slider.animate({"left" : "0"});
                currentSlide = 0;
                currentPosition = 0;
            }
            else{
                currentPosition+=positionInterval;
                slider.animate({"left" : currentPosition});
                currentSlide++;
                
            }
        }

        setInterval(slideAni, 3000);

        
    }

    function tapMenu_init(){
        var menuCate = $('#content .tap-menu .menu-name > a');

        menuCate.click(function(e){
            e.preventDefault();
            if ($(this).hasClass('active') == false){
                $(this).addClass('active').siblings().removeClass('active');

                if (menuCate.eq(0).hasClass('active') == true){
                    $('#content .tap-menu .notice').addClass('active').siblings().removeClass('active');
                }
                else{
                    $('#content .tap-menu .gallery').addClass('active').siblings().removeClass('active');
                }
            }

        })

    }

    function modal_init(){
        var modal = $('#modal');
        var notice = $('#content .notice ul>li:first-child');
        var closeBtn = $('#modal .close-btn');

        notice.click(function(e){
            e.preventDefault();
            modal.addClass('active');
        });
        
        closeBtn.click(function(e){
            modal.removeClass('active');
        });
    }

    navMenu_init();
    slide_init();
    tapMenu_init();
    modal_init();
});