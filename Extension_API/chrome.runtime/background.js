// // 安装、更新时执行
// chrome.runtime.onInstalled.addListener(function () {
//   console.log("插件已安装");
// });

// // 浏览器重新启动时执行
// chrome.runtime.onStartup.addListener(function () {
//   console.log("浏览器重新启动");
// });

// // 卸载时执行
// chrome.runtime.setUninstallURL(
//   "https://www.baidu.com/",
//   function () {
//     console.log("插件已卸载");
//   }
// );

// 获取 background.js 的绝对路径
// const url = chrome.runtime.getURL("background.js")
// console.log("url", url)

// const popup_url = chrome.runtime.getURL("popup.html")
// console.log("popup_url", popup_url)

// // 安装成功，立即打开一个popup窗口
// chrome.runtime.onInstalled.addListener(function () {
//   chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") });
// });

// manifest 配置信息
// const manifest_info = chrome.runtime.getManifest();
// console.log("manifest_info", manifest_info);

// const { version } = manifest_info;
// console.log("version", version);

// 监听并接收消息
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // 处理消息
  console.log("接收到的消息:", message);

  // 发送者信息
  console.log("发送者信息:", sender);

  // 可以选择性地回复发送者
  sendResponse({ response: "收到消息!" });

  // 如果需要异步回复，返回true
  return true;
});


