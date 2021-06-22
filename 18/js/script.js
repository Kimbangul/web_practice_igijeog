$(document).ready(function(){

    function navMenu_init(){

        var depth1 = $('header nav .depth-1 > li');

        depth1.hover(function(){
            $(this).find('ul.depth-2').stop().slideDown(300);
        }, function(){
            $(this).find('ul.depth-2').stop().slideUp(300);
        });

    }

    function slide_init(){
        var slider = $('.slide .slider');
        var slide = $('.slide .slider > .img-box')
        var currentSlide = 0;
       slide.eq(currentSlide).siblings().hide();

       function slideAni(){

        if (currentSlide == 2){
            slide.eq(0).fadeIn(500)
            slide.eq(currentSlide).fadeOut(700);  
            currentSlide = 0; 
        }
        else{
            slide.eq(currentSlide+1).fadeIn(500)
            slide.eq(currentSlide).fadeOut(700);   
            currentSlide++;  
        }


       }

       setInterval(slideAni, 3000);

    }

    function tapMenu_init(){
        var tapMenuCate = $('.tap-menu .tap-name > a');

        tapMenuCate.click(function(e){
            e.preventDefault();

            if ($(this).hasClass('active') == false){
                if ($(this).hasClass('notice')){                   
                    $('.tap-menu > .notice').addClass('active').siblings('.gallery').removeClass('active');
                }
                else{                    
                    $('.tap-menu > .gallery').addClass('active').siblings('.notice').removeClass('active');
                }
                $(this).addClass('active').siblings().removeClass('active');
            }

        });
    }

    function modal_init(){
        var modal = $('#modal');
        var closeBtn = $('#modal .close-btn');

        $('div.board > div.tap-menu > div.notice > ul> li').click(function(e){
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
    tapMenu_init();
    modal_init();
});