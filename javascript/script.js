$(function () {

  // on 480px make new breakpoints
  $(window).resize(function() {
    if($(window).width() < 463) {

      // section divs (features, designs, products)
      $('.custom-col-xxs').removeClass('col-xs-6').addClass('col-xs-12');

      // carousel img and para
      $('.custom-col-crls-xxs')
      .removeClass('col-xs-4').addClass('col-xs-12');
      $('.custom-col-crls-para-xxs')
      .removeClass('col-xs-8').addClass('col-xs-12');
    } else {

      // section divs (features, designs, products)
      $('.custom-col-xxs').removeClass('col-xs-12').addClass('col-xs-6');

      // carousel img and para
      $('.custom-col-crls-xxs')
      .removeClass('col-xs-12').addClass('col-xs-4');
      $('.custom-col-crls-para-xxs')
      .removeClass('col-xs-12').addClass('col-xs-8');
    }
  });

  // on mouse click, rotate caret arrows by 180deg

  // when accoridon elements has clas in (that means that elem is visible)
  // add bg color to panel-heading to match color with para below it


  // trigger animation on count up number when scroll to this article
  // function triggerCountUp () {

  //   var targetOffset = $('.wrapper-numbers-and-bg-img').offset().top;

  //   var $w = $(window).scroll(function(){

  //     if ( $w.scrollTop() < targetOffset ) {   
  //       $({countNum: 1}).animate({countNum: 28}, {
  //       duration: 4000,
  //       easing:'linear',
  //       step: function() {
  //         $('.num-one').text(Math.round(this.countNum));
  //       }
  //       });
  //       $({countNum: 1}).animate({countNum: 57}, {
  //         duration: 4000,
  //         easing:'linear',
  //         step: function() {
  //           $('.num-two').text(Math.round(this.countNum));
  //         }
  //       });
  //       $({countNum: 1}).animate({countNum: 34023}, {
  //         duration: 4000,
  //         easing:'linear',
  //         step: function() {
  //           $('.num-three').text(Math.round(this.countNum.toFixed(2)));
  //         }
  //       });
  //     }
  //   });
  // }
  // triggerCountUp();
});

// Initialize Animate On Scroll 
$(function () {
  AOS.init({
    once: true,
    disable: window.innerWidth < 1024
  });
});