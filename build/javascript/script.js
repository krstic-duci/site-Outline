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

});

// Initialize Animate On Scroll 
$(function () {
  AOS.init({
    once: true,
    disable: window.innerWidth < 1024
  });
});