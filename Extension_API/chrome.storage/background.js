chrome.runtime.onInstalled.addListener(async () => {
  // 移除所有数据
  chrome.storage.local.clear()
  // 初始化版本
  chrome.storage.local.set({ version: chrome.runtime.getManifest().version });
  // 监听数据变化
  chrome.storage.onChanged.addListener((changes, namespace) => {
    Object.keys(changes).forEach((key) => {
      const { oldValue, newValue } = changes[key];
      console.log(`${key}: ${oldValue} -> ${newValue}`);
    });
  });

  // // 获取当前版本
  // chrome.storage.local.get("version", (data) => {
  //   console.log("version:", data.version);
  // });

  // const data = await chrome.storage.local.get("version");
  // console.log("await version:", data.version);

  // // 获取所有local存储的数据
  // chrome.storage.local.get(null, function (locals) {
  //   console.log("locals:", locals);
  // });

  // // 移除指定数据
  // chrome.storage.local.remove("version", function () {
  //   console.log("version removed");
  // });

  // // 清空所有local存储的数据
  // chrome.storage.local.clear(function () {
  //   console.log("all data removed");
  // });

  // chrome.storage.session.set({ version: chrome.runtime.getManifest().version });

  // chrome.storage.session.get("version", (data) => {
  //   console.log("version:", data.version);
  // });
});
