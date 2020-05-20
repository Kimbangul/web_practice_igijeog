// javascript document

jQuery(document).ready(function() {


  // mainmenu

  var $menu_item = $('nav ul.menu li');

  $menu_item.hover(
    function() {
      $(this).find('ul.submenu').stop().slideDown();
    },
    function() {
      $(this).find('ul.submenu').stop().slideUp();
    }
  );

  // tabmenu
  $('div.tab_cate').click(function(e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');

    if ($('div.tab_cate.notice_tab').hasClass('active') == true) {
      $('div.tab_contents > .notice').addClass('active')
        .siblings().removeClass('active');
      console.log('notice');
    } else {
      $('div.tab_contents > .notice').removeClass('active')
        .siblings().addClass('active');
      console.log('gallery');
    }
    return false;
  })

  // modal layer

  $('.tab_contents .notice ul>li:first-child').click(function(e) {
    e.preventDefault();
    $('div#modal').addClass('active');
    $('div.btn').click(function() {
      $('div#modal').removeClass('active');
    })
  })

  // img slide

  var now = 0;
  $('div.imgslide > a').eq(0).siblings().animate({"width":"-800px"});


  var slide = function(){
    if (now == 2){
      $('div.imgslide > a').eq(0).siblings().animate({"width":"-800px"});
      $('div.imgslide > a').eq(0).animate({"width":"800px"});


      now = 0;

    }
    else{
      $('div.imgslide > a').eq(now).animate({"width":"-800px"});

      $('div.imgslide > a').eq(now+1).animate({"width":"800px"});


      now++;
  }
}

  setInterval(slide, 3000);


//
// $('div.imgslide > a').eq(0).siblings().css("margin-left","-2000px");
// var slide = function(){
//   if (now == 2){
//     $('div.imgslide > a').eq(0).css("margin-left","0px");
//     $('div.imgslide > a').eq(0).siblings().css("margin-left","-2000px");
//     now = 0;
//
//   }
//   else{
//     $('div.imgslide > a').eq(now).css("margin-left","-2000px");
//     $('div.imgslide > a').eq(now+1).css("margin-left","0px");
//     now++;
// }
// }




  // $('div.imgslide').click(function(){
  //
  //   if (now == 2){
  //     $('div.imgslide > a').eq(0).css("margin-left","0px");
  //     $('div.imgslide > a').eq(0).siblings().css("margin-left","-2000px");
  //     now = 0;
  //
  //   }
  //   else{
  //     $('div.imgslide > a').eq(now).css("margin-left","-2000px");
  //     $('div.imgslide > a').eq(now+1).css("margin-left","0px");
  //     now++;
  //   }
  //
  // })

})
