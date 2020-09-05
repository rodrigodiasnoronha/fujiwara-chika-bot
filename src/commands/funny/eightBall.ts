import { Command } from '../../types';
import { Client, Message } from 'discord.js';

export const eightBall: Command = {
    name: '8Ball',
    aliases: ['8ball', '8ball', 'digame', 'mediga', 'digame'],
    description:
        'Deixe-me prever o teu futuro! Mas eu digo somente `sim` ou `não` ou `talvez`!',
    args: ['pergunta'],
    replies: ['Não.', 'Sim.', 'Com certeza.', 'Claro que não.', 'Talvez.'],
    execute(client: Client, message: Message, args: Array<string>) {
        if (!args.length) {
            return message.reply('faça-me uma pergunta! :wink:');
        }

        const reply = this.replies[
            Math.floor(Math.random() * this.replies.length)
        ];

        return message.channel.send(reply);
    },
};
