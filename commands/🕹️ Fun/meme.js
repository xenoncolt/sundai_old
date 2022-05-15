const fetch = (...args) => import("node-fetch").then(({default: fetch}) => fetch(...args));
const Discord = require("discord.js");
const {MessageEmbed, MessageAttachment} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
const canvacord = require("canvacord");
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const request = require("request");
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const subreddit = [
  "memes"
];
const path = require("path");
module.exports = {
  name: path.parse(__filename).name,
  category: "🕹️ Fun",
  usage: `${path.parse(__filename).name} [@User]`,
  type: "user",
  description: "*Image cmd in the style:* " + path.parse(__filename).name,
  run: async (client, message, args, cmduser, text, prefix) => {
    
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
        if(!client.settings.get(message.guild.id, "FUN")){
          return message.reply({embeds : [new MessageEmbed()
            .setColor(es.wrongcolor)
            .setFooter(client.getFooter(es))
            .setTitle(client.la[ls].common.disabled.title)
            .setDescription(require(`${process.cwd()}/handlers/functions`).handlemsg(client.la[ls].common.disabled.description, {prefix: prefix}))
          ]});
        }
    
        
    try {
      
          fetch(`https://www.reddit.com/r/meme/random/.json`)
          .then(res => res.json())
          .then(async json => {
               
              const data = json[0].data.children[0].data;
  
              if (typeof data.title !== "string") return message.reply(`Sadly, \`${"r/" + subreddit}\` either is not a valid image or it is not a valid subreddit.`);
              
              if (data.is_video == true ) return message.reply(`${data.url}`);
  
              const embed = new Discord.MessageEmbed()
              .setTitle(data.title)
              .setAuthor(data.author, config.botimg, config.dclink)
              .setImage(data.url)
              .setColor("RANDOM")
              .setURL(`https://reddit.com${data.permalink}`)
              .setFooter(`👍: ${data.ups || 0} | 👎: ${data.downs || 0} | 💬: ${data.num_comments || 0} | 🏆: ${data.total_awards_received} `)
      
              if (embed.title.length > 256 ) return message.reply("Sorry, something went wrong, pls retry :(");

                return message.reply(embed);
          });
      
      // fetch(`https://meme-api.herokuapp.com/gimme/${subreddits[Math.floor(Math.random() * subreddits.length)]}`)
        
      //{content : eval(client.la[ls]["cmds"]["fun"]["meme"]["variable1"])}


      //   .then(response => response.json())
      //   .then(async json => {


        
      //   //let selected = data[Math.floor(Math.random() * data.length)];
      //   //if(!selected) selected = data[Math.floor(Math.random() * data.length)];
      //   //if(!selected) selected = data[Math.floor(Math.random() * data.length)];
      //   //if(!selected) selected = data[Math.floor(Math.random() * data.length)];
      //   if (typeof json.title !== "string") return message.reply(`Sadly, ${("r/" + subreddits)} either is not a valid image or it is not a valid subreddit.`);
      //   if (!message.channel.nsfw && json.nsfw == true ) return message.reply("This post contains NSFW content, this can be seen if sent in an NSFW channel.");



      //   const embed = new Discord.MessageEmbed()
      //       .setTitle(json.title)
      //       .setAuthor(json.author, config.botimg, config.dclink)
      //       .setImage(json.url)
      //       .setColor(color)
      //       .setURL(json.postLink)
      //       .setFooter(`👍: ${json.ups}`)
      //       .setTimestamp()
    
      //       if (embed.title.length > 256 ) return message.reply("Sorry, something went wrong, pls retry :(");
    
      //       message.channel.send({ embeds: [embed] });
    } catch (e) {
      console.log(String(e.stack).grey.bgRed)
      return message.reply({embeds : [new MessageEmbed()
        .setColor(es.wrongcolor)
        .setFooter(client.getFooter(es))
        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(eval(client.la[ls]["cmds"]["fun"]["meme"]["variable2"]))
      ]});
    }
  }
}
