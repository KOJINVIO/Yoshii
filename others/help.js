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
**Information Prefix** | **__Y__**
• **Owner Bot** <@759804172333482004>
• **Developer Bot** <@937063235612450827>

<:setingg:939794197052006430> **General**
\`invite , support , about , ping , prefix , uptime , invites , sug , roleuser\`
<a:emoji_52:941041641085599744> **Music**
\`play , skip , stop , vol , search , resume , remove , queue , loop , radio\`
<a:Info:941040372824551504> **Moderation**
\`ban , kick , clear , unban , lock , unlock\`
<:emoji_27:929806498173943836> **Game**
\`iq , aki , gay , rip , pet , hug , kiss , slap , meme\`
<a:emoji_21:923559260468686938> **Gif**
\`boy , girl , anime , couple , sad , cartoon , neon , emoji , smoking , billie , baby , animal\`
<:emoji_29:929806530579136524> **Photo**
\`pboy , pgirl , panime , pneon , panimal , pcouple , psmoking , pbillie , meme\`
**__Link__**
[Support Server](https://discord.gg/animekurd) : [Invite Bot](https://discord.com/oauth2/authorize?client_id=952208831318986782&permissions=8&scope=bot)

`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
