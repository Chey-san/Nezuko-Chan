import { MessageType, Mimetype } from '@adiwajshing/baileys'

import MessageHandler from '../../Handlers/MessageHandler'

import BaseCommand from '../../lib/BaseCommand'

import WAClient from '../../lib/WAClient'

import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'support',

            aliases: ['support'],

            description: 'Gets the support group links',

            category: 'general',

            usage: `${client.config.prefix}Support`,

            baseXp: 10

        })

    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

        (await this.client.sendMessage(

        M.sender.jid,

        `    ♥️MY DARLING SENPAI ID♥️\n\n*Instagram * *https://instagram.com/its_chey_7*\n\n*💫 NSFW GROUP💫*:*https://chat.whatsapp.com/JrkVjwl1IJM5C8ZfpQkLgj*`,

           MessageType.text

        ))

        const n = [

            'https://telegra.ph/file/a3aad102dbd3f1ad3b923.mp4'

        ]

        let beckylynch = n[Math.floor(Math.random() * n.length)]

        return void this.client.sendMessage(M.from, { url:beckylynch }, MessageType.video, {quoted:M.WAMessage,

            mimetype: Mimetype.gif,

            caption: `Sent you the support Link in personal message #checkdm \n` }

        )

        }

}
