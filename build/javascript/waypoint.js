/*==================================================
=            Count nums to certain vals            =
==================================================*/

/*----------  Declare vars for counting nums  ----------*/
var numOneInterval;
var numTwoInterval;
var numThreeInterval;

/*----------  Declare fnc for counting nums  ----------*/
function countUp() {

  // Clear previous states
  clearInterval(numOneInterval);
  clearInterval(numTwoInterval);
  clearInterval(numThreeInterval);

  // Declare and asign vals to nums for counting nums
  var numOneCount = 0;
  var numTwoCount = 0;
  var numThreeCount = 0;

  // No.28 to be incremented and show it
  numOneInterval = setInterval(function() {
    numOneCount++;
    $('.num-one').text(numOneCount);
    if (numOneCount == 28) {
      clearInterval(numOneInterval);
    }
  }, 178);

  // No.57 to be incremented and show it
  numTwoInterval = setInterval(function() {
    numTwoCount++;
    $('.num-two').text(numTwoCount);
    if (numTwoCount == 57) {
      clearInterval(numTwoInterval);
    }
  }, 87);

  // No.34023 to be incremented and show it
  numThreeInterval = setInterval(function() {
    numThreeCount += 680.46;
    $('.num-three').text(Math.ceil(numThreeCount));
    if (Math.ceil(numThreeCount) >= 34023) {
      clearInterval(numThreeInterval);
    }
  }, 100);
}

/*-- When user scroll to carousel show nums and call countUp fnc--*/
$('.wrapper-carousel').waypoint(function() {
  countUp();
}, { offset: '25%' });

/*=====  End of Count nums to certain vals  ======*/


/*=============================================================
=       Add props on sidebar menu when scroll        =
=============================================================*/

function waypointOnScroll() {
  /*----------  Call Waypoint JS on user scroll  ----------*/
  $('.wrapper-clients-images-header').waypoint(function() {

    var $navSide = $('.navigation-vertical');

    /*--  When user scroll to clients image give 
          sidebar menu and whole-page new vals   --*/
    if ($(window).width() >= 768 && $(window).width() <= 1199) {

      $navSide.removeClass('show-menu-md-sm');
    } else if ($(window).width() < 768) {

      $navSide.removeClass('show-menu-xs');
    } else {
      
      $navSide.removeClass('show-menu-lg');
    }

    /*----------  Return whole-page to default value  ----------*/
    $('.whole-page').removeClass('move-page-lg,move-page-md-sm,move-page-xs');
  }, { offset: '35%' });
}
waypointOnScroll();

/*=====  End of Add props on sidebar menu when scroll  ======*/


/*========================================
=          Add back to top button        =
==========================================*/

function addBackToTopBtn() {

  $('.box-features-section').waypoint(function() {

    $('.back-to-top').toggleClass('arrow-to-top');

  });
}
addBackToTopBtn();

/*=====  End of Add back to top button  ======*/