// javascript document
jQuery(document).ready(function() {

  $('ul.menu > li').hover(
    function() {
      $(this).children(".submenu").stop().slideDown();
    },
    function() {
      $(this).children(".submenu").stop().slideUp();
    }
  );

  var now = 0;

  $('.slide a').eq(0).siblings('a').hide();
  setInterval(function(){
    if (now == 2) {
      $("div.slide a").eq(now).fadeOut();
      $("div.slide a").eq(0).fadeIn();
      now = 0;
      console.log('reset');
    }
    else{
      $("div.slide a").eq(now).fadeOut();
      $("div.slide a").eq(now + 1).fadeIn();
      now++;
      console.log(now);
    }

  }, 3000)

  $(".notice li:first-child").click(function(){
    $('div#modal').addClass('active');
    $('.btn').click(function(){
      $('div#modal').removeClass('active');
    })
  });


  // $('.slide a:gt(0)').hide();
  // setInterval(function() {
  //   $('.slide a:first-child').fadeOut()
  //     .next('a').fadeIn()
  //     .end().appendTo('.slide');
  // }, 3000);

  // $('div.slide a:gt(0)').hide();
  // setInterval(function() {
  //   $('div.slide a:first-child').fadeOut()
  //     .next('a').fadeIn()
  //     .end().appendTo('div.slide');
  // }, 3000);

  // $("div.slide a").eq(0).siblings().hide();

  // function slide(){
  //   console.log('hi');
  //   if (now == 2) {
  //     $("div.slide img").eq(now).removeClass("active");
  //     $("div.slide img").eq(0).addClass("active");
  //     now = 0;
  //   }
  //   else{
  //     $("div.slide img").eq(now).removeClass("active");
  //     $("div.slide img").eq(now + 1).addClass("active");
  //     now++;
  //   }
  //
  // };




});
