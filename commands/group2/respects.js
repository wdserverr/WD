const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class RespectsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'respects',
            aliases: ['respect', 'respects', 'f'],
            group: 'group2',
            memberName: 'respects',
            guildOnly: true,
            description: 'Press F to pay respects',
            examples: ['f <something you want to respect>'],
            throttling: {
                usages: 1,
                duration: 5
            },
            args: [{
                key: 'respect',
                prompt: 'Please provide me something to respect!',
                type: 'string',
                default: 'none'
            }]
        });
    }

    run(message, args) {
        const { respect } = args;
        let pengirim = message.author.displayAvatarURL;
        if (respect == 'none') {
            const embed = new RichEmbed()
                .setAuthor(`${message.author.username} has paid their respects.`, `${pengirim}`) 
                .setColor('RANDOM')
                .setFooter(`Press F to pay your respects.`);
            message.channel.send({ embed }).then(m => m.react("🇫"));

            return null;

        } else {
            let pengirim2 = message.author.displayAvatarURL;
            const embed = new RichEmbed()
                .setAuthor(`\u2000`, `${pengirim2}`)
                .setColor('RANDOM')
                .setDescription(`${message.author} has paid their respects to ${respect}`)
                .setFooter(`Press F to pay your respects.`);
            message.channel.send({ embed }).then(m => m.react("🇫"));

            return null;
        }
    }
}
