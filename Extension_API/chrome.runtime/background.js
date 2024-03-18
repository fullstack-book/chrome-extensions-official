// 安装、更新时执行
chrome.runtime.onInstalled.addListener(function () {
  console.log("插件已安装");
});

// 浏览器重新启动时执行
chrome.runtime.onStartup.addListener(function () {
  console.log("浏览器重新启动");
});

// 卸载时执行
chrome.runtime.setUninstallURL(
  "https://www.baidu.com/",
  function () {
    console.log("插件已卸载");
  }
);
