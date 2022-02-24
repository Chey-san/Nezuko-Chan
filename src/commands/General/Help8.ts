import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help8',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help8 (command_name)`,
            dm: true,
            aliases: ['h8']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Rin/rin.mp4','./assets/Rin/rin-1.mp4','./assets/Rin/rin-2.mp4','./assets/Rin/rin-3.mp4','./assets/Rin/rin-4.mp4','./assets/Rin/rin-5.mp4','./assets/Rin/rin-6.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-🄽🅂🄵🅆 🄻🄸🅂🅃 🧣
──────────────
🔮 ${this.client.config.prefix}ᴀɴᴀʟ
🔮 ${this.client.config.prefix}ʙʟᴏᴡᴊᴏʙ
🔮 ${this.client.config.prefix}ɴꜱꜰᴡᴅᴏᴜᴊɪɴ
🔮 ${this.client.config.prefix}ɴꜱꜰᴡʟᴏʟɪ
🔮 ${this.client.config.prefix}ɴꜱꜰᴡᴘᴀᴘᴇʀ
🔮 ${this.client.config.prefix}ᴛʜɪɢʜꜱ
🔮 ${this.client.config.prefix}ʜᴇɴᴛᴀɪ
🔮 ${this.client.config.prefix}ᴍᴀɪᴅ
🔮 ${this.client.config.prefix}ᴍᴀꜱᴛᴜʀʙᴀᴛɪᴏɴ
🔮 ${this.client.config.prefix}ɴᴄᴏᴅᴇ
🔮 ${this.client.config.prefix}ɴꜱꜰᴡ-ᴡᴀɪꜰᴜ
🔮 ${this.client.config.prefix}ɴꜱꜰᴡᴊᴏᴋᴇ
🔮 ${this.client.config.prefix}ɴꜱꜰᴡ-ɴᴇᴋᴏ
🔮 ${this.client.config.prefix}ᴘᴜꜱꜱʏ
🔮 ${this.client.config.prefix}ᴛʀᴀᴘ
🔮 ${this.client.config.prefix}xnxx {name}
🔮 ${this.client.config.prefix}school
🔮 ${this.client.config.prefix}ero
🔮 ${this.client.config.prefix}uniform
🔮 ${this.client.config.prefix}erok
🔮 ${this.client.config.prefix}erofeet
🔮 ${this.client.config.prefix}hgif
🔮 ${this.client.config.prefix}bsdm
🔮 ${this.client.config.prefix}panties
🔮 ${this.client.config.prefix}femdom
🔮 ${this.client.config.prefix}keta
🔮 ${this.client.config.prefix}boobs
🔮 ${this.client.config.prefix}succubus
🔮 ${this.client.config.prefix}mifi
🔮 ${this.client.config.prefix}cum
🔮 ${this.client.config.prefix}spank
🔮 ${this.client.config.prefix}nsfwkitsune
🔮 ${this.client.config.prefix}rhentai
🔮 ${this.client.config.prefix}nnekogif
🔮 ${this.client.config.prefix}nhentai
💫ENJOY_PERVERTS😳
──────────────` }
        )
    }
}
