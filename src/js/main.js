window.onload = function() {
  if (window.jQuery) {
    window.jQuery(document).ready(function($) {
      $('button.roll').on('click', function () {
        $('button.roll:first').insertAfter($('button.roll:last'));
      });
    });
  }
};
