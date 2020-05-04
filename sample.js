$(function() {


  function toggle(){
  var a = $('.slide').index($('.active'));
  $('.change-btn').show();
  if(a == 0){
    $('.prev-btn').hide();
  }else if(a == 3){
    $('.next-btn').hide();
  }
}


$('.change-btn').click(function(){
  var $display = $('.active');
  $display.removeClass('active');
  if($(this).hasClass('next-btn')){
    $display.next().addClass('active');
    $('.te').hide();
    //$('.te').fadeIn(1500);
  }else{
    $display.prev().addClass('active');
    $('.te').hide();
  //  $('.te').fadeIn(500);
  }

  var sW = window.innerWidth;
  if(sW<500){
    $('.te').hide();
  }
  toggle();
});


$('.menu-btn').on('click', function(){
  $('.menu').toggleClass('is-active');
});


var sW = window.innerWidth;

if(sW>470){
$('.pi img').hover(
  function(){
  $('.te').fadeIn();
},
function(){

});

}


if(sW<500){
  $('.te').hide();
}




// FAQのアコーディオン
 $('.faq-list-item').click(function() {
   var $answer = $(this).find('.answer');
   if($answer.hasClass('open')) {
     $answer.removeClass('open');
     // slideUpメソッドを用いて、$answerを隠してください
     $answer.slideUp();

     // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
     $(this).find('span').text('+');

   } else {
     $answer.addClass('open');
     // slideDownメソッドを用いて、$answerを表示してください
     $answer.slideDown();

     // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
     $(this).find('span').text('-');

   }
 });

 // トップへ戻るボタン
$('#scrollTop').click(function(){
  $('html,body').animate({
    'scrollTop': 0
  });
});

//ABOUTなどを押したときにそこまでスクロール
$('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    },500);
  });


});
