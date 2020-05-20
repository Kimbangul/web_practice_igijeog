// javascript document

jQuery(document).ready(function(){


  // dropdown menu

  $('nav .menu > li').hover(
    function(){

      $(this).find('ul.submenu').stop().slideDown(500);

    },
    function(){

      $(this).find('ul.submenu').stop().slideUp(500);
    }

  );

  // image slide
  $('.img_container a').eq(0).siblings().css({"width":"0px"});
  var now = 0;
  var img = 2;

  function slide(){
    if (now == img){
      $('.img_container a').eq(now).animate({"width":"0px"});
      $('.img_container a').eq(0).animate({"width":"100%"});
      now = 0;
    }
    else{
      $('.img_container a').eq(now).animate({"width":"0px"});
      $('.img_container a').eq(now+1).animate({"width":"100%"});
      now++;
    }
  }

  setInterval(slide, 2000);


  // popup

  function popup(){
    var win = window.open('popup.html', 'child', 'toolbar = no, location = no, status = no, menubar = no, resizeable = no, scrollbars = no, width = 400, height = 300');
  }

  $('.info img').click(function(){

    popup();
  })

})
