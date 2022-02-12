const Command = require('./command.js')

module.exports = class Google extends Command {
    

    static match (message) {
        return message.content.startsWith(`${prefix}google`)
    }

    static action (message) {
        let args = message.content.split(' ')
        args.shift()
        message.delete()
        message.reply('http://www.google.fr/#q=' + args.join('%20'))
    }
}
