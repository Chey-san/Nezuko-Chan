import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['h']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Rin/rin.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `📝 ɴᴏᴛᴇꜱ

(❤️ω❤️) Konichiwa👋 I'm ɴᴇᴢᴜᴋᴏ-ᴄʜᴀɴ!

🧧 ɪꜰ ʏᴏᴜ ʜᴀᴠᴇ ᴀɴʏ ɪꜱꜱᴜᴇꜱ ᴡɪᴛʜ ɴᴇᴢᴜᴋᴏ-ᴄʜᴀɴ ᴏʀ ᴀɴʏ ᴇʀʀᴏʀ ᴛʜᴇɴ ᴄᴏɴᴛᴀᴄᴛ ʙᴏᴛ ᴏᴡɴᴇʀ. ᴛʏᴘᴇ " ${this.client.config.prefix}ᴏᴡɴᴇʀ " ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ!

🚀 ᴘʀᴇꜰɪx - ${this.client.config.prefix}
────────────────
-🄶🄴🄽🄴🅁🄰🄻 🧣

🎐 ${this.client.config.prefix}Ｈｅｌｐ1 [${this.client.config.prefix}ｈ１]
────────────────
🌸/ᴀᴅᴍɪɴs
🌸/ᴇᴠᴇʀʏᴏɴᴇ
🌸/ᴍᴏᴅs
🌸/ᴘʀᴏғɪʟᴇ
🌸/ʀᴀɴᴋ
🌸/xᴘ
🌸/ɪɴᴠɪᴛᴇʟɪɴᴋ
🌸/ᴅᴇʟᴇᴛᴇ
🌸/ʀᴇᴛʀɪᴇᴠᴇ
🌸/ʜɪ
🌸/ɴᴇᴢᴜᴋᴏ
────────────────
-🅆🄴🄴🄱🅂 🧣

🎐 ${this.client.config.prefix}Ｈｅｌｐ2 [${this.client.config.prefix}ｈ2]
────────────────
🎀/ᴀɴɪᴍᴇ
🎀/ᴀɴɪᴍᴇQᴜᴏᴛᴇ
🎀/ᴀɴɪᴍᴇᴄʜᴀʀ
🎀/ɢᴇɴꜱʜɪɴᴄʜᴀʀᴀᴄᴛᴇ
🎀/ʜᴜꜱʙᴀɴᴅᴏ
🎀/ʟᴏʟɪ
🎀/ᴍᴀɴɢᴀ
🎀/ᴘᴏᴋᴇᴍᴏɴ
🎀/ʀᴘᴀᴘᴇʀ
🎀/ᴠᴛᴜʙᴇʀ
🎀/ᴡᴀɪꜰᴜ
🎀/ᴀᴍᴇᴍᴇ
🎀/ᴄʜᴀʀᴀᴄᴛᴇʀ
🎀/ᴄʀᴏꜱꜱᴘʟᴀʏ
🎀/ʜᴀɪɢᴜꜱʜᴀ
🎀/ʀᴇᴄᴏᴍᴍᴇɴᴅ
🎀/ꜱᴀᴜᴄᴇ
🎀/ᴡᴀʟʟᴘᴀᴘᴇʀ
────────────────
-🄵🅄🄽 🧣

🎐 ${this.client.config.prefix}Ｈｅｌｐ3 [${this.client.config.prefix}ｈ3]
────────────────
🎗️/ᴄʜᴇꜱꜱ
🎗️/Qᴜᴏᴛᴇ
🎗️/ʀᴇᴀᴄᴛ
🎗️/ᴛʀɪɢɢᴇʀ
🎗️/ᴛʀᴜᴛʜ
🎗️/ᴄʜᴀᴛ
🎗️/ᴅᴀʀᴇ
🎗️/ꜰᴀᴄᴛ
🎗️/ꜱᴀꜰᴇᴊᴏᴋᴇ
🎗️/sʜɪᴘ
🎗️/ᴛʀɪᴠɪᴀ
🎗️/ᴊᴀɪʟ
🎗️/ᴡᴀɴᴛᴇᴅ
🎗️/ʀɪᴘ
🎗️/ᴛʀᴀsʜ
────────────────
-🄼🄴🄳🄸🄰 🧣

🎐 ${this.client.config.prefix}Ｈｅｌｐ4 [${this.client.config.prefix}ｈ4]
────────────────
•/ɪɢ
•/ᴘʟᴀʏ
•/ꜱᴘᴏᴛɪꜰʏ
•/ᴛᴀᴋᴇ
•/ʏᴛᴀᴜᴅɪᴏ
•/ʏᴛꜱᴇᴀʀᴄʜ
•/ʏᴛᴠɪᴅᴇᴏ
•/ɢᴏᴏɢʟᴇ
•/ʟʏʀɪᴄꜱ
•/ᴘɪɴᴛᴇʀᴇꜱᴛ
•/karaoke
•/igdl
•/iguser
•/advice
────────────────
-🅄🅃🄸🄻🅂 🧣

🎐 ${this.client.config.prefix}Ｈｅｌｐ5 [${this.client.config.prefix}ｈ5]
────────────────
🌈/ʙʟᴜʀ
🌈/ᴋɪᴛᴛᴇɴ
🌈/ꜱᴛɪᴄᴋᴇʀ
🌈/ꜱᴜʙʀᴇᴅ
🌈/ɢᴇᴛɢɪꜰ
🌈/ꜱᴄʀᴇᴇɴꜱʜᴏᴛ
🌈/ꜱᴛᴇᴀʟ
🌈/ᴛʀᴀɴꜱʟᴀᴛᴇ
🌈/ᴡɪᴋɪᴘᴇᴅɪᴀ
🌈/ᴄɪʀᴄʟᴇ
────────────────
-🄼🄾🄳🄴🅁🄰🅃🄸🄾🄽 🧣

🎐 ${this.client.config.prefix}Ｈｅｌｐ6 [${this.client.config.prefix}ｈ6]
────────────────
🚀/ᴀᴄᴛɪᴠᴀᴛᴇ
🚀/ᴅᴇᴀᴄᴛɪᴠᴀᴛᴇ
🚀/ᴅᴇᴍᴏᴛᴇ
🚀/ɢʀᴏᴜᴘᴄʜᴀɴɢᴇ
🚀/ᴘʀᴏᴍᴏᴛᴇ
🚀/ᴘᴜʀɢᴇ
🚀/ʀᴇᴍᴏᴠᴇ
🚀/ᴄʟᴏꜱᴇ
🚀/ᴏᴘᴇɴ
🚀/ʀᴇᴠᴏᴋᴇ
🚀/ᴘᴘᴄᴏᴜᴘʟᴇ
────────────────
-🄴🄳🅄🄲🄰🅃🄸🅅🄴 🧣

🎐 ${this.client.config.prefix}Ｈｅｌｐ7 [${this.client.config.prefix}ｈ7]
────────────────
🧧/ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
🧧/ᴄᴏᴠɪᴅ
🧧/ᴅᴇꜰɪɴᴇ
🧧/ᴇʟᴇᴍᴇɴᴛꜱ
🧧/ɢɪᴛʜᴜʙ
🧧/ᴜʀʙᴀɴᴅɪᴄᴛɪᴏɴᴀʀʏ
🧧/ᴡᴇᴀᴛʜᴇʀ
────────────────
-🄽🅂🄵🅆 🧣

🎐 ${this.client.config.prefix}Ｈｅｌｐ8 [${this.client.config.prefix}ｈ8]
────────────────
🔮/ᴀɴᴀʟ
🔮/ʙʟᴏᴡᴊᴏʙ
🔮/ɴꜱꜰᴡᴅᴏᴜᴊɪɴ
🔮/ɴꜱꜰᴡʟᴏʟɪ
🔮/ɴꜱꜰᴡᴘᴀᴘᴇʀ
🔮/ᴛʜɪɢʜꜱ
🔮/ʜᴇɴᴛᴀɪ
🔮/ᴍᴀɪᴅ
🔮/ᴍᴀꜱᴛᴜʀʙᴀᴛɪᴏɴ
🔮/ɴᴄᴏᴅᴇ
🔮/ɴꜱꜰᴡ-ᴡᴀɪꜰᴜ
🔮/ɴꜱꜰᴡᴊᴏᴋᴇ
🔮/ɴꜱꜰᴡ-ɴᴇᴋᴏ
🔮/ᴘᴜꜱꜱʏ
🔮/ᴛʀᴀᴘ
Type /help8 for more fun🔞
────────────────
──❅┈[ ɴᴇᴢᴜᴋᴏ ]┈❅───
┌────────────┈❅
│(❤️ω❤️)Nezuko-chan
└────────────┈⁂
ᵇʸ ᵗᵒˢʰⁱʳᵒ-ᶜʰᵉʸ*` }
        )
    }
}
