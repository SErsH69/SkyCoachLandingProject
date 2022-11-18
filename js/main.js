$(function () {
  $('.faq_block__block').on('click', function() {
      $(this).toggleClass('isActive');
  });
  // setTimeout(() => {
  //   $('.header__btn').on('click', function() {
  //     setTimeout(() => {
  //       $('#popup_push').show();
  //     }, 1000);
  //   });
  //   $('.form_sign__btn').on('click', function() {
  //     setTimeout(() => {
  //       $('#popup_push').show();
  //     }, 1000);
  //   });
  //   $('.footer__btn').on('click', function() {
  //     setTimeout(() => {
  //       $('#popup_push').show();
  //     }, 1000);
  //   });
  // }, 2000);
});
$(document).ready(function(){
  $('.js_sl1').slick({
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
          }
        } 
      ]
  });
  // setTimeout(() => {
	//   $('.header__btn').on('click', function() {
	// 	$('.perfecty-push-dialog-container').show();
	//   });
	//   $('.form_sign__btn').on('click', function() {
	// 	$('.perfecty-push-dialog-container').show();
	//   });
	//   $('.footer__btn').on('click', function() {
	// 	$('.perfecty-push-dialog-container').show();
	//   });
  // }, 500);
  // $('.popup_push__close').on('click', function() {
  //   $('.popup_push').hide();
  // })
  // $('.popup_push__btn').on('click', function() {
  //   $('.popup_push').hide();
  // })
});