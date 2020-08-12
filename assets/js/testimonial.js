(function ($) {

  var WidgetTestimonialHandler = function ($scope, $) {
    var slidesToShow     = $scope.find('.mighty-testimonial').data('show-slides');
    var slidesToScroll   = $scope.find('.mighty-testimonial').data('scroll-slides');
    var autoplayStatus   = $scope.find('.mighty-testimonial').data('autoplay-status');
    var autoplaySpeed    = $scope.find('.mighty-testimonial').data('autoplay-speed');
    var transitionSpeed  = $scope.find('.mighty-testimonial').data('transition-speed');
    var pauseOnHover     = $scope.find('.mighty-testimonial').data('hover-pause');
    var infiniteLoop     = $scope.find('.mighty-testimonial').data('infinite-looping');
    var transitionSpeed  = $scope.find('.mighty-testimonial').data('transition-speed');
    var dots             = $scope.find('.mighty-testimonial').data('enable-dots');

    $scope.find(".mighty-testimonial").slick({
      infinite: infiniteLoop,
      speed: transitionSpeed,
      autoplay: autoplayStatus,
      autoplaySpeed: autoplaySpeed,
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToScroll,
      pauseOnHover: pauseOnHover,
      prevArrow: $scope.find('.mighty-testimonial-wrapper .prev-next .prev'),
      nextArrow: $scope.find('.mighty-testimonial-wrapper .prev-next .next'),
      dots: dots,
    });
  };

  // Make sure you run this code under Elementor.
  $(window).on('elementor/frontend/init', function () {
    elementorFrontend.hooks.addAction('frontend/element_ready/mt-testimonial.default', WidgetTestimonialHandler);
  });
})(jQuery);