const Discord = require('discord.js');
const client = new Discord.Client();

///// DrZheerシ🇩🇪#5317

client.on("ready", () => {
  console.log();
  let statuses = [``, ``]; /// لێرە بیۆ دانی بۆ ستریمنگ
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/zheer"
    });
  }, 2000);
});

//// DrZheerシ🇩🇪#5317

client.login("TOKEN"); //// لێرە تۆکینی بۆت یان ئەکاونت دادەنێت


////بە ھیوام سوودی لێ ببین /تب : بەھیوای دەستکاری ھیچ نەکەن ئەگەرنا کۆدەکان بلۆک دەکەم
