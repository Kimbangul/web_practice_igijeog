// javascript document
jQuery(document).ready(function(){

// dropdown submenu
$('header>nav.menu>ul>li').hover(
  function(){
    $(this).find('ul.submenu').stop().slideDown(600);
  },
  function(){
    $(this).find('ul.submenu').stop().slideUp(600);
  }
);


// imgslide

var img_num;
$('div.imgslide>div.img_container>a').eq(0).siblings().hide();

$('div.imgslide>div.slide_control>img').click(
  function(){
    img_num = $('div.imgslide>div.slide_control>img').index(this);

    console.log(img_num);
    $('div.imgslide>div.img_container>a').eq(img_num).fadeIn(1000).siblings().fadeOut(1000);

    $('div.imgslide>div.slide_control>img').eq(img_num).addClass('active').siblings('img').removeClass('active');
  }
)


// modal layer

$('div.partner>a>img').click(function(e){
  e.preventDefault();
  $('div#modal').addClass('active');
  $('div#modal>div.modal_layer>button').click(function(){
    $('div#modal').removeClass('active');
  })
})


// new window
$('header>nav.menu>ul>li:last-child').click(function(){
  window.open('contact.html','child','toolbar=no, location=no, status=no, resizable=no, scrollbars=no, menubars=no, width=500, height = 350');

})

})
