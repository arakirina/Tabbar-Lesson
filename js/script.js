$(function(){
  $('.menu-trigger').on('click',function(event){ //.menu-triggerクリック時に行われる処理、.menu-triggerはどこに設定されているかというと、ハンバーガーアイコン<a class="menu-trigger" href="#">に設定されている。
    $(this).toggleClass('active');               //.toggleClass()は、指定されているclass（ここではactive）をトグル処理するメソッド。トグル処理では、該当のclass属性がある場合にはclassが削除され、ない場合には、classが追加される。aタグのクラスにはmenu-triggerが指定されactiveは指定されていない、この時の.toggleClass()を設定すると、アイコンがクリックされたときに、activeクラスが追加され、もう一度クリックすると削除される。このように、toggleClass()によって、class属性の追加と削除が交互に行われる。
    $('#sp-menu').fadeToggle();                  //.fadeToggle()でフェードイン・フェードアウトを切り替える。.fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッド。このメソッドを使って、ハンバーガーメニューを開いた時の状態を設定する。
    event.preventDefault();
  });
});

//toggleClass()のこと→さらに、.menu-trigger.active span:nth-child(1)~(3)の各CSSによってactiveクラスになった時、アイコンが「×」になるように設定されています。
//.fadeToggleのこと→ここでは、#sp-menuが開いた時に.fadeToggle()が処理されるように設定している。#sp-menuはどこに設定されているかというと、ハンバーガーメニュー<div id="sp-menu"></div>に設定されている。このように設定することでハンバーガーメニューがクリックされた時に、フェードインとフェードアウトが交互に実行されるようになる。
