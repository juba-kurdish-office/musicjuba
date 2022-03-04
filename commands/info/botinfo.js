
const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')
const owner = 'POLAT BOT';
const developer = 'POLATBOT#8314';
const votes = 'https://top.gg/bot/738030273278509070';

module.exports = {
name: "botinfo",
aliases: ["bot"],
run: async(client, message, args) => {

let embed = new MessageEmbed()
.setTitle(`Bot Info`)
.addField(`<:erw:899460685136797697> Servers:`, `${client.guilds.cache.size}` )
.addField(`<:bot:899454884779286539> Users`, `${client.users.cache.size}`)
.addField(`<:botme:947097385358741525> Owner`, `${owner}`)
.addField(`<:playstar:947098106481242112> Developer`, `${developer}`)
.addField(`<:yuhyu:947097785679892500> MemberCount`, `${message.guild.memberCount}`)
.addField(`<:swwwq:947097619598049290> ServerName`, `${message.guild.name}`)
.addField(`<:kikkjj:947097736270995527> ServerID`, `${message.guild.id}`)
.addField(`<:user:947149001524932648> Support`, `[support server](https://discord.gg/ttx9b2YcaP)`)
.addField(`<:lik:947149045263138886> Votes`, `${votes}`)
.setFooter(`Requested by: ${message.author.username}`)
.setImage(`https://cdn.discordapp.com/attachments/838086634142302208/948949724835246161/2Dn3.gif`)
message.channel.send(embed)
}
}