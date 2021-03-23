const Discord = require('discord.js');
const client = new Discord.Client();

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


client.login("TOKEN"); //// لێرە تۆکینی بۆت یان ئەکاونت دادەنێت





