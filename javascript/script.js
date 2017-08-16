$(function () {

  // 
  var numOneInterval;
  var numTwoInterval;
  var numThreeInterval;

  //
  var numOneCount = 0;
  var numTwoCount = 0;
  var numThreeCount = 0;

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

  //
  numOneInterval = setInterval(function() {
    numOneCount++;
    $('.num-one').text(numOneCount);
    if (numOneCount == 28) {
      clearInterval(numOneInterval);
    }
  }, 178);

  //
  numTwoInterval = setInterval(function() {
    numTwoCount++;
    $('.num-two').text(numTwoCount);
    if (numTwoCount == 57) {
      clearInterval(numTwoInterval);
    }
  }, 87);

  //
  numThreeInterval = setInterval(function() {
    numThreeCount += 680.46;
    console.log(numThreeCount);
    $('.num-three').text(Math.ceil(numThreeCount));
    if (Math.ceil(numThreeCount) >= 34023) {
      clearInterval(numThreeInterval);
    }
  }, 100); 

});

// Initialize Animate On Scroll 
$(function () {
  AOS.init({
    once: true,
    disable: window.innerWidth < 1024
  });
});