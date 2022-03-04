const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const { prefix, developerID, bot, support, invite, supportEmail } = require("../../config.json")



module.exports = {
  name: "help",
  description: "Info",

  run: async (client, message, args) => {


    const embed = new Discord.MessageEmbed()
    .setTitle(`${bot} Help pages`)
    .setDescription(`<:yes:947149252906324018> Hello **${message.author.username}**, \n *Choose an category below to see commands* \n\n :question: New to ${bot}? Check out server \n ${support} \n\n Also Join Our Developer Server \n https://discord.gg/ttx9b2YcaP`)
		.setImage(`https://cdn.discordapp.com/avatars/738030273278509070/19f6ca494d7d99aa28fc56e7e1bf87ec.png?size=4096`)
		
		.addField(`invite me:`, `${invite}`)
		.addField(`Support Email`, `${supportEmail}`)
    .setColor("RANDOM")
    .setFooter(`Requested by: ${message.author.tag}`)
		


    const music = new Discord.MessageEmbed()
    .setColor(Color)
		
    .setTitle(`<:dimusic:946802612051804181> Music`)
    .setImage(`https://cdn.discordapp.com/attachments/838086634142302208/948958628482789436/music.gif`)
    .setDescription(`Music page: \n\n \`join\`, \`leave\`, \`loop\`, \`nowplaying\`, \`pause\`,  \`play\`,  \`queue\`,  \`remove\`,  \`resume\`,  \`search\`,  \`skip\`,  \`skipall\`,  \`stop\`,`)
    .setFooter(`Requested by: ${message.author.tag}`)



    const info = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`<:info:949026716129574962> Info Page`)
	
		.setImage(`https://cdn.discordapp.com/attachments/838086634142302208/923607717254422528/image1-3.gif`)
    .setDescription(`Here are all the Info commands: \n\n \`help\`, \`invite\`,\`ping\`,\`bot\`,`)
    .setFooter(`Requested by: ${message.author.tag}`)



    let button1 = new MessageButton()
    .setLabel(`Music`)
    .setID(`music`)
	
    .setStyle("blurple")
		.setEmoji('946799280113483827');
    

    let button2 = new MessageButton()
    .setLabel(`Info`)

    .setID(`info`)
    .setStyle("green")
.setEmoji('949026716129574962');     
		


    let row = new MessageActionRow()
    .addComponents(button1, button2);



const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 300000 });

    collector.on('collect', async (b) => {

        if(b.id == "music") {

            MESSAGE.edit(music, row);
            await b.reply.defer()
            
        }

				

         if(b.id == "info") {

            MESSAGE.edit(info, row);
            await b.reply.defer()
            
        }

				

				
    });
}};