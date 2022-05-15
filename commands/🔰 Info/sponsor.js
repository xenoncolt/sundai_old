const {MessageEmbed} =require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { swap_pages2	 } = require(`${process.cwd()}/handlers/functions`);
module.exports = {
	name: "sponsor",
	category: "🔰 Info",
	aliases: ["sponsors"],
	description: "Shows the sponsor of this BoT",
	usage: "sponsor",
	type: "bot",
	run: async (client, message, args, cmduser, text, prefix) => {
		let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
		
	try{
			let embed1 = new MessageEmbed()
		    .setColor(es.color)
		    .setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable1"]))
		    //.setURL("http://bero-host.de/?utm_source=bot&utm_medium=cpc&utm_id=milrato")
		    .setDescription(`
There is no sponsor right now. If you want to sponsor our bot please contact with <@709210314230726776>. 
`)
		    //.setImage("https://cdn.bero-host.de/img/logo/bero_white.png")
		    //.setFooter("BERO-HOST",  "https://imgur.com/jXyDEyb?.png")
		
		let embed2 = new MessageEmbed()
			.setColor(es.color)
			.setTimestamp()
			//.setFooter("Bittmax.de | Code  'x10' == -5%",  'https://imgur.com/UZo3emk.png')
			//.setImage("https://cdn.discordapp.com/attachments/807985610265460766/822982640000172062/asdasdasdasdasd.png")
			.setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable4"]))
			//.setURL("https://bittmax.de")
			.setDescription(`
			There is no sponsor right now. If you want to sponsor our bot please contact with <@709210314230726776>.
			`);
			swap_pages2(client, message, [embed1, embed2])
		} catch (e) {
        console.log(String(e.stack).grey.bgRed)
		return message.reply({embeds: [new MessageEmbed()
		  .setColor(es.wrongcolor)
		  .setFooter(client.getFooter(es))
		  .setTitle(client.la[ls].common.erroroccur)
		  .setDescription(eval(client.la[ls]["cmds"]["info"]["color"]["variable2"]))
		]});
    }
  }
}
