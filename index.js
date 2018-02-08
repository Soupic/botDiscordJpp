const Discord = require("discord.js");
const loginBot = require("./loginBot");
const bot = new Discord.Client();

let prefix = ("!");

bot.on("ready", function() {
  bot.user.setGame("Command: !help");
  console.log("Connectedc");
})

bot.login(loginBot.login);

bot.on("message", message => {
  if(message.content === prefix + "help"){
    message.channel.sendMessage("Liste des commandes: \n -!help");
  }
  if(message.content === "Salut"){
    message.reply("Bien le bonjour !!");
    console.log("Commande Salut effectué");
  }
});
