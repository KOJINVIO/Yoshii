const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(`https://images-ext-1.discordapp.net/external/uMALDht50PZ8N0QPWrxPy9q0XfYvw7lNJeaZt6xd70E/https/media.discordapp.net/attachments/922542879065382963/952533793787486290/b345664d3ca6fe8e9a10ec981cf382a9.gif`)
    .setTitle(`**Yoshii BOT**`)
    .setDescription(`
**General**
\`invite : support : about : ping : prefix : uptime : invites : sug : roleuser\`
**Music**
\`play : skip : stop : vol : search : resume : remove : queue : loop :radio\`
**Moderation**
\`ban : kick : clear : unban : lock : unlock\`
**Gif**
\`boy : girl : anime : couple : sad : cartoon : neon : emoji : smoking : billie : baby : animal\`
**Photo**
\`pboy : pgirl : panime : pneon : panimal : pcouple : psmoking : pbillie : meme\`
**__Link__**
[Support Server](https://discord.gg/animekurd) : [Invite Bot](https://discord.com/oauth2/authorize?client_id=952208831318986782&permissions=8&scope=bot)

`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
