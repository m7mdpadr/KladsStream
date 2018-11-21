const Discord = require('discord.js');
const client = new Discord.Client();


console.log("Welcome Again !");
 

          const devs = ['298331381283553291'];
          const adminprefix = "$st";
          client.on('message', message => {
              var argresult = message.content.split(` `).slice(1).join(' ');
                if (!devs.includes(message.author.id)) return;

            if (message.content.startsWith(adminprefix + 'st')) {
              client.user.setGame(argresult, "https://www.twitch.tv/ByMo7ammmed.");
                message.channel.sendMessage(`**✅   ${argresult}**`)
            }
            });


             
client.login(process.env.BOT_TOKEN);
