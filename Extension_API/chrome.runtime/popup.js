// 当前页面加载完成后
document.addEventListener("DOMContentLoaded", function () {
  // 发送消息
  chrome.runtime.sendMessage({ message: "hello" }, function (response) {
    console.log("收到来自接收者的回复：", response);
  });
});





