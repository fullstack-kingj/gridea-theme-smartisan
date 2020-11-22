let $pop_dialog = $("#pop_dialog");

$pop_dialog.css({
  width: $(window).width(),
  height: $(window).height(),
});

// 点击社交栏中的QQ和微信弹出二维码框
$("#sns_qq").on("click", snsClickFunction);
$("#sns_wechat").on("click", snsClickFunction);

function snsClickFunction(event) {
  // 阻止链接元素的默认跳转行为
  event.preventDefault();
  // 获取触发该事件的目标元素
  let $target_elem = $(event.target);
  // 将弹出框进行显示
  $pop_dialog.show();
  // 设置弹出框提示信息
  $pop_dialog
    .find(".title")
    .text("打开手机，使用" + $target_elem.text() + "扫描二维码");
  // 设置弹出框显示的二维码
  $pop_dialog.find("img").attr("src", $target_elem.attr("href"));

  $pop_dialog.on("mousewheel", function (event) {
    event.preventDefault();
  });
}

$("#btn_close").on("click", function (event) {
  // 阻止链接元素的默认跳转行为
  event.preventDefault();
  // 将弹出框进行隐藏
  $pop_dialog.hide();
});
