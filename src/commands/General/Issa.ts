import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'chey',
            description: 'Displays info about chey.',
            category: 'general',
            usage: `${client.config.prefix}chey`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://www.linkpicture.com/q/50554-Satoru-Gojo-White-Hair-Blue-Eyes-School-UniformSatoru.jpg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Hey I'm CHEY, a learner/student & an upcoming developer in the future.
            
📫𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥;
Wa.me/918373017400

⭕𝙂𝙞𝙩𝙝𝙪𝙗;
https://github.com/Chey-san

📮𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢;
https://instagram.com/its_chey_7

🚀𝘿𝙞𝙨𝙘𝙤𝙧𝙙;
｟𝖢𝗈𝗆𝗂𝗇𝗀 𝖲𝗈𝗈𝗇｠

⪼𝖲𝖾𝖾 𝗒𝖺𝗁😉✨` }
        )
    }
}
