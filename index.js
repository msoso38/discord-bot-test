const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google')
const Ping = require('./commands/ping')
const {token, prefix} = require('./config.json')


bot.on('ready', () => {
    console.log(`Connecté en tant que : ${bot.user.tag}!`);
  });

//bot.on('ready', function () {
//    client.user.setPresence('En cours de dévelopement')
    //bot.user.setAvatar('./vitrax/bot.png').catch(console.error)
//})

bot.on

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bienvenu sur le serveur ' + member.displayName)
    }).catch(console.error)
})

bot.on('message', function (message) {
    let commandUsed = 
    Google.parse(message) || 
    Ping.parse(message)
})

bot.login(process.env.TOKEN)