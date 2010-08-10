(function($) {
  $.fn.randomRotate = function(settings) {
    var TRANSFORM_PROPERTIES = {
      "webkit" : "-webkit-transform",
      "mozilla": "-moz-transform",
      "css3"   : "transform"
    };

    var config = {
      'from' : -10,
      'to'   : 10
    };

    if (settings) $.extend(config, settings);

    this.each(function() {
      var randomNumber = getRandomIntegerBetween(config.from, config.to);
      var transformValue = "rotate(" + randomNumber + "deg)";

      for (property in TRANSFORM_PROPERTIES) {
        $(this).css(TRANSFORM_PROPERTIES[property], transformValue);
      }
    });

    function getRandomIntegerBetween(m, n) {
      return Math.floor(Math.random() * (n - m + 1)) + m;
    }

    return this;
  };
})(jQuery);