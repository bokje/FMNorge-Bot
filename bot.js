const botconfig =require("./botconfig.json");
const Discord = require("discord.js");


const bot = new Discord.Client ({disableEveryone: true});

bot.on("ready", async () => {
console.log(`${bot.user.username} is online! `);
bot.user.setGame("Football Manager 2018")


});

bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} Joined the server.`);

  let welcomechannel = member.guild.channels.find(`name`, "nye-managere");
  welcomechannel.send(`Hei ${member}, Velkommen til Football Manager Norge ! Del din FM save med oss i <#447415119274704927> !
Om du ønsker så kan du gjerne joine våres Steam gruppe: https://steamcommunity.com/groups/footballmanagernorge :tada::hugging:`);

});

bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} Left the server.`);

  let welcomechannel = member.guild.channels.find(`name`, "nye-managere");
  welcomechannel.send(`${member} Valgte å legge opp:slight_frown:`);
});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray [0];
  let args = messageArray.slice (1);

if(cmd === `${prefix}serverinfo`){

let sicon = message.guild.displayAvatarURL;
let serverembed = new Discord.RichEmbed()
.setDescription("Server Informasjon")
.setColor("#f4425c")
.setThumbnail(sicon)
.addField("Server Name", message.guild.name)
.addField("Created On", message.guild.createdAt)
.addField("You Joined", message.member.joinedAt)
.addField("Total Members", message.guild.memberCount);

  return message.channel.send(serverembed);
}



  if(cmd === `${prefix}botinfo`){

  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Informasjon")
  .setColor("#f4425c")
  .setThumbnail(bicon)
  .addField("Bot Name", bot.user.username)
  .addField("Created On", bot.user.createdAt);

  return message.channel.send(botembed);
}

});

client.login(process.env.BOT_TOKEN);
