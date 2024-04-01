chrome.runtime.onInstalled.addListener(function () {
  // 定义菜单
  // const menuList = [
  //   {
  //     id: "1",
  //     title: "水果类",
  //     children: [
  //       { id: "1-1", title: "苹果", parentId: "1" },
  //       { id: "1-2", title: "梨子", parentId: "1" },
  //       { id: "1-3", title: "西瓜", parentId: "1" },
  //     ],
  //   },
  // ];

  // 创建菜单
  // function createMenu(menu) {
  //   chrome.contextMenus.create(
  //     {
  //       id: menu.id,
  //       title: menu.title,
  //       // contexts: ["selection"],
  //       parentId: menu.parentId,
  //       documentUrlPatterns: ["https://*.baidu.com/*"],
  //     },
  //     function () {
  //       if (Array.isArray(menu.children)) {
  //         menu.children.forEach(createMenu);
  //       }
  //     }
  //   );
  // }

  // menuList.forEach(createMenu);



  chrome.contextMenus.create({
    id: "1",
    title: "更新菜单",
  });

  // 更新菜单
  function updateMenu(id, title) {
    chrome.contextMenus.update(id, {
      title,
    });
  }
  updateMenu("1", "更新菜单2");
});
