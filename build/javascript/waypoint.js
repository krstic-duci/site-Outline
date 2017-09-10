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

/*=====  End of Count nums to certain vals  ======*/


/*====================================
=            Call countUp            =
====================================*/

/*-- When user scroll to carousel show nums --*/
$('.wrapper-carousel').waypoint(function() {
  countUp();
}, { offset: '25%' });

/*=====  End of Call countUp  ======*/

/*=============================================================
=       Add props on certain points(elems) when scroll        =
=============================================================*/

/*--  When user scroll to clients image return vals to inital state  --*/
$('.wrapper-clients-images-header').waypoint(function() {

  // Return side menu off the page
  $('#nav-side').css('right', '-15%');

  // Return to default value
  $('.whole-page').css('left', '0');
}, { offset: '35%' });

/*=====  End of Add props on certain points on scroll  ======*/