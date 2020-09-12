import { Client, Message, MessageEmbed } from 'discord.js';
import { Command } from '../../types';

export const helper: Command = {
    name: 'Helper',
    description: 'Veja aqui minha lista de comandos!',
    aliases: ['help', 'ajuda', ' helper'],
    args: [],
    commands: {
        moderation: ['`k.kick`', '`k.ban`', '`f.mute`', '`f.unmute`'],
        economy: ['`f.saldo`', '`f.pagar`'],
        funny: [
            '`f.beijar`',
            '`f.chorar`',
            '`f.jankenpon`',
            '`f.abracar`',
            '`f.vergonha`',
            '`f.ping`',
            '`f.atacar`',
            '`f.cafuné`',
            '`f.pensando`',
            '`f.tapa`',
            '`f.bolo`',
            '`f.morder`',
            '`f.sono`',
            '`f.desviar`',
            '`f.fugir`',
        ],
        extras: [
            '`f.avatar`',
            '`f.userinfo`',
            '`f.perfil`',
            '`f.bio`',
            '`f.local`',
            '`f.suporte`',
        ],
    },

    execute(client: Client, message: Message, args: Array<string>) {
        const funCommands = this.commands.funny.join(', ');
        const extrasCommands = this.commands.extras.join(', ');
        const modCommands = this.commands.moderation.join(', ');
        const economyCommands = this.commands.economy.join(', ');

        const totalCommands =
            this.commands.funny.length +
            this.commands.moderation.length +
            this.commands.extras.length +
            this.commands.economy.length;

        const messageEmbed = new MessageEmbed()
            .setTitle('Ajuda - Lista de comandos')
            .setThumbnail(
                'https://cdn.discordapp.com/emojis/753988417091797152.png'
            )
            .setDescription('Abaixo está uma lista com todos os meus comandos.')
            .addField(':police_officer: | Moderação', modCommands)
            .addField(':moneybag: | Economia', economyCommands)
            .addField(':smile: | Diversão', funCommands)
            .addField(':star: | Extras', extrasCommands)
            .setFooter(`Lista de comandos - Chika | ${totalCommands} comandos`);
        return message.channel.send(messageEmbed);
    },
};
