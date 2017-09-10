$(function() {

  // on 480px make new breakpoints
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

  // Set open headingOne background to white
  $('#headingOne').css('background', '#fff');

  // Set inital state of chevron arrow
  $('#headingOne').addClass('active-chevron');

  // Set color to open accordion
  $('#accordion').on('shown.bs.collapse', function() {

    $('.panel-collapse').each(function() {

      // Four quicker usage
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

  // Set color to hidden accordion
  $('#accordion').on('hidden.bs.collapse', function() {

    //
    var $panelCollHeading = $('.panel-collapse').prev('.panel-heading');

    // When accordion is hidden set proper bg color
    $panelCollHeading.css('background', '#fafafa');

    // Change inital state of chevron arrow
    $panelCollHeading.removeClass('active-chevron');

  });

});

// Initialize Animate On Scroll 
$(function() {
  AOS.init({
    once: true
  });
});