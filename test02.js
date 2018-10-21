
(function($, window) {
  $(function() {
    // この中に処理を書きます

    $('h1').addClass('title');
    $('h2').fadeOut();
    $('#index').removeClass('list');  // 追加する行
    $('#index').find('li').eq(0).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);
    $('ul').append('<li>メソッド</li>');
    // $('#index').find('li').each(function() {
    //   // ループ内の処理
    //   alert($(this).text().lenght);
    // });
    $('#index').find('li').each(function() {
      // ループ内の処理
      var thisValueLength = $(this).val().length;
        $('.list').append(thisValueLength);

    });
  });
})(jQuery, window);
