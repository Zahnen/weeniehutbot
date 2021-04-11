const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client();
const prefix = "!";

client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "tellme") {
    message.reply(`You are absolutely a weenie`);
  } else if (command === "tellmebaby") {
    message.reply(`You are the biggest (baby and) weenie`);
  } else if (command === "pirate") {
    message.reply(`Arrrg, yous a weenie, mate!`);
  }
  if (message.content === "!weenieme") {
    message.react("🌭");
  }
  if (message.content === "!sunrise") {
    message.reply("1 Triple Gooberberry Sunrise 🍨");
    message.react("🍨");
  }
});

client.login(process.env.BOT_KEY);
