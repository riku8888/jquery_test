(function($, window) {
  $(function() {
    // ここに処理を書きます
    $('body').on('click', function() {
      $(this).find('#click_me').css({'color': 'red'});
    });
  });
})(jQuery, window);
