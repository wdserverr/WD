const Command = require('../../structures/Command');
const facts = require('../../assets/json/cat-fact');
const { RichEmbed } = require('discord.js');

module.exports = class CatFactCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'catfact',
			aliases: ['neko-fact', 'kitty-fact'],
			group: 'group3',
			memberName: 'catfact',
			description: 'Responds with a random cat fact.'
		});
	}

	run(msg) {
   let catEmbed = new RichEmbed() 
   .setColor('RANDOM')
   .setTitle('🐱 Do you know') 
   .setDescription(facts[Math.floor(Math.random() * facts.length)]);
		return msg.say(catEmbed);
	}
};
 
