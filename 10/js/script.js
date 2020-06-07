// Javascript document

jQuery(document).ready(function() {

  // submenu
  $('header ul.menu > li').hover(
    function() {
      $(this).find('ul.submenu').stop().slideDown(300);
    },
    function() {
      $(this).find('ul.submenu').stop().slideUp(300);
    }
  )

  // imgslide
  $('div.imgslide').find('a').eq(0).siblings('a').css({
    "width": "0%"
  });
  var now = 0;
  var img = 2;

  function slide() {
    if (img == now) {
      $('div.imgslide').find('a').eq(now).animate({
        "width": "0%"
      });
      $('div.imgslide').find('a').eq(0).animate({
        "width": "100%"
      });
      now = 0;
      setTimeout(slide, 2000);
    } else {
      $('div.imgslide').find('a').eq(now).animate({
        "width": "0%"
      });
      $('div.imgslide').find('a').eq(now + 1).animate({
        "width": "100%"
      });
      now++;
      setTimeout(slide, 2000);
    }
  }

  slide();

  // modal_layer

  $('div.partner > a > img').click(function(e) {
    e.preventDefault();
    $('div#modal').addClass('active');

    $('div#modal .btn').click(function(e) {
      e.preventDefault();
      $('div#modal').removeClass('active');
    });
  });

  // popup

  // $('ul.menu > li:last-child').click(
  //   function(){
  //     window.open('contact.html', 'child', 'toolbar = no, location = no, scrollbars = no, resizeable = no, status = no, menubar = no, width = 500, height = 300');
  //   }
  // );


})

// POPUP

var win;

function winOpen() {
  win = window.open('contact.html', 'child', 'toolbar = no, location = no, scrollbars = no, resizeable = no, status = no, menubar = no, width = 500, height = 300')
};
