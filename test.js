import DiscordJS, { GuildMember, Intents, Message, Role , CommandInteraction, Channel, version, TextChannel,EmbedBuilder, RoleManager, Client, Interaction,  } from 'discord.js' //import data from discord.js
import dotenv from 'dotenv'//import .env data from file 
dotenv.config()//use .env file  
const client = new DiscordJS.Client//create a new client to the bot to use
    ({
        intents: [//intents
        Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,//allow bot to type
        Intents.FLAGS.GUILDS,//allow bot to use guilds
        Intents.FLAGS.GUILD_MESSAGES, //allow bot to interact with messages
        Intents.FLAGS.GUILD_BANS,//allow bot to ban, kick and timeout
        Intents.FLAGS.GUILD_INVITES,//allow bot to create invites
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,//allow bot to react to messages
        Intents.FLAGS.GUILD_MEMBERS,//allow bot to interact to members
        Intents.FLAGS.GUILD_VOICE_STATES,//allow bot to use voice channel
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,//allow bot to use emojis and sticker
        Intents.FLAGS.GUILD_WEBHOOKS,//allow bot to use webhook
        Intents.FLAGS.GUILD_INTEGRATIONS,//allow bot to use integration
    ]
    })
    //bot Online
const Version = 'version.test'//version
const Command = '!'//command start 
const BotCount = '7'
var Time = new Date()
client.on('ready', () => {
    console.log("Bot is online!")
    client.user.setActivity(`${Version} the official bot of nitro's server`, { type: 'STREAMING', url: "https://www.twitch.tv/nitrojam" })//default activity
    client.user.setStatus("idle")//default status
})
client.setMaxListeners(1000) //max listeners allowed

