chrome.runtime.onInstalled.addListener(function () {
  // chrome.alarms.create("alarm-name", {
  //   delayInMinutes: 1, // 立即执行
  //   periodInMinutes: 1, // 每1秒执行
  // });

  // chrome.alarms.onAlarm.addListener(function (alarm) {
  //   console.log(
  //     "Alarm '" + alarm.name + "' triggered at " + new Date(alarm.scheduledTime)
  //   );
  // });

  // chrome.alarms.get("alarm-name", function (alarm) {
  //   if (alarm) {
  //     console.log(alarm);
  //   }
  // });

  chrome.alarms.create("alarm-name-1", {
    delayInMinutes: 1, // 立即执行
    periodInMinutes: 1, // 每1秒执行
  });
  chrome.alarms.create("alarm-name-2", {
    delayInMinutes: 1, // 立即执行
    periodInMinutes: 1, // 每1秒执行
  });

  chrome.alarms.getAll((alarms) => {
    console.log("第一次打印所有闹钟", alarms);
  });

  // chrome.alarms.clear(function (wasCleared) {
  //   if (wasCleared) {
  //     console.log("所有闹钟已清除");
  //   }
  // });

  chrome.alarms.clearAll(function (wasCleared) {
    if (wasCleared) {
      console.log("所有闹钟已清除");
    }
  });

  chrome.alarms.getAll((alarms) => {
    console.log("第二次打印所有闹钟", alarms);
  });
});
