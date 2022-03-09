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
            'https://telegra.ph/file/71fe238ef2a0d09dfd199.mp4','https://telegra.ph/file/d6cba9663f73271f45ab3.mp4','https://telegra.ph/file/05a63dd751c7cc39475ff.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Konnichiwa👋 ɪ ᴀᴍ sɪᴇsᴛᴀ!

ᴛʏᴘᴇ " ${this.client.config.prefix}ᴏᴡɴᴇʀ " ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴍʏ ᴏᴡɴᴇʀ!

ᴍʏ ᴘʀᴇғʀɪx ${this.client.config.prefix}

🧾 Here are the listed commands...
────────────────
-G E N E R A L 
${this.client.config.prefix}Ｈelp1 [${this.client.config.prefix}h1]
────────────────
〽️~ᴀᴅᴍɪɴs
💠Description: Tags all Admins 
🧧Usage: ${this.client.config.prefix}Admins

〽️~ᴇᴠᴇʀʏᴏɴᴇ
💠Description:
🧧Usage: ${this.client.config.prefix}Everyone

〽️~ᴍᴏᴅs
💠Description: Displays the Moderators' contact info
🧧Usage: ${this.client.config.prefix}Mods

〽️~ᴘʀᴏғɪʟᴇ
💠Description: Displays user-profile 
🧧Usage: ${this.client.config.prefix}Profile

〽️~ʀᴀɴᴋ
💠Description: Displays user-rank
🧧Usage: ${this.client.config.prefix}Rank

〽️~xᴘ
💠Description: Displays User's Xp ♨
🧧Usage: ${this.client.config.prefix}Xp

〽️~ɪɴᴠɪᴛᴇʟɪɴᴋ
💠Description: Get the group invite link
🧧Usage: ${this.client.config.prefix}Invitelink

〽️~ᴅᴇʟᴇᴛᴇ
💠Description: Deletes the quoted Message
🧧Usage: ${this.client.config.prefix}Delete

〽️~ʀᴇᴛʀɪᴇᴠᴇ
💠Description: Well....
🧧Usage: ${this.client.config.prefix}Retrieve

〽️~ʜɪ
💠Description: Say hi to the bot
🧧Usage: ${this.client.config.prefix}Hi

