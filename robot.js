// 请求插件
import https from "axios";

// 机器人webhook
let webhook =
  "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=4643b759-11fd-456b-8faa-6adb16d14829";

// 发送内容
let jsonData = {
  msgtype: "text",
  text: {
    content: "快去打卡",
    mentioned_list: ["all"],
  },
};

https.post(webhook, jsonData, {
  headers: {
    "Content-Type": "application/json",
  },
});
