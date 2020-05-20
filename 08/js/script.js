// javascript documnet

jQuery(document).ready(function(){

// submenu
$('nav > ul.menu > li').hover(
  function(){
    $(this).find('ul.submenu').stop().slideDown(500);
  },
  function(){
    $(this).find('ul.submenu').stop().slideUp(500);
  }
)

// imgslide

var now = 0;
var img = 4;
$('.imgslide > a').eq(0).siblings('a').css({'width':'0'});

function imgslide(){
  if(now == img){
    $('.imgslide > a').eq(0).animate({'width':'100%'});
    $('.imgslide > a').eq(now).animate({'width':'0'});
    now = 0;
    setTimeout(imgslide,2000)
  }
  else{
    $('.imgslide > a').eq(now+1).animate({'width':'100%'});
    $('.imgslide > a').eq(now).animate({'width':'0'});
    now++;
    setTimeout(imgslide,2000)
  }
}

imgslide();

// popup_layer
$('div.img_wrapper').click(
  function(e){
    e.preventDefault();
    $('div#popup').addClass("active");
    $('div.btn').click(
      function(){
        $('div#popup').removeClass("active");
      }
    )
  }
)




})
