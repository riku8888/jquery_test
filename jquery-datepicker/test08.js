

(function($, window) {
  $(function() {
    // ここに処理を書きます
    $("#date_picker").flatpickr({"locale": "ja"});

  });
})(jQuery, window);

//windowの変数定義
var $window = window;

//ボタンエフェクトの関数
function buttonTouchEffect(){

 //対象となるボタンの変数
  var $buttonTouchEffect = $('.js-touch-effect');

//button押した時の挙動
  $buttonTouchEffect.on('click',function(e){

//もともとの機能を中断させる
    e.preventDefault();
    //波紋のアニメーションになる要素を追加
    $(this).append('<span></span>');

/*追加した部分▼*/

    var $span = $(this).find('span'),//波紋アニメーションの変数
        offSet = $(this).offset(), //ボタンの位置を取得
        offSetY = event.pageY-offSet.top, //縦のボタンの位置と押した時の座標を計算
        offSetX = event.pageX-offSet.left;//横のボタンの位置と押した時の座標を計算

//波紋アニメーションに計算した座標のポジションを代入
    $span.css({
      top:offSetY,
      left:offSetX
    });
    /*追加した部分▲*/

//波紋アニメーションを1.8秒表示させてから要素を消す
   $window.setTimeout(function(){
      $span.remove();
    },1800);

  });
}

//イベント実行
buttonTouchEffect();