client.on('messageCreate', (message) => {
    if (message.content === `emoji`) {
        message.reply(`<a:Love:971077946645286932>`)
    }
})
//role permissions update logs
client.on('roleUpdate', (oldRole, newRole) => {
    if (oldRole.permissions == newRole.permissions) return;
    if (oldRole.permissions !== newRole.permissions) {
        const newRoles = newRole.guild.roles.cache.map(role => role.permissions.toArray()).pop().toString().replace(/[_]/g, " ").replace(/[,]/g, ", ").toLowerCase()
        const oldRoles = oldRole.guild.roles.cache.map(role => role.permissions.toArray()).pop().toString().replace(/[_]/g, " ").replace(/[,]/g, ", ").toLowerCase()
        let embed = new DiscordJS.EmbedBuilder()//message logs content
        .setTitle(`**Role permissions updated**`)
        .setColor(0xe7dd26)
            .addField("Name", `**${newRole.name}**`, `${true}`)
            .addField("Old permissions", `**${oldRoles}**`, `${true}`)
            .addField("New permissions", `**${newRoles}**`, `${true}`)
        .setFooter(`Role ID:${newRole.id}`);
        client.channels.cache.find(channel => channel.name === '🔐↣｜logs').send(({ embeds: [embed] }))//server's log message
    } else return;
})
//user pfp update logs
client.on('userUpdate', (oldUser, newUser) => {
    let guild = client.guilds.cache.get('897154008228180048'),USER_ID = oldUser.id;
    let guild2 = client.guilds.cache.get('1028779829799157932'),USER_ID2 = oldUser.id;
    if(guild.members.fetch(USER_ID)){
    if (oldUser.avatarURL() == newUser.avatarURL()) return;
    if (!oldUser.avatarURL() || !newUser.avatarURL() || newUser.avatarURL() == 'null' || oldUser.avatarURL() == 'null') return;
    if (oldUser.avatarURL() !== newUser.avatarURL()) {
        let embed = new DiscordJS.EmbedBuilder()
        .setTitle(`**${newUser.username} profile picture has been update**`)
        .setThumbnail(`${newUser.avatarURL()}`)
        .setColor(0xe7dd26)
        .addField("User", `${newUser}`, `${true}`)
        .addFields(
        { name: "Avatar", value: `[**Before**](${oldUser.avatarURL()})=>[**After**](${newUser.avatarURL()})`, inline: true },)
        .setFooter(`User ID:${newUser.id}`);
        client.channels.cache.find(channel => channel.id === '897154010543423610').send(({ embeds: [embed] }))//server's log message
        }
    } if (guild2.members.fetch(USER_ID2)) {
if (oldUser.avatarURL() == newUser.avatarURL()) return;
    if (!oldUser.avatarURL() || !newUser.avatarURL() || newUser.avatarURL() == 'null' || oldUser.avatarURL() == 'null') return;
    if (oldUser.avatarURL() !== newUser.avatarURL()) {
        let embed = new DiscordJS.EmbedBuilder()
        .setTitle(`**${newUser.username} profile picture has been update**`)
        .setThumbnail(`${newUser.avatarURL()}`)
        .setColor(0xe7dd26)
        .addField("User", `${newUser}`, `${true}`)
        .addFields(
        { name: "Avatar", value: `[**Before**](${oldUser.avatarURL()})=>[**After**](${newUser.avatarURL()})`, inline: true },)
        .setFooter(`User ID:${newUser.id}`);
        client.channels.cache.find(channel => channel.id === '1028779833024577643').send(({ embeds: [embed] }))//server's log message
        }
    }
})
//username update logs
client.on('userUpdate', (oldUsername, newUsername) => {
    let guild = client.guilds.cache.get('897154008228180048'),USER_ID = oldUsername.id;
    let guild2 = client.guilds.cache.get('1028779829799157932'),USER_ID2 = oldUsername.id;
    if (guild.members.fetch(USER_ID)) {
        if (oldUsername.username == newUsername.username) return;
        let oldName = oldUsername.username
        let newName = newUsername.username
        let avatars = `${newUsername.accentColor}`
        let avatar = (newUsername.avatarURL() == 'null') ? `https://cdn.discordapp.com/embed/avatars/0.png` : `${newUsername.avatarURL()}`
        if (oldUsername.username !== newUsername.username) {
            let embed = new DiscordJS.EmbedBuilder()
                .setTitle(`**${oldUsername.username}'s username changed**`)
                .setColor(0xe7dd26)
                .addField("Username", `${oldName} => ${newName}`, `${true}`)
                .setFooter(`User ID:${newUsername.id}`);
            client.channels.cache.find(channel => channel.id === '897154010543423610').send(({ embeds: [embed] }))//server's log message
            console.log(avatars)
        }
    } if (guild2.members.fetch(USER_ID2)) { 
        if (oldUsername.username == newUsername.username) return;
        let oldName = oldUsername.username
        let newName = newUsername.username
        let avatars = `${newUsername.accentColor}`
        let avatar = (newUsername.avatarURL() == 'null') ? `https://cdn.discordapp.com/embed/avatars/0.png` : `${newUsername.avatarURL()}`
        if (oldUsername.username !== newUsername.username) {
            let embed = new DiscordJS.EmbedBuilder()
                .setTitle(`**${oldUsername.username}'s username changed**`)
                .setColor(0xe7dd26)
                .addField("Username", `${oldName} => ${newName}`, `${true}`)
                .setFooter(`User ID:${newUsername.id}`);
            client.channels.cache.find(channel => channel.id === '1028779833024577643').send(({ embeds: [embed] }))//server's log message
            console.log(avatars)
        }
    }
})
                    const rank = new canvacord.Rank()
                .setAvatar(user2.displayAvatarURL({ dynamic: false, format: 'png' }))
        .setCurrentXP(Number(exp), `#000000`)
        .setRequiredXP(Number(((1 + lvl) * ((712*lvl)/8)*2)), `#000000`)
        .renderEmojis(true)
        .setProgressBar(`#ffffff`, "COLOR" , false)
        .setProgressBarTrack(`#ffffff`)
        .setRankColor('#f0f3f0', "0.1")
        .setLevelColor(`#f0f3f0`, "0.1")
        .setUsername(user2.username, `#000000`)
        .setRank(Number(1), "Rank", false)
        .setLevel(Number(lvl), "Level", true)
        .setOverlay("#0000ff", Number(0.164), true)
        .setBackground("IMAGE","data:image/jpeg;base64,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")
        .setDiscriminator(user2.discriminator, `#000000`);  
        rank.build()
        .then(async data => {
          //add rankcard to attachment
            const attachment = new DiscordJS.AttachmentBuilder(data, "RankCard.png");
            await interaction.reply({ files:[attachment]});
        });
//client login
client.login(process.env.TOKEN) 