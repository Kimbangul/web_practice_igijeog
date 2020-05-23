// javascript document
jQuery(document).ready(function(){

// dropdown menu

$('nav > ul.menu > li').hover(
  function(){
    $(this).find('ul.submenu').stop().slideDown();
  },
  function(){
    $(this).find('ul.submenu').stop().slideUp();
  }
);


// imgslide
var now = 0;
var img = 0;

$('div.imgslide > a').eq(now).siblings('a').hide();

$('div.imgslide > div.btn').click(function(){
  if ($(this).attr('name') === 'left'){
    prev();
  }
  else{
    next();
  }

});

function prev(){
  if (now == 0){
    return false;
  }
  else{
    $('div.imgslide > a').eq(now).fadeOut(1000);
    $('div.imgslide > a').eq(now-1).fadeIn(1000);
    now--;
  }
}

function next(){
  if (now == 2){
    return false;
  }
  else{
    $('div.imgslide > a').eq(now).fadeOut(1000);
    $('div.imgslide > a').eq(now+1).fadeIn(1000);
    now++;
  }
}

// popup

$('div.partner').click(function(e){
  e.preventDefault();
  console.log('click');
});


// modal
  $('div.partner a').click(function(e){
    e.preventDefault();
    $('div#popup').addClass('active');
     $('div#popup > div.popup_layer').click(function(e){
       e.preventDefault();
       $('div#popup').removeClass('active');

     })
  })


})
