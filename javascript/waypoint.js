
  function countUp() {
    // Declare vars for counting nums
    var numOneInterval;
    var numTwoInterval;
    var numThreeInterval;
  
    // Declare and assing vals to nums for counting nums
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
  

  $('.wrapper-carousel').waypoint(function () {
    countUp();
  }, {offset: '25%'});