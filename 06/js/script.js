// javascript document

jQuery(document).ready(function(){
// dropdown menu

  $('header .menu > li').hover(
    function(){
      $('div.menuwrap').stop().animate({"height":"250px"});
      $('ul.submenu').stop().slideDown(500);

    },

    function(){
      $('ul.submenu').stop().slideUp();
      $('div.menuwrap').stop().animate({"height":"100px"})
    }
  )

  // image slide

  var now = 0;
  var img = 2;
  $('div.imgslide a').eq(0).siblings().hide();

  function slide(){
    if (now == img){
      $('div.imgslide a').eq(now).fadeOut(1000);
      $('div.imgslide a').eq(0).fadeIn(1000);
      now = 0;
    }
    else{
      $('div.imgslide a').eq(now).fadeOut(1000);
      $('div.imgslide a').eq(now+1).fadeIn(1000);
      now++;
    }
  }

  setInterval(slide, 3000);

  // modal_layer

  $('.contents .notice li:nth-child(4)').click(function(e){
    e.preventDefault();
    $('div#modal').addClass('active');

    $('div#modal .btn').click(function(e){
      e.preventDefault();
      $('div#modal').removeClass('active');
    })
  })

})