〽️~sɪᴇsᴛᴀ
💠Description: Displays the info
🧧Usage: ${this.client.config.prefix}Siesta
────────────────
-W E E B S 
${this.client.config.prefix}Ｈelp2 [${this.client.config.prefix}h2]
────────────────
🧧 ${this.client.config.prefix}ᴀɴɪᴍᴇ
🧧 ${this.client.config.prefix}ᴀɴɪᴍᴇQᴜᴏᴛᴇ
🧧 ${this.client.config.prefix}ᴀɴɪᴍᴇᴄʜᴀʀ
🧧 ${this.client.config.prefix}ɢᴇɴꜱʜɪɴᴄʜᴀʀᴀᴄᴛᴇ
🧧 ${this.client.config.prefix}ʜᴜꜱʙᴀɴᴅᴏ
🧧 ${this.client.config.prefix}ʟᴏʟɪ
🧧 ${this.client.config.prefix}ᴍᴀɴɢᴀ
🧧 ${this.client.config.prefix}ᴘᴏᴋᴇᴍᴏɴ
🧧 ${this.client.config.prefix}ʀᴘᴀᴘᴇʀ
🧧 ${this.client.config.prefix}ᴠᴛᴜʙᴇʀ
🧧 ${this.client.config.prefix}ᴡᴀɪꜰᴜ
🧧 ${this.client.config.prefix}ᴀᴍᴇᴍᴇ
🧧 ${this.client.config.prefix}ᴄʜᴀʀᴀᴄᴛᴇʀ
🧧 ${this.client.config.prefix}ᴄʀᴏꜱꜱᴘʟᴀʏ
🧧 ${this.client.config.prefix}ʜᴀɪɢᴜꜱʜᴀ
🧧 ${this.client.config.prefix}ʀᴇᴄᴏᴍᴍᴇɴᴅ
🧧 ${this.client.config.prefix}ꜱᴀᴜᴄᴇ
🧧 ${this.client.config.prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
────────────────
-F U N 
${this.client.config.prefix}Ｈelp3 [${this.client.config.prefix}h3]
────────────────
〽️~ᴄʜᴇꜱꜱ
💠Discription: Chessssssss
🧧Usage: ${this.client.config.prefix}Chess

〽️~Qᴜᴏᴛᴇ
💠Discription: random quote
🧧Usage: ${this.client.config.prefix}Quote

〽️~ʀᴇᴀᴄᴛ
💠Discription: Let's React
🧧Usage: ${this.client.config.prefix}React

〽️~ᴛʀɪɢɢᴇʀ
💠Discription: Sends the triggered version of you
🧧Usage: ${this.client.config.prefix}Trigger

〽️~ᴛʀᴜᴛʜ
💠Discription: Gives you random questions
🧧Usage: ${this.client.config.prefix}Truth

〽️~ᴄʜᴀᴛ
💠Discription: Chat with the Bot in group
🧧Usage: ${this.client.config.prefix}Chat

〽️~ᴅᴀʀᴇ
💠Discription: Gives you random task
🧧Usage: ${this.client.config.prefix}Dare

〽️~ꜰᴀᴄᴛ
💠Discription: sends a random fact for you
🧧Usage: ${this.client.config.prefix}Fact

〽️~ꜱᴀꜰᴇᴊᴏᴋᴇ
💠Discription: Will send you random safe joke
🧧Usage: ${this.client.config.prefix}SafeJoke

〽️~sʜɪᴘ
💠Discription: Ship 💖 People
🧧Usage: ${this.client.config.prefix}Ship

〽️~ᴛʀɪᴠɪᴀ
💠Discription: random trivia
🧧Usage: ${this.client.config.prefix}Trivia

〽️~ᴊᴀɪʟ
💠Discription: Who wanna go to jail for being horny?
🧧Usage: ${this.client.config.prefix}Jail

〽️~ᴡᴀɴᴛᴇᴅ
💠Discription: Well... make someone wanted
🧧Usage: ${this.client.config.prefix}Wanted

〽️~ʀɪᴘ
💠Discription: RIP
🧧Usage: ${this.client.config.prefix}Rip

〽️~ᴛʀᴀsʜ
💠Discription: Make someone a trash
🧧Usage: ${this.client.config.prefix}Trash
────────────────
-M E D I A 
${this.client.config.prefix}Ｈelp4 [${this.client.config.prefix}h4]
────────────────
〽️~ɪɢ
💠Discription: Get the info of a user from ig
🧧Usage: ${this.client.config.prefix}Ig

〽️~ᴘʟᴀʏ
💠Discription: 🎵 play a song with just search term!
🧧Usage: ${this.client.config.prefix}Play

〽️~ꜱᴘᴏᴛɪꜰʏ
💠Discription: Downloads given spotify track and sends it as Audio
🧧Usage: ${this.client.config.prefix}Spotify

〽️~ᴛᴀᴋᴇ
💠Discription: steals the sticker for you
🧧Usage: ${this.client.config.prefix}Take

〽️~ʏᴛᴀᴜᴅɪᴏ
💠Discription: Downloads given YT Video and sends it as Audio
🧧Usage: ${this.client.config.prefix}Ytaudio

〽️~ʏᴛꜱᴇᴀʀᴄʜ
💠Discription: Searches YT
🧧Usage: ${this.client.config.prefix}Ytsearch

〽️~ʏᴛᴠɪᴅᴇᴏ
💠Discription: Downloads given YT Video
🧧Usage: ${this.client.config.prefix}Ytvideo

〽️~ɢᴏᴏɢʟᴇ
💠Discription: Search on the web
🧧Usage: ${this.client.config.prefix}Google

〽️~ʟʏʀɪᴄꜱ
💠Discription: Gives you the lyrics of the given song
🧧Usage: ${this.client.config.prefix}Lyrics

〽️~ᴘɪɴᴛᴇʀᴇꜱᴛ
💠Discription: Search wallpaper from pinterest.com
🧧Usage: ${this.client.config.prefix}pinterest
────────────────
-U T I L S 
${this.client.config.prefix}Help5 [${this.client.config.prefix}h5]
────────────────
🏮 ${this.client.config.prefix}ʙʟᴜʀ
🏮 ${this.client.config.prefix}ᴋɪᴛᴛᴇɴ
🏮 ${this.client.config.prefix}ꜱᴛɪᴄᴋᴇʀ
🏮 ${this.client.config.prefix}ꜱᴜʙʀᴇᴅ
🏮 ${this.client.config.prefix}ɢᴇᴛɢɪꜰ
🏮 ${this.client.config.prefix}ꜱᴄʀᴇᴇɴꜱʜᴏᴛ
🏮 ${this.client.config.prefix}ꜱᴛᴇᴀʟ
🏮 ${this.client.config.prefix}ᴛʀᴀɴꜱʟᴀᴛᴇ
🏮 ${this.client.config.prefix}ᴡɪᴋɪᴘᴇᴅɪᴀ
🏮 ${this.client.config.prefix}ᴄɪʀᴄʟᴇ
────────────────
-M O D E R A T I O N 
${this.client.config.prefix}Ｈelp6 [${this.client.config.prefix}h6]
────────────────
〽️~ᴀᴄᴛɪᴠᴀᴛᴇ
💠Description: activate certain features on group-chats
🧧Usage: ${this.client.config.prefix}Activate

〽️~ᴅᴇᴀᴄᴛɪᴠᴀᴛᴇ
💠Description: deactivate certain features on group-chats
🧧Usage: ${this.client.config.prefix}Deactivate

〽️~ᴅᴇᴍᴏᴛᴇ
💠Discription: deactivate certain features on group-chats
🧧Usage: ${this.client.config.prefix}Demote

〽️~ɢʀᴏᴜᴘᴄʜᴀɴɢᴇ
💠Description: Updates the Group Subject or Description
🧧Usage: ${this.client.config.prefix}Groupchange

〽️~ᴘʀᴏᴍᴏᴛᴇ
💠Discription: promotes the mentioned users
🧧Usage: ${this.client.config.prefix}promote

〽️~ᴘᴜʀɢᴇ
💠Discription: Removes all group members
🧧Usage: ${this.client.config.prefix}Purge

〽️~ʀᴇᴍᴏᴠᴇ
💠Discription: demotes the mentioned users
🧧Usage: ${this.client.config.prefix}Remove

〽️~ᴄʟᴏꜱᴇ
💠Discription: Close the group for all participants. Only Admins can message
🧧Usage: ${this.client.config.prefix}

〽️~ᴏᴘᴇɴ
💠Discription: Opens the group for all participants
🧧Usage: ${this.client.config.prefix}Open

〽️~ʀᴇᴠᴏᴋᴇ
💠Discription: Revokes the group link
🧧Usage: ${this.client.config.prefix}Revoke

〽️~ᴘᴘᴄᴏᴜᴘʟᴇ
💠Discription: send random ppcouple image
🧧Usage: ${this.client.config.prefix}ppcouple
────────────────
-E D U C A T I V E 
${this.client.config.prefix}Ｈelp7 [${this.client.config.prefix}h7]
────────────────
〽️~ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
💠Description: Calculates the given value
🧧Usage: ${this.client.config.prefix}calculator

〽️~ᴄᴏᴠɪᴅ
💠Description: get the covid-19 info of the current place
🧧Usage: ${this.client.config.prefix}covid

〽️~ᴅᴇꜰɪɴᴇ
💠Description: Gives you the defination of the given word
🧧Usage: ${this.client.config.prefix}Define

〽️~ᴇʟᴇᴍᴇɴᴛꜱ
💠Description: get the info of the chemical element
🧧Usage: ${this.client.config.prefix}Elements
 
〽️~ɢɪᴛʜᴜʙ
💠Description: Get github information about a user/repo
🧧Usage: ${this.client.config.prefix}GitHub

〽️~ᴜʀʙᴀɴᴅɪᴄᴛɪᴏɴᴀʀʏ
💠Description: Gives you the definition of the given word
🧧Usage: ${this.client.config.prefix}Urbandictionary

〽️/ᴡᴇᴀᴛʜᴇʀ
💠Description:
🧧Usage: ${this.client.config.prefix}Weather
────────────────
-N S F W 
${this.client.config.prefix}Help8 [${this.client.config.prefix}h8]
────────────────
🍒 ${this.client.config.prefix}ᴀɴᴀʟ
🍒 ${this.client.config.prefix}ʙʟᴏᴡᴊᴏʙ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡᴅᴏᴜᴊɪɴ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡʟᴏʟɪ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡᴘᴀᴘᴇʀ
🍒 ${this.client.config.prefix}ᴛʜɪɢʜꜱ
🍒 ${this.client.config.prefix}ʜᴇɴᴛᴀɪ
🍒 ${this.client.config.prefix}ᴍᴀɪᴅ
🍒 ${this.client.config.prefix}ᴍᴀꜱᴛᴜʀʙᴀᴛɪᴏɴ
🍒 ${this.client.config.prefix}ɴᴄᴏᴅᴇ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡ-ᴡᴀɪꜰᴜ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡᴊᴏᴋᴇ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡ-ɴᴇᴋᴏ
🍒 ${this.client.config.prefix}ᴘᴜꜱꜱʏ
🍒 ${this.client.config.prefix}ᴛʀᴀᴘ
💦For more fun type- ${this.client.config.prefix}help8
────────────────
-E C O N O M Y
${this.client.config.prefix}Help9 [${this.client.config.prefix}h9]
────────────────
🏮~🏦BANK🏦
💠Description: Displays user-bank
🧧Usage: ${this.client.config.prefix}bank

🏮~💵Daily💵
💠Description: Claims daily gold
🧧Usage: ${this.client.config.prefix}daily

🏮~🏦🪙Deposit🪙🏦
💠Description: Deposit your gold to bank
🧧Usage: ${this.client.config.prefix}deposit

🏮~💰Gamble💰
💠Discription: Test your gambling skill
🧧Usage: ${this.client.config.prefix}gamble

🏮~🪙Give🪙
💠Description: Give gold to someone
🧧Usage: ${this.client.config.prefix}give

🏮~🏦Rob🏦
💠Description: Are you a good robber someone Gold
🧧Usage: ${this.client.config.prefix}rob [tag/quote]

🏮~🎰Slot🎰
💠Description: Bet Your gold here 
🧧Usage: ${this.client.config.prefix}bet <amount>

🏮~👛Wallet👛
💠Description: Displays User wallet
🧧${this.client.config.prefix}wallet

🏮~🏧Withdraw🏧
💠Description: Withdraws gold from the bank
🧧Usage: ${this.client.config.prefix}withdraw <amount>
┌────────────┈
│  🌸禰豆子🌸
└────────────┈` }
        )
    }
}
