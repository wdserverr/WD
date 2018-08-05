const Command = require('../../structures/Command');
const facts = require('../../assets/json/dog-fact');
const { RichEmbed } = require('discord.js');

module.exports = class DogFactCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'dogfact',
			aliases: ['puppy-fact'],
			group: 'group3',
			memberName: 'dogfact',
			description: 'Responds with a random dog fact.'
		});
	}

	run(msg) { 
  let dfEmbed = new RichEmbed() 
 .setColor('RANDOM') 
 .setTitle('🐶 Do you know') 
 .setDescription(facts[Math.floor(Math.random() * facts.length)]);
		return msg.say(dfEmbed);
	}
};
