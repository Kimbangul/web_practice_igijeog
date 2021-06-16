$(document).ready(function(){

    function navMenu_init(){
        var depth1 = $('header nav .depth-1 > li');
       
        depth1.click(function(e){
            e.preventDefault();

            if($(this).hasClass('active')){
                $(this).removeClass('active').find('.depth-2').stop().slideUp(300);
            }
            else{
                $(this).addClass('active').find('.depth-2').stop().slideDown(300);
                $(this).siblings('li').removeClass('active').find('.depth-2').stop().slideUp(300);
            }           
        });

    }

    function slide_init(){
        var slider = $('#content .slide > .slider');
        var currentSlide = 0;
        var currentPosition = 0;
        var slideInterval = 800;

        function slideAnimate(){
            if (currentSlide == 2){
                slider.animate({"left":"0"},700)
                currentSlide = 0;
                currentPosition = 0;
            }
            else{
                slider.animate({"left": currentPosition - slideInterval},700);
                currentSlide++;
                currentPosition -= slideInterval;
            }
        }

        setInterval(slideAnimate, 3000);
    }

    function tapMenu_init(){
        var menuList = $('#content .board > .tap-menu .tap-name > a');

        menuList.click(function(e){
            e.preventDefault();

            if($(this).hasClass('notice')){
                $('#content .board > .tap-menu .notice').addClass('active').siblings().removeClass('active');
            }
            else{
                $('#content .board > .tap-menu .gallery').addClass('active').siblings().removeClass('active');
            }

        });

    }

    function modal_init(){
        var noticeBtn = $('#content .board > .tap-menu .notice > ul > li:first-child');
        var closeBtn = $('#modal .close-btn');

        noticeBtn.click(function(e){
            e.preventDefault();

            $('#modal').addClass('active');            

        });

        closeBtn.click(function(e){
            e.preventDefault();
            $('#modal').removeClass('active');  
        });
    }

    navMenu_init();
    tapMenu_init();
    slide_init();
    modal_init();
});