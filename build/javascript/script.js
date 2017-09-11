$(function() {

  /*=============================================
  =           Breakpoints on 480px             =
  =============================================*/
  $(window).resize(function() {
    if ($(window).width() < 463) {

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

  /*=====  End of Breakpoints on 480px   ======*/


  /*=================================================
  =            Inital state in accordion            =
  =================================================*/

  // Set open headingOne background to white
  $('#headingOne').css('background', '#fff');

  // Set inital state of chevron arrow
  $('#headingOne').addClass('active-chevron');

  /*=====  End of Inital state in accordion  ======*/


  /*=============================================
  =          Set color to open accordion            =
  =============================================*/

  $('#accordion').on('shown.bs.collapse', function() {

    $('.panel-collapse').each(function() {

      // For quicker usage
      var $thisHeading = $(this).prev('.panel-heading');

      if ($(this).hasClass('in')) {

        // When accordion is open set proper bg color
        $thisHeading.css('background', '#fff');

        // Change inital state of chevron arrow
        $thisHeading.addClass('active-chevron');

      } else {
        $(this).prev('.panel-heading').css('background', '#fafafa');
      }
    });
  });
  /*=====  End of Set color to open accordion  ======*/


  /*=============================================
  =       Set color to hidden accordion         =
  =============================================*/

  $('#accordion').on('hidden.bs.collapse', function() {

    // For quicker usage
    var $panelCollHeading = $('.panel-collapse').prev('.panel-heading');

    // When accordion is hidden set proper bg color
    $panelCollHeading.css('background', '#fafafa');

    // Change inital state of chevron arrow
    $panelCollHeading.removeClass('active-chevron');

  });

  /*=====  End of Set color to hidden accordion  ======*/

  /*==============================================
  =            Proper load of sidebar nav            =
  ==============================================*/


  function setNavOff() {

    var $width = $(window).width();
    var $navSideMenu = $('#nav-side');
    var $wholePage = $('.whole-page');

    /*----------  Set inital(push off the page) 
                    vals for sidebar nav  ----------*/
    // if ($width >= 768 && $width <= 1199) {
    //   $navSideMenu.css({
    //     right: '-50%',
    //   });
    // } else if ($width < 768) {
    //   $navSideMenu.css({
    //     right: '-60%',
    //   });
    // } else {
    //   $navSideMenu.css({
    //     right: '-35%',
    //   });
    // }
    /*----------  When user click on Menu anhor tag
        sidemenu nav appear and pushes the whole page to the left  ----------*/
    $('.menu-button').click(function() {

      if ($width >= 768 && $width <= 1199) {
        $navSideMenu.css({
          right: '0',
          transition: 'right 0.8s linear',
          width: '30%'
        });
        $wholePage.css({
          left: '-30%',
          transition: 'left 0.7s linear'
        });
      } else if ($width < 768) {
        $navSideMenu.css({
          right: '0',
          transition: 'right 0.8s linear',
          width: '40%'
        });
        $wholePage.css({
          left: '-40%',
          transition: 'left 0.7s linear'
        });
      } else {
        $navSideMenu.css({
          right: '0',
          transition: 'right 0.8s linear',
          width: '15%'
        });
        $wholePage.css({
          left: '-15%',
          transition: 'left 0.7s linear'
        });
      }
    });
  }
  setNavOff();

  /*=====  End of Proper load of sidebar nav  ======*/


  /*=========================================
  =            Animate on Scroll            =
  =========================================*/

  AOS.init({
    once: true
  });

  /*=====  End of Animate on Scroll  ======*/

  /*=========================================
  =            Smooth Scroll            =
  =========================================*/

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          });
        }
      }
    });

  /*=====  End of Smooth Scroll  ======*/

});