const Command = require('./app/command.js')

module.exports = class Ping extends Command {
    

    static match (message) {
        return message.content.startsWith(`${prefix}ping`)
    }

    static action (message) {
        message.reply('Pong')
    }
}
