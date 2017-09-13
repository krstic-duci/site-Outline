$(function() {

  /*=============================================
  =       Make new Breakpoint on 480px           =
  =============================================*/

  /*----------  When the page loads make new
                breakpoints if res < 480px  ----------*/

  function breakpointsOnPageLoad() {

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
  }

  /*----------  When user resize the browser make 
                new breakpoints if res < 480px  ----------*/
  function breakpointsOnPageResize() {

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
  }

  breakpointsOnPageLoad();
  breakpointsOnPageResize();

  /*=====  End of Make new Breakpoint on 480px   ======*/


  /*=================================================
  =       Inital (default) state in accordion       =
  =================================================*/

  function defaultStateAccordion() {

    // Set open headingOne background to white
    $('#headingOne').css('background', '#fff');

    // Set inital state of chevron arrow
    $('#headingOne').addClass('active-chevron');
  }
  defaultStateAccordion();

  /*=== End of Inital (default) state in accordion ====*/


  /*=============================================
  =       Set color to open/close accordion          =
  =============================================*/

  function openCloseAccordion() {

    /*----------  Color to open accordion  ----------*/
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

    /*----------  Color to close accordion  ----------*/
    $('#accordion').on('hidden.bs.collapse', function() {

      // For quicker usage
      var $panelCollHeading = $('.panel-collapse').prev('.panel-heading');

      // When accordion is hidden set proper bg color
      $panelCollHeading.css('background', '#fafafa');

      // Change inital state of chevron arrow
      $panelCollHeading.removeClass('active-chevron');

    });
  }
  openCloseAccordion();

  /*=====  End of Set color to open/close accordion  ======*/


  /*==============================================
  =            Proper load of sidebar nav            =
  ==============================================*/

  function setNavOnOff() {

    var $width = $(window).width();
    var $navSideMenu = $('.navigation-vertical');
    var $wholePage = $('.whole-page');

    /*----------  When user click on Menu anchor tag
        sidemenu nav appear and pushes the whole page to the left  ----------*/
    $('.menu-button').click(function(e) {
      e.stopPropagation();

      if ($width >= 768 && $width <= 1199) {

        $navSideMenu.toggleClass('show-menu-md-sm');
        $wholePage.toggleClass('move-page-md-sm');
      } else if ($width < 768) {

        $navSideMenu.toggleClass('show-menu-xs');
        $wholePage.toggleClass('move-page-xs');
      } else {

        $navSideMenu.toggleClass('show-menu-lg');
        $wholePage.toggleClass('move-page-lg');
      }
    });

    /*----------  When user click anywhere on whole page
                       close the side menu nav  ----------*/

    $('.whole-page').click(function() {

    });

  }
  setNavOnOff();

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

  function smoothScroll() {

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
  }
  smoothScroll();

  /*=====  End of Smooth Scroll  ======*/
  
});