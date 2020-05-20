// Javascript document

jQuery(document).ready(function(){

// dropdown menu

  $('nav ul.menu li').hover(
    function(){      
      $(this).stop().find('.submenu').slideDown();
    },
    function(){
      $(this).stop().find('.submenu').slideUp();
    }
  );

  // image slide
  var now = 0;
  var img = 2;
  function start(){

    $('.imgslide > a').eq(0).animate({"width":"1200px"})
    .siblings().animate({"width":"0"});
    now = 0;
    setTimeout(slide, 3000);
  }


  function slide(){
    if (now == img){
      start();
    }
    else{
      $('.imgslide > a').eq(now).animate({"width":"0"});
      $('.imgslide > a').eq(now+1).animate({"width":"1200px"});
      now++;
      setTimeout(slide, 3000);
    }



  }

start();


// tabmenu

$('.tabmenu').find('.tabname').click(function(e){
  e.preventDefault();
  $(this).addClass('active')
  .find('.tab_contents').addClass('active');
  $(this).siblings().removeClass('active')
  .find('.tab_contents').removeClass('active');
});


// modal_layer

$('ul.notice > li:first-child').click(function(e){
  e.preventDefault();
  $('div#modal').addClass('active');

  $('.modal_layer div.btn').click(function(e){
      e.preventDefault();
      $('div#modal').removeClass('active');
  })

})

})
