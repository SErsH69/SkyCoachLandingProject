$(function () {
    $('.faq_block__block').on('click', function() {
        $(this).toggleClass('isActive');
    });
})
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
});