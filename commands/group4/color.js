const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class ColorCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'color',
            aliases: ['colour', 'hex'],
            group: 'group4',
            memberName: 'color',
            guildOnly: true,
            description: 'Shows a random color or a preview of the given color!',
            examples: ['dy!color <color>']
        });
    }

    async run(message) {
        var color = message.content.split(/\s+/g).slice(1).join(" ");

        if (!color) {
            var genColour = '#' + Math.floor(Math.random() * 16777215).toString(16);
            const embed = new Discord.RichEmbed()
                .setColor(genColour)
                .setImage(`https://dummyimage.com/50/${genColour.slice(1)}/&text=%20`)
                .setFooter(genColour);
            return message.channel.send('Here\'s your color!', { embed: embed });
        }

        if (((color.indexOf("#") === 0) && color.length === 7) || (!isNaN(color) && color.length <= 8 && color < 16777215)) {
            const embed = await new Discord.RichEmbed()
                .setColor(color)
                .setImage(`https://dummyimage.com/50/${color.slice(1)}/&text=%20`)
                .setFooter(color);
            return message.channel.send({ embed });

        } else {
            return message.channel.send("Invalid Parameters!");
        }
    }
}