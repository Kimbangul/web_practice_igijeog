// javascript document

jQuery(document).ready(function(){

// submenu
$('nav > ul.menu li').hover(
  function(){
    $(this).find('ul.submenu').stop().slideDown();

  },
  function(){
    $(this).find('ul.submenu').stop().slideUp();
  }
)

// imgslide



var slide = function(){
  if (now == 2){
    $('.imgslide a').eq(now).fadeOut(1000);
    $('.imgslide a').eq(0).fadeIn(1000);
    now = 0;
  }
  else{
    $('.imgslide a').eq(now).fadeOut(1000);
    $('.imgslide a').eq(now+1).fadeIn(1000);
    now++;
  }
}
var now = 0;
  $('.imgslide a').eq(0).siblings().hide();
setInterval(slide, 3000);


// tabmenu
  $('.tabname > .tab').click(function(e){
    e.preventDefault();
    $(this).addClass('active')
    .siblings().removeClass('active');

    if ($('.tab.notice').hasClass('active') == true){
      $('.tab_contents.notice').addClass('active')
      .siblings('.gallery').removeClass('active');

    }
    else{
      $('.tab_contents.notice').removeClass('active')
      .siblings('.gallery').addClass('active');
    }

  })

// modal

$('.tab_contents.notice > ul li:first-child').click(function(e){
  e.preventDefault();
  $('div#modal').addClass('active');
  $('.modal_contents > .btn').click(function(e){
    e.preventDefault();
    $('div#modal').removeClass('active');
  })
})




})
