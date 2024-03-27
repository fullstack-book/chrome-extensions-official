chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "my-menu-item",
    title: "My Context Menu Item",
    contexts: ["selection"],
    onClick: function(info, tab) {
      console.log("Menu item clicked", info, tab);
    }
  }, function() {
    if (chrome.runtime.lastError) {
      console.error("Error adding context menu item:", chrome.runtime.lastError.message);
    } else {
      console.log("Context menu item added successfully!");
    }
  });
});