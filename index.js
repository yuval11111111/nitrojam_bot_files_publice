const Discord = require('discord.js') //const data = require discord.js
const {
    GuildMember,
    Presence,
    Partials,
    ChatInputCommandInteraction,
    PermissionsBitField,
    SlashCommandBuilder,
    MessageMentions,
    GatewayIntentBits,
    Message,
    Role,
    CommandInteraction,
    CategoryChannel,
    ChannelType,
    VoiceChannel,
    VoiceStateManager,
    EmbedBuilder,
    RoleManager,
    Client,
    BaseInteraction,
    InteractionType,
    VoiceState,
    ClientVoiceManager,
    BaseGuildVoiceChannel,
    ChannelManager,
    GuildChannel,
    GuildChannelManager,
    ThreadChannel,
    ChannelFlags,
    ClientApplication,
    ClientUser,
    Guild,
    Emoji,
    GuildEmoji,
    GuildEmojiManager,
    User,
    UserFlags,
    UserManager,
    UserContextMenuCommandInteraction,
    ReactionUserManager,
    WebhookClient,
    Webhook,
    ButtonBuilder,
    ActionRowBuilder,
    ApplicationCommand,
    ApplicationCommandManager,
    GuildApplicationCommandManager,
    ApplicationCommandPermissionsManager,
    AttachmentBuilder,
    BaseGuildTextChannel,
    GuildEmojiRoleManager,
    GuildMemberManager,
    GuildMemberRoleManager,
    TextChannel,
    Collector,
    Collection,
    ActivityType
} = Discord
const dotenv = require('dotenv') //const .env data = require file 
const fs = require('fs');
const token = require('../nitrojam_bot/json_files/token.json');
const {
    fsync,
    fsyncSync,
    readFile,
    readFileSync,
    writeFile,
    writeFileSync,
    readdirSync
} = fs
const fetch = require('node-fetch');
const {
    Routes,
    PermissionFlagsBits
} = require('discord-api-types/v9')
const path = require('path');
const {
    join
} = path
const {
    REST
} = require("@discordjs/rest")
const {
    pathToFileURL
} = require('url');
const {
    title
} = require('process');
const {
    joinVoiceChannel
} = require('@discordjs/voice');
const {
    ButtonStyle
} = require('discord.js');
const {
    createCanvas,
    loadImage,
    Image,
    Canvas,
    registerFont
} = require('canvas')
const api = require(`../nitrojam_bot/json_files/API.json`)
const SteamAPI = require('steamapi');
const API = process.env.steamAPI
const steam = new SteamAPI(api.steam);

dotenv.config() //use .env file  
const client = new Discord.Client //create a new client to the bot to use
({
    partials: [Partials.Channel, Partials.Reaction, Partials.GuildScheduledEvent, Partials.Message, Partials.User, Partials.ThreadMember],
    intents: [ //intents
        'GuildScheduledEvents',
        'DirectMessages',
        "GuildMessageTyping", //allow bot to type
        "Guilds", //allow bot to use guilds
        "GuildMessages", //allow bot to interact with messages
        "GuildBans", //allow bot to ban, kick and timeout
        "GuildInvites", //allow bot to create invites
        "GuildMessageReactions", //allow bot to react to messages
        "GuildMembers", //allow bot to interact to members
        "GuildVoiceStates", //allow bot to use voice channel
        "GuildEmojisAndStickers", //allow bot to use emojis and sticker
        "GuildWebhooks", //allow bot to use webhook
        "GuildIntegrations", //allow bot to use integration
        "MessageContent",
        "GuildPresences"
    ]
})
//slash commands
const commands = [];
const commandFiles = fs.readdirSync('../nitrojam_bot/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`../nitrojam_bot/commands/${file}`);
    commands.push(command.data);
}
(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        // The put method is used to fully refresh all commands in the guild with the current set
        const rest = new REST({
            version: '10'
        }).setToken(token.token);
        const data = rest.put(
            Routes.applicationGuildCommands('897495641956175884', '897154008228180048' && `1028779829799157932`), {
                body: commands
            },
        );
        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
})();
//bot Online
const Version = 'v2.0.0' //version
const Command = '/' //command start 
const BotCount = '6'
const BotCount2 = `4`
var Time = new Date()
client.on('ready', () => {
    console.log("Bot is online!")
    let emoji = client.emojis.cache.find(emoji => emoji.name === `nitrodiscoo`)
    client.user.setPresence({
        activities: [{
            name: `${Version} the official bot of nitrojam's server`,
            type: ActivityType.Streaming,
            url: `https://www.twitch.tv/nitrojam`
        }],
        status: 'idle',
    })
})
client.setMaxListeners(1000) //max listeners allowed
//bot commands
//curses
client.on('messageCreate', (message) => {
    readFile("../nitrojam_bot/json_files/curse.json", "utf8", (err, allow) => {
        if (message.content.toLowerCase().includes('nigga') || message.content.toLowerCase().includes('a bitch') || message.content.toLowerCase().includes('nigger') || message.content.toLowerCase().includes('test-keyword') || message.content.toLowerCase().includes('ניגה') || message.content.toLowerCase().includes('ניגר') || message.content.toLowerCase().includes('בן של זונה')) {
            if (message.guild.id == `897154008228180048`) {
                let Member = message.member
                if (Member.roles.cache.some(role => role.name === 'CO OWNER') || Member.roles.cache.some(role => role.name === 'Dictator') || Member.roles.cache.some(role => role.name === 'BALD man') || allow.includes(Member.id)) return;
                else {
                    message.author.send(`you can't say that in nitrojam's igloo`).catch(console.error) //DM curses message
                    message.delete().catch(console.error) //delete member's message'
                    const embed = new Discord.EmbedBuilder()
                        .setColor(0xd5731b)
                        .setAuthor({
                            name: `${client.user.tag}`,
                            iconURL: `https://cdn.discordapp.com/avatars/897495641956175884/2ea264e94f324798d7e0734e524328df.webp`
                        })
                        .setTitle(`message of ${message.author.tag} have been deleted`)
                        .addFields({
                            name: "Member                       reason",
                            value: `${message.author}                           cursing`
                        })
                        .addFields({
                            name: `message:`,
                            value: `${message.content}`
                        })
                    client.channels.cache.find(channel => channel.name === '🔐↣｜logs').send(({
                        embeds: [embed]
                    })) //server's log message
                }
            } else if (message.guild.id == `1028779829799157932`) {

            }
        }
    })
})
//verify
client.on('messageCreate', (message) => {
    if (message.content.toLowerCase() == `${Command}verify`) {
        if (message.guild.id == `897154008228180048`) {
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('verify')
                    .setEmoji(`✅`)
                    .setStyle(ButtonStyle.Primary)
                )
            message.channel.send({
                content: `To complete the verify click on the ✅`,
                components: [row]
            })
        } else if (message.guild.id == `1028779829799157932`) {
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('verify')
                    .setEmoji(`✅`)
                    .setStyle(ButtonStyle.Primary)
                )
            message.channel.send({
                content: `כדי להשלים את הווארווי תלחצו על ה ✅`,
                components: [row]
            })
        }
    }
})
client.on('interactionCreate', (interaction) => {
    if (interaction.isButton() && interaction.customId == `verify`) {
        if (interaction.guild.id == `897154008228180048`) {
            const User = interaction.guild.members.cache.find(member => member.id == interaction.user.id)
            User.roles.add(`897154008228180052`)
            User.roles.remove(`986941408676040734`)
            User.user.send(`thanks ${User.user.username} for verifing`).catch(console.error)
        } else if (interaction.guild.id == `1028779829799157932`) {
            const User = interaction.guild.members.cache.find(member => member.id == interaction.user.id)
            User.roles.add(`1028779829836906616`)
            User.roles.remove(`1028779829799157938`)
            User.user.send(`thanks ${User.user.username} for verifing`).catch(console.error)
        }
    }
})
//activities
/**
 *
 * @param {Discord.MessageComponentInteraction} interaction
 */
async function updateGrid(interaction) {
    /** @type {Discord.Message} message */
    const message = interaction.message;
    let xs = 0,
        os = 0;
    for (let actionRow of message.components) {
        for (let button of actionRow.components) {
            if (button.label === 'X') xs++;
            else if (button.label === 'O') os++;
        }
    }
    const xs_turn = xs <= os;
    const i = parseInt(interaction.customId[3]),
        j = parseInt(interaction.customId[4]);
    const buttonPressed = message.components[i - 1].components[j - 1];
    if (buttonPressed.label !== '_')
        return await interaction.reply("Someone already played there!", {
            ephemeral: true
        });
    buttonPressed.label = xs_turn ? 'X' : 'O';
    buttonPressed.style = xs_turn ? "SUCCESS" : "DANGER";
    const styleToNumber = style => style === "Secondary" ? 2 : style === "SUCCESS" ? 3 : 4;
    const components = [];
    for (let actionRow of message.components) {
        components.push({
            type: 1,
            components: []
        });
        for (let button of actionRow.components) {
            components[components.length - 1].components.push({
                type: 2,
                label: button.setLabel(`${label}`),
                style: styleToNumber(button.style),
                custom_id: button.customId
            });
        }
    }
    if (interaction.customId == `ttt11` && interaction.isButton()) {
        console.log([interaction.customId], [buttonPressed])
        components[components.length - 1].components.push({
            type: 2,
            label: `X`,
            style: styleToNumber(button.style),
            custom_id: `ttt11`
        });
        message.edit({
            components: components
        });
    }
    await message.edit({
        components: components
    });
    console.log([interaction.customId], [buttonPressed])
    await interaction.deferUpdate();
}
client.on('interactionCreate', async interaction => {
    if (interaction.isButton()) {
        let first_user = interaction.message.mentions.members.first()
        let last_user = interaction.message.mentions.members.last()
        if (interaction.customId == `ttt31` || interaction.customId == `ttt32` || interaction.customId == `ttt33` || interaction.customId == `ttt21` || interaction.customId == `ttt22` || interaction.customId == `ttt23` || interaction.customId == `ttt11` || interaction.customId == `ttt12` || interaction.customId == `ttt13`) {
            if (interaction.component.label == `_` && interaction.user.id == first_user.id || interaction.user.id == last_user.id) {
                const message = interaction.message;
                let xs = 0,
                    os = 0;
                for (let actionRow of message.components) {
                    for (let button of actionRow.components) {
                        if (button.label === 'X') xs++;
                        else if (button.label === 'O') os++;
                    }
                }
                const xs_turn = xs <= os;
                const i = parseInt(interaction.customId[3]),
                    j = parseInt(interaction.customId[4]);
                let p2 = message.mentions.members.last()
                let p1 = message.mentions.members.first()
                const buttonPressed = message.components[i - 1].components[j - 1];
                if (buttonPressed.label !== '_')
                    return await interaction.message.reply("Someone already played there!", {
                        ephemeral: true
                    });
                else if (!interaction.user.id == p1.id && !interaction.user.id == p2.id && buttonPressed.label == '_') return await interaction.message.reply(`you're not allowed to play in this game between ${p1.username} and ${p2.username}`)
                buttonPressed.label = xs_turn ? 'X' : 'O';
                buttonPressed.style = xs_turn ? "SUCCESS" : "DANGER";
                buttonPressed.disabled = false ? false : true;
                const styleToNumber = style => style === "Secondary" ? 2 : style === "SUCCESS" ? 3 : 4;
                const components = [];
                for (let actionRow of message.components) {
                    components.push({
                        type: 1,
                        components: []
                    });
                    for (let button of actionRow.components) {
                        components[components.length - 1].components.push({
                            content: `${message.content}`,
                            type: 2,
                            label: button.label,
                            style: 1,
                            custom_id: button.customId,
                            disabled: button.disabled,
                        });
                        console.log(`${os} to ${xs}`)
                        console.log(`${i} ${j}`)
                        console.log(`${xs_turn}`)
                        console.log(`${components.map(c => c.customId).toLocaleString()}`)
                    }
                }
                await message.edit({
                    components: components
                });
                await interaction.deferUpdate().catch(console.error);
                //win
                let xw = message.components.map(c => components)
                let xww = JSON.stringify(xw).toString().split(`,`).slice(0, 56).join(` `)
                let xww1 = xww.split(`ttt11`).slice(0, 1).toString()
                let xww2 = xww.split(`ttt12`).slice(0, 1).toString().replace(xww1, ``)
                let xww3 = xww.split(`ttt13`).slice(0, 1).toString().replace(xww1, ``).replace(xww2, ``)
                let xww4 = xww.split(`ttt21`).slice(0, 1).toString().replace(xww1, ``).replace(xww2, ``).replace(xww3, ``)
                let xww5 = xww.split(`ttt22`).slice(0, 1).toString().replace(xww1, ``).replace(xww2, ``).replace(xww3, ``).replace(xww4, ``)
                let xww6 = xww.split(`ttt23`).slice(0, 1).toString().replace(xww1, ``).replace(xww2, ``).replace(xww3, ``).replace(xww4, ``).replace(xww5, ``)
                let xww7 = xww.split(`ttt31`).slice(0, 1).toString().replace(xww1, ``).replace(xww2, ``).replace(xww3, ``).replace(xww4, ``).replace(xww5, ``).replace(xww6, ``)
                let xww8 = xww.split(`ttt32`).slice(0, 1).toString().replace(xww1, ``).replace(xww2, ``).replace(xww3, ``).replace(xww4, ``).replace(xww5, ``).replace(xww6, ``).replace(xww7, ``)
                let xww9 = xww.split(`ttt33`).slice(0, 1).toString().replace(xww1, ``).replace(xww2, ``).replace(xww3, ``).replace(xww4, ``).replace(xww5, ``).replace(xww6, ``).replace(xww7, ``).replace(xww8, ``)
                //x win
                const components2 = [];
                for (let actionRow of message.components) {
                    components2.push({
                        type: 1,
                        components: []
                    });
                    for (let button of actionRow.components) {

                        if (buttonPressed.label == 'X') {
                            if (xww1.includes(`"label":"X"`) && xww2.includes(`"label":"X"`) && xww3.includes(`"label":"X"`) || xww4.includes(`"label":"X"`) && xww5.includes(`"label":"X"`) && xww6.includes(`"label":"X"`) || xww7.includes(`"label":"X"`) && xww8.includes(`"label":"X"`) && xww9.includes(`"label":"X"`) || xww1.includes(`"label":"X"`) && xww4.includes(`"label":"X"`) && xww7.includes(`"label":"X"`) || xww2.includes(`"label":"X"`) && xww5.includes(`"label":"X"`) && xww8.includes(`"label":"X"`) || xww3.includes(`"label":"X"`) && xww6.includes(`"label":"X"`) && xww9.includes(`"label":"X"`) || xww1.includes(`"label":"X"`) && xww5.includes(`"label":"X"`) && xww9.includes(`"label":"X"`) || xww3.includes(`"label":"X"`) && xww5.includes(`"label":"X"`) && xww7.includes(`"label":"X"`)) {
                                components2[components2.length - 1].components.push({
                                    content: `${interaction.user} won the Tic-Tac-Toe (+150 points)`,
                                    type: 2,
                                    label: 'GG',
                                    style: 1,
                                    custom_id: button.customId,
                                    disabled: true,
                                });
                                setTimeout(point, 1500)

                                function point() {
                                    readFile("../nitrojam_bot/json_files/points.json", "utf8", (err, points) => {
                                        let userPoints = points.split(message.author.id).slice(1, 2).toString()
                                        let num = parseInt(userPoints.split(' ').slice(2, 3))
                                        let reword = num + 150
                                        console.log(`test:` + [num], [reword])
                                        let new_points = points.toString().replace(`${message.author.id} = ${num}`, `${message.author.id} = ${reword}`).toString()
                                        writeFileSync('../nitrojam_bot/json_files/points.json', new_points)
                                    })
                                }
                                message.edit({
                                    components: components2
                                });
                                interaction.deferUpdate().catch(console.error);
                                interaction.message.channel.send(`${interaction.user.username} won the game (+150 points)`)
                                break
                            }
                        }
                        //o win
                        if (buttonPressed.label == 'O') {
                            if (xww1.includes(`"label":"O"`) && xww2.includes(`"label":"O"`) && xww3.includes(`"label":"O"`) || xww4.includes(`"label":"O"`) && xww5.includes(`"label":"O"`) && xww6.includes(`"label":"O"`) || xww7.includes(`"label":"O"`) && xww8.includes(`"label":"O"`) && xww9.includes(`"label":"O"`) || xww1.includes(`"label":"O"`) && xww4.includes(`"label":"O"`) && xww7.includes(`"label":"O"`) || xww2.includes(`"label":"O"`) && xww5.includes(`"label":"O"`) && xww8.includes(`"label":"O"`) || xww3.includes(`"label":"O"`) && xww6.includes(`"label":"O"`) && xww9.includes(`"label":"O"`) || xww1.includes(`"label":"O"`) && xww5.includes(`"label":"O"`) && xww9.includes(`"label":"O"`) || xww3.includes(`"label":"O"`) && xww5.includes(`"label":"O"`) && xww7.includes(`"label":"O"`)) {
                                components2[components2.length - 1].components.push({
                                    content: `${interaction.user} won the Tic-Tac-Toe (+150 points)`,
                                    type: 2,
                                    label: "GG",
                                    style: 1,
                                    custom_id: button.customId,
                                    disabled: true,
                                });
                                setTimeout(point, 1500)

                                function point() {
                                    readFile("../nitrojam_bot/json_files/points.json", "utf8", (err, points) => {
                                        let userPoints = points.split(message.author.id).slice(1, 2).toString()
                                        let num = parseInt(userPoints.split(' ').slice(2, 3))
                                        let reword = num + 150
                                        console.log(`test:` + [num], [reword])
                                        let new_points = points.toString().replace(`${message.author.id} = ${num}`, `${message.author.id} = ${reword}`).toString()
                                        writeFileSync('../nitrojam_bot/json_files/points.json', new_points)
                                    })
                                }
                                message.edit({
                                    components: components2
                                });
                                interaction.deferUpdate().catch(console.error);
                                interaction.message.channel.send(`${interaction.user.username} won the game (+150 points)`)
                                message.edit({
                                    components: components2
                                });
                                interaction.deferUpdate().catch(console.error);
                                break
                            }
                        }
                    }
                }
            } else return;
        }
    }
})
//welcome system
client.on('guildMemberAdd', (member, message) => {
    if (member.guild.id == `897154008228180048`) {
        const WelcomeChannelid = '966724005308543026' //welcome channel id
        let Verify = client.channels.cache.find(channel => channel.id === '986934680219680778') //get channel "verify"
        const Channel = client.channels.cache.get("986934680219680778");
        let wc = member.guild.channels.cache.get(WelcomeChannelid)
        wc.send(`<@${member.id}> Hey bud, welcome to NitroJam's igloo have fun i guess, or not lol ... !\nplease verify yourself at ${Verify}`) //welcome message
        const embed4 = new Discord.EmbedBuilder()
            .setColor(0x18C760)
            .setAuthor({
                name: `${client.user.tag}`,
                iconURL: `${client.user.avatarURL()}`
            })
            .setThumbnail("https://cdn.discordapp.com/avatars/450003891472564234/d3fa0d95e960b710d7401d0ebcd6f28e.webp")
            .addFields({
                name: `${member.user.username} welcome to NitroJam's igloo`,
                value: `we're happy you joined us<a:hello:968415368806821898>`
            })
            .addFields({
                name: `please verify yourself`,
                value: `you can do that in the ${Channel} channel`
            }, {
                name: `if you have any problems`,
                value: `reply this message with help`
            }, )
            .setFooter({
                text: `This message made with NitroJam Bot`,
                iconURL: "https://cdn.discordapp.com/app-icons/897495641956175884/2ea264e94f324798d7e0734e524328df.png?size=512"
            })
        member.user.send({
            embeds: [embed4]
        }).catch(console.error)
        member.roles.remove('897154008228180052').catch(console.error) //remove member's role
        member.roles.remove('897154008228180054').catch(console.error) //remove member's role

        member.guild.channels.cache.get('967808947530661910').setName(`❄️｜members: ${member.guild.memberCount - BotCount}`).catch(console.error) //server's member's count room's name changer
        console.log(`member count is ${member.guild.memberCount - BotCount} members`) //log message
        member.roles.add(`986941408676040734`).catch(console.error)

    } else if (member.guild.id == `1028779829799157932`) {
        const WelcomeChannelid = '1028779831040671859' //welcome channel id
        let Verify = client.channels.cache.find(channel => channel.id === '1028779831040671860') //get channel "verify"
        const Channel = client.channels.cache.get("1028779831040671860");
        let wc = member.guild.channels.cache.get(WelcomeChannelid)
        wc.send(`<@${member.id}> שלום גיימר ברוך הבא\nבבקשה תאשר את עצמך בחדר הזה ${Verify}`) //welcome message
        const embed4 = new Discord.EmbedBuilder()
            .setColor(0x18C760)
            .setAuthor({
                name: `${client.user.tag}`,
                iconURL: `${client.user.avatarURL()}`
            })
            .setThumbnail("https://cdn.discordapp.com/avatars/450003891472564234/d3fa0d95e960b710d7401d0ebcd6f28e.webp")
            .addFields({
                name: `${member.user.username} welcome to NitroJam's igloo`,
                value: `we're happy you joined us<a:hello:968415368806821898>`
            })
            .addFields({
                name: `please verify yourself`,
                value: `you can do that in the ${Channel} channel`
            }, {
                name: `if you have any problems`,
                value: `reply this message with help`
            }, )
            .setFooter({
                text: `This message made with NitroJam Bot`,
                iconURL: "https://cdn.discordapp.com/app-icons/897495641956175884/2ea264e94f324798d7e0734e524328df.png?size=512"
            })
        member.user.send({
            embeds: [embed4]
        }).catch(console.error)
        member.roles.remove('1028779829836906616').catch(console.error) //remove member's role
        member.roles.remove('1028779829836906615').catch(console.error) //remove member's role

        member.guild.channels.cache.get('1028779831040671862').setName(`❄️｜אנשים: ${member.guild.memberCount - BotCount2}`).catch(console.error) //server's member's count room's name changer
        console.log(`member count is ${member.guild.memberCount - BotCount2} members`) //log message

        member.roles.add(`1028779829799157938`).catch(console.error)
    }
})
//leave message
client.on("guildMemberRemove", (member) => {
    if (member.guild.id == `897154008228180048`) {
        const WelcomeChannelid = '966724005308543026' //welcome channel id
        let wc = member.guild.channels.cache.get(WelcomeChannelid)
        wc.send(`${member}welp i guess you didnt have fun, pfff loser `); //leave message
        member.guild.channels.cache.get('967808947530661910').setName(`❄️｜members: ${member.guild.memberCount - BotCount}`) //server's member's count room's name changer
        console.log(`member count is ${member.guild.memberCount - BotCount} members`) //log message
        console.log('someone left the server') //log message
    } else if (member.guild.id == `1028779829799157932`) {
        const WelcomeChannelid = '1028779831040671859' //welcome channel id
        let wc = member.guild.channels.cache.get(WelcomeChannelid)
        wc.send(`${member}קישטה פינוקיו `); //leave message
        member.guild.channels.cache.get('1028779831040671862').setName(`❄️｜members: ${member.guild.memberCount - BotCount2}`) //server's member's count room's name changer
        console.log(`member count is ${member.guild.memberCount - BotCount2} members`) //log message
        console.log('someone left the server') //log message
    }
});
//count members system
client.on("guildMemberAdd", (member) => {
    if (member.guild.id == `897154008228180048`) {
        const channel = client.channels.cache.get('967808947530661910')
        channel.setName(`❄️｜members: ${member.guild.memberCount - BotCount}`) //server's member's count room's name changer
        console.log(`member count is ${member.guild.memberCount - BotCount} members`) //log message
    } else if (member.guild.id == `1028779829799157932`) {
        const channel = client.channels.cache.get('1028779831040671862')
        channel.setName(`❄️｜אנשים: ${member.guild.memberCount - BotCount2}`) //server's member's count room's name changer
        console.log(`member count is ${member.guild.memberCount - BotCount2} members`) //log message
    }
})
client.on("guildMemberRemove", (member) => {
    if (member.guild.id == `897154008228180048`) {
        const channel = client.channels.cache.get('967808947530661910')
        channel.setName(`❄️｜members: ${member.guild.memberCount - BotCount}`) //server's member's count room's name changer
        console.log(`member count is ${member.guild.memberCount - BotCount} members`) //log message
    } else if (member.guild.id == `1028779829799157932`) {
        const channel = client.channels.cache.get('1028779831040671862')
        channel.setName(`❄️｜אנשים: ${member.guild.memberCount - BotCount2}`) //server's member's count room's name changer
        console.log(`member count is ${member.guild.memberCount - BotCount2} members`) //log message
    }
})
client.on("guildMemberUpdate", (member, newMember) => {
    if (member.guild.id == `897154008228180048`) {
        const channel = client.channels.cache.get('967808947530661910')
        channel.setName(`❄️｜members: ${member.guild.memberCount - BotCount}`) //server's member's count room's name changer
        console.log(`member count is ${member.guild.memberCount - BotCount} members`) //log message
    } else if (member.guild.id == `1028779829799157932`) {
        const channel = client.channels.cache.get('1028779831040671862')
        channel.setName(`❄️｜אנשים: ${member.guild.memberCount - BotCount2}`) //server's member's count room's name changer
        console.log(`member count is ${member.guild.memberCount - BotCount2} members`) //log message
    }
})
//nitrojam ping chat delete
client.on('messageCreate', (message) => {
    let channel = message.channel.type
    if (channel !== ChannelType.DM) {
        readFile("../nitrojam_bot/json_files/ping_access.json", "utf8", (err, ping) => {
            if (!ping.includes(message.author.id)) {
                if (message.channel.id == `1028779831581745303` || message.channel.id == `966723150115135488`) {
                    if (message.content.includes(`<@450003891472564234>`)) return message.delete().then(message.author.send(`please do not ping NitroJam`).catch(console.error)).catch(console.error)
                } else return;
            }
        })
    }
})
//activity fix
client.once('ready', () => {
    if (!client.presence.activities || client.presence.activities.length == 0) {
        client.user.setActivity(`${Version} the official bot of nitrojam's server`, {
            type: 'STREAMING',
            url: "https://www.twitch.tv/nitrojam"
        }) //default activity
    }
})
//DM help system
client.on('messageCreate', (message) => {
    const verify = client.channels.cache.get("986934680219680778");
    const command = client.channels.cache.get("966724563306180718");
    const id = `701017199300837386`
    let y2 = client.users.cache.find(user => user.id === `${id}`)
    let channel = message.channel.type
    if (channel == ChannelType.DM) {
        if (message.content.toLowerCase() == `help`) {
            return message.author.createDM(message.author.send(`Hey ${message.author.username} please send the type of help you need(verify/command/bug)\nonly for the english server`))
        }
        if (message.content.toLowerCase() == `verify`) {
            message.author.createDM(message.author.send(`press on the button in the ${verify} channel`))
        }
        if (message.content.toLowerCase() == `bug`) {
            message.author.createDM(message.author.send(`DM ${y2} about the bug`))
        }
        if (message.content.toLowerCase() == `command`) {
            message.author.createDM(message.author.send(`send the command you need help with (add the "?"after the command name and without the "!" just the name + "?" (help?, say?...))`))
        }
        if (message.content.toLowerCase() == `help?`) {
            message.author.createDM(message.author.send(`can be use in any channel to ask the staff for help\n${Command}help`))
        }
        if (message.content.toLowerCase() == `avatar?`) {
            message.author.createDM(message.author.send(`can be use in ${command} to get someone's pfp\n${Command}avatar <user>`))
        }
        if (message.content.toLowerCase() == `info?`) {
            message.author.createDM(message.author.send(`can be use in ${command} to get some info about a member\n${Command}info <user>`))
        }
        if (message.content.toLowerCase() == `commands?` || message.content == `cmd?`) {
            message.author.createDM(message.author.send(`can be use in ${command} to get all the bot commands\n${Command}cmd`))
        }
        if (message.content.toLowerCase() == `say?`) {
            message.author.createDM(message.author.send(`can be use in any channel to make the bot say any message\n${Command}say <message>`))
        }
        if (message.content.toLowerCase() == `embed?`) {
            message.author.createDM(message.author.send(`can be use in ${command} to make the bot send any embed message (only text support)\n${Command}embed <hex color> <message>`))
        }
        if (message.content.toLowerCase() == `youtube?`) {
            message.author.createDM(message.author.send(`can be use in ${command} to get a link you NitroJam's youtube channel\n${Command}youtube`))
        }
        if (message.content.toLowerCase() == `twitch?`) {
            message.author.createDM(message.author.send(`can be use in ${command} to get a link you NitroJam's twitch page\n${Command}twitch`))
        }
        if (message.content.toLowerCase() == `hex?`) {
            message.author.createDM(message.author.send(`can be use in ${command} to get a hex code from rgb code\n${Command}hex <red value>--<green value>--<blue value>`))
        }
        if (message.content.toLowerCase() == `rgb?`) {
            message.author.createDM(message.author.send(`can be use in ${command} to get a rgb code from hex code\n${Command}rgb <hex code>`))
        } else return;
    }
})
//add role
//alert roles
client.on('interactionCreate', (interaction) => {
    if (interaction.isSelectMenu() && interaction.customId == `add`) {
        let role = interaction.values[0];
        const User = interaction.guild.members.cache.find(member => member.id == interaction.user.id)
        User.roles.add(role).catch(console.error)
        console.log(role)
    }
    //remove roles
    if (interaction.isSelectMenu() && interaction.customId == `remove`) {
        let role = interaction.values[0];
        const User = interaction.guild.members.cache.find(member => member.id == interaction.user.id)
        User.roles.remove(role)
    }
})
//log
//delete messages
client.on("messageDelete", (messageDelete) => {
    if (messageDelete.channel.type !== ChannelType.DM) {
        if (messageDelete.author == null) return;
        if (messageDelete.content == null) return;
        if (messageDelete.content.length === 0) return
        let embed = new Discord.EmbedBuilder()
            .setTitle("**Message have been deleted**")
            .setColor(0xe7dd26)
            .addFields({
                name: "Channel",
                value: `${messageDelete.channel}`
            })
            .addFields({
                name: "Message",
                value: `${messageDelete.content}`
            })
            .addFields({
                name: "Author",
                value: `${messageDelete.author}`
            })
            .setFooter({
                text: `Message ID: ${messageDelete.id}`
            });
        let id = (messageDelete.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
        client.channels.cache.find(channel => channel.id === id).send(({
            embeds: [embed]
        })) //server's log message
    }
});
//connect/disconnect log
client.on("voiceStateUpdate", (oldVoiceState, newVoiceState) => { // Listeing to the voiceStateUpdate event
    if (oldVoiceState.channel === null) { // The member connected to a channel.
        let embed = new Discord.EmbedBuilder()
            .setTitle("**User connected to a voice channel**")
            .setColor(0xe7dd26)
            .addFields({
                name: "Channel",
                value: `${newVoiceState.channel}`
            })
            .addFields({
                name: "Member",
                value: `${newVoiceState.member.user}`
            })
        let id = (newVoiceState.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
        client.channels.cache.find(channel => channel.id === id).send(({
            embeds: [embed]
        })) //server's log message
    } else if (newVoiceState.channel === null) { // The member disconnected from a channel.
        let embed = new Discord.EmbedBuilder()
            .setTitle("**User have been disconnected from a voice channel**")
            .setColor(0xe7dd26)
            .addFields({
                name: "Channel",
                value: `${oldVoiceState.channel}`
            })
            .addFields({
                name: "Member",
                value: `${oldVoiceState.member.user}`
            })
        let id = (oldVoiceState.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
        client.channels.cache.find(channel => channel.id === id).send(({
            embeds: [embed]
        })) //server's log message
    } else if (oldVoiceState.channel !== newVoiceState.channel) {
        let embed = new Discord.EmbedBuilder()
            .setTitle("**user moved a voice channel**")
            .setColor(0xe7dd26)
            .addFields({
                name: "Channels",
                value: `old:${oldVoiceState.channel}\nnew:${newVoiceState.channel}`
            })
            .addFields({
                name: "Member",
                value: `${oldVoiceState.member.user}`
            })
        let id = (newVoiceState.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
        client.channels.cache.find(channel => channel.id === id).send(({
            embeds: [embed]
        })) //server's log message
    }
})
//role update log 
client.on('guildMemberUpdate', (oldMember, newMember) => {
    let avatar = newMember.avatarURL()
    if (oldMember.roles.cache.size < newMember.roles.cache.size) {
        var roles = `${oldMember.roles.cache.map(role => `${role.id}`)}`
        const updateRole = `${newMember.roles.cache.map(role => `${role.id}`)}`
        for (let i = 0; i < updateRole.length; i++) {
            const role0 = updateRole.split(",").slice(updateRole.length - updateRole.length + i, updateRole.length - updateRole.length + i + 1)
            const role1 = roles.split(",").slice(updateRole.length - updateRole.length + i, updateRole.length - updateRole.length + i + 1)
            if (`${role0}` !== `${role1}`) {
                let embed = new Discord.EmbedBuilder()
                    .setTitle(`**Role have been added to ${oldMember.user.tag}**`)
                    .setColor(0xe7dd26)
                    .addFields({
                        name: "User",
                        value: `${newMember.user}`
                    })
                    .addFields({
                        name: "Role",
                        value: `<@&${role0}>`
                    })
                    .setFooter({
                        text: `User ID:${oldMember.user.id}`
                    });
                let id = (oldMember.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
                client.channels.cache.find(channel => channel.id === id).send(({
                    embeds: [embed]
                })) //server's log message
                break
            }
        }
    } else if (oldMember.roles.cache.size > newMember.roles.cache.size) {
        var roles = `${newMember.roles.cache.map(role => `${role.id}`)}`
        const updateRole = `${oldMember.roles.cache.map(role => `${role.id}`)}`
        for (let i = 0; i < updateRole.length; i++) {
            const role0 = updateRole.split(",").slice(updateRole.length - updateRole.length + i, updateRole.length - updateRole.length + i + 1)
            const role1 = roles.split(",").slice(updateRole.length - updateRole.length + i, updateRole.length - updateRole.length + i + 1)
            if (`${role0}` !== `${role1}`) {
                let embed = new Discord.EmbedBuilder()
                    .setTitle(`**Role have been removed from ${oldMember.user.tag}**`)
                    .setColor(0xe7dd26)
                    .addFields({
                        name: "User",
                        value: `${oldMember.user}`
                    })
                    .addFields({
                        name: "Role",
                        value: `<@&${role0}>`
                    })
                    .setFooter({
                        text: `User ID:${oldMember.user.id}`
                    });
                let id = (oldMember.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
                client.channels.cache.find(channel => channel.id === id).send(({
                    embeds: [embed]
                })) //server's log message
                break
            }
        }
    } else return;
})
//channel created logs
client.on('channelCreate', (channel) => {
    if (!channel.guild) return;
    else {
        let embed = new Discord.EmbedBuilder()
            .setTitle(`**Channel created**`)
            .setColor(0xe7dd26)
            .addFields({
                name: "Name",
                value: `#${channel.name}\n ${channel}`
            })
            .setFooter({
                text: `Channel ID:${channel.id}`
            });
        let id = (channel.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
        client.channels.cache.find(channel => channel.id === id).send(({
            embeds: [embed]
        })) //server's log message
    }
})
//channel deleted logs
client.on('channelDelete', (channel) => {
    if (!channel.guild) return;
    else {
        let embed = new Discord.EmbedBuilder()
            .setTitle(`**Channel deleted**`)
            .setColor(0xe7dd26)
            .addFields({
                name: "Name",
                value: `#${channel.name}`
            })
            .setFooter({
                text: `Channel ID:${channel.id}`
            });
        let id = (channel.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
        client.channels.cache.find(channel => channel.id === id).send(({
            embeds: [embed]
        })) //server's log message
    }
})
//nickname update logs
client.on('guildMemberUpdate', (oldMember, newMember) => {
    if (oldMember.nickname == newMember.nickname) return;
    let nicknameOld = `${oldMember.nickname}`
    let nicknameNew = `${newMember.nickname}`
    nicknameOld = (!oldMember.nickname || oldMember.nickname == oldMember.user.username) ? `${oldMember.user.username}` : `${oldMember.nickname}`
    nicknameNew = (!newMember.nickname || newMember.nickname == newMember.user.username) ? `${newMember.user.username}` : `${newMember.nickname}`
    if (oldMember.nickname !== newMember.nickname || oldMember.user.username !== newMember.nickname || oldMember.nickname !== newMember.user.username) {
        let embed = new Discord.EmbedBuilder()
            .setTitle(`**${oldMember.user.username}'s server nickname changed**`)
            .setColor(0xe7dd26)
            .addFields({
                name: "Nickname",
                value: `${nicknameOld} => ${nicknameNew}`
            })
            .setFooter({
                text: `User ID:${newMember.user.id}`
            });
        let id = (oldMember.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
        client.channels.cache.find(channel => channel.id === id).send(({
            embeds: [embed]
        })) //server's log message
    }
})
//message edit logs 
client.on('messageUpdate', (oldMessage, newMessage) => {
    if (oldMessage.channel.type !== ChannelType.DM) {
        if (oldMessage.content !== newMessage.content) { //if message has been edit
            let embed = new Discord.EmbedBuilder() //message logs content
                .setTitle(`**Message has been edit**`)
                .setColor(0xe7dd26)
                .addFields({
                    name: "Author",
                    value: `${newMessage.author}`
                })
                .addFields({
                    name: "Old message",
                    value: `${oldMessage.content}`
                })
                .addFields({
                    name: "New message",
                    value: `${newMessage.content}`
                })
                .setFooter({
                    text: `Message ID:${newMessage.id}`
                });
            let id = (oldMessage.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
            client.channels.cache.find(channel => channel.id === id).send(({
                embeds: [embed]
            })) //server's log message
        }
    }
})
//role created log
client.on('roleCreate', (role) => {
    let Role = role.guild.roles.cache.map(role => role.permissions.toArray()).pop().toString().replace(/[_]/g, " ").replace(/[,]/g, ", ").toLowerCase()
    Role = (!Role) ? `none` : Role
    let role_name = role.name
    role_name = (role_name == null || role_name == undefined) ? `undefined` : role.name
    setTimeout(() => {
        if (!Role || Role == undefined || role.id == undefined) return;
        else {
            let embed = new Discord.EmbedBuilder() //message logs content
                .setTitle(`**Role created**`)
                .setColor(0xe7dd26)
                .addFields({
                    name: "role",
                    value: `**${role_name}**`
                })
                .addFields({
                    name: "Permissions",
                    value: `${Role}`
                })
                .setFooter({
                    text: `Role ID:${role.id}`
                });
            let id = (role.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
            let c = client.channels.cache.find(channel => channel.id === id)
            c.send(({
                embeds: [embed]
            })) //server's log message
        }
    }, 1000)
})
//role removed log
client.on('roleDelete', (role) => {
    let embed = new Discord.EmbedBuilder() //message logs content
        .setTitle(`**Role deleted**`)
        .setColor(0xe7dd26)
        .addFields({
            name: "role",
            value: `**${role.name}**`
        })
        .setFooter({
            text: `Role ID:${role.id}`
        });
    let id = (role.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
    client.channels.cache.find(channel => channel.id === id).send(({
        embeds: [embed]
    })) //server's log message
})
//role name update logs
client.on('roleUpdate', (oldRole, newRole) => {
    if (oldRole.name == newRole.name) return;
    if (!oldRole.name || !newRole.name || oldRole.name == undefined) return;
    if (oldRole.name !== newRole.name) {
        let embed = new Discord.EmbedBuilder() //message logs content
            .setTitle(`**Role name changed**`)
            .setColor(0xe7dd26)
            .addFields({
                name: "Name",
                value: `**${oldRole.name}**=>**${newRole.name}**`
            })
            .setFooter({
                text: `Role ID:${newRole.id}`
            });
        let id = (oldRole.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
        client.channels.cache.find(channel => channel.id === id).send(({
            embeds: [embed]
        })) //server's log message
    } else return;
})
//role color changed logs
client.on('roleUpdate', (oldRole, newRole) => {
    if (oldRole.hexColor == newRole.hexColor) return;
    if (oldRole.hexColor !== newRole.hexColor) {
        let newColor = newRole.hexColor.replace(/[#]/, "")
        let oldColor = oldRole.hexColor.replace(/[#]/, "")
        let embed = new Discord.EmbedBuilder() //message logs content
            .setTitle(`**Role color changed**`)
            .setColor(0xe7dd26)
            .addFields({
                name: "Color",
                value: `[**${oldRole.hexColor}**](https://serux.pro/rendercolour?hex=${oldColor}&height=100&width=225)=>[**${newRole.hexColor}**](https://serux.pro/rendercolour?hex=${newColor}&height=100&width=225)`,
                inline: true
            }, )
            .setFooter({
                text: `Role ID:${newRole.id}`
            });
        const c = client.channels.cache.find(channel => channel.id === '897154010543423610')
        c.send(({
            embeds: [embed]
        })) //server's log message
    } else return;
})
//edit bot message command
client.on('messageCreate', (message) => {
    let ID = message.content.split(` `).slice(1, 2).join(` `)
    let newMessage = message.content.split(` `).slice(2).join(` `)
    let list = message.channel.messages.fetch(`${ID}`).then(message => message)
    let listContent = Promise.resolve(list).then(function (value) {
        if (message.content.toLowerCase().startsWith(`${Command}edit`) || message.author == client.user && message.content == `${value.content}` && message.content.length == value.content.length) {
            let member = message.member
            if (member.roles.cache.some(role => role.name === 'ADMIN') || member.roles.cache.some(role => role.name === 'CO OWNER') || member.roles.cache.some(role => role.name === 'Dictator') || member.roles.cache.some(role => role.name === 'BALD man') || member.roles.cache.some(role => role.name === 'MODERATOR') || member.roles.cache.some(role => role.name === 'HELPER')) {
                if (ID.length == 0 || !ID) return;
                if (newMessage.length == 0 || !newMessage) return message.reply(`please put the new message content`).then(message.react(`❌`))
                message.delete()
                console.log(value.content)
                value.edit(`${newMessage}`).then(message => console.log(value)).catch(console.error)
            } else return;
        } else return;
    }, function (value) {})
})
client.on('interactionCreate', (interaction) => {
    if (interaction.isButton() && interaction.customId == `xMod`) {
        readFile("../nitrojam_bot/json_files/fnf.json", "utf8", (err, users) => {
            let user = users.includes(interaction.user.id)
            console.log(user)
            if (user == `true` || user == true) {
                interaction.message.delete().catch(console.error())
            } else return;
        })
    }
})
client.on('messageCreate', (message) => {
    if (message.channel.id == `988030349332324423`) {
        if (message.author.id == `897495641956175884` || message.author.bot) return;
        else if (!message.content.toLowerCase().startsWith(`${Command}fnfmr`)) {
            message.delete().catch(console.error())
        }
    }
})
//test
client.once('ready', () => {
    function currentTime() {
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        let month = date.getMonth() + 1;
        let dd = date.getDay() + 1;
        let age = date.getFullYear() - 2002
        let session = "AM";

        if (hh == 0) {
            hh = 12;
        }
        if (hh > 12) {
            hh = hh - 12;
            session = "PM";
        }

        hh = (hh < 10) ? "0" + hh : hh;
        mm = (mm < 10) ? "0" + mm : mm;

        let time = month + '-' + dd + '-' + hh + "-" + mm + "-" + ss + session;
        let t = setTimeout(function () {
            currentTime()
        }, 1000);
        console.log(time)
        if (time == `6--01-19-0PM`) {
            client.channels.cache.find(channel => channel.name === '🔐↣｜owners-chat').send(`היקר<@450003891472564234>\nאני מכיר אותך כבר מעל 4 שנים\nאני עברתי איתך ירידות ועליות וגם כשההיתי על סף מוות אתה עדיין עשית לי את היום\nבאמת שאין עליך\nמזל טוב על יום הולדות ${age} ועד 120\nאוהב אותך ומאחל לך כל טוב שבעולם יובל`) //server's log message
        }
        if (dd == 2 || dd == 3 || dd == 4 || dd == 5) {
            if (hh == 08 && session == `PM` && mm == 00 && ss == 0) {
                let channel = client.channels.cache.find(ch => ch.id == `1028987660540325918`)
                channel.send(`נייטרו כרגע בלייב בטיקטוק בקישור https://www.tiktok.com/@nitrojam_/live <@&1028779829836906612> @everyone <@&1041659015970701332> \n ||זה הודעה אוטומטית הבנויה על שעון כבקשת נייטרו אז אם אין לייב סליחה על התיוג||`)
            }
        }
        if (hh == 01 && session == `PM` && mm == `38` && ss == `0`) {
            let channel = client.channels.cache.find(ch => ch.id == `1028779833301409896`)

        }
    }
    console.log(`${currentTime()}`)
}, )

//tickets
//create ticket
client.on("messageReactionAdd", (reaction, user) => { // When a reaction is added
    readFile("../nitrojam_bot/json_files/ticket.json", "utf8", (err, points) => {
        if (user.bot) return; // If the user who reacted is a bot, return
        if (reaction.emoji.name !== "✅") return;
        if (reaction.message.channel.id !== `990866225833857054`) return;
        const {
            guild
        } = reaction.message //store the guild of the reaction in variable
        let channelName = `ticket-help ` + parseInt(points)
        const member = guild.members.cache.find(member => member.id === user.id); //find the member who reacted
        guild.channels.create(`${channelName}`, {
            type: 'GUILD_TEXT',
            permissionOverwrites: [{
                    id: member.id,
                    allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES],
                },
                {
                    id: '897154008333045786',
                    allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES],
                },
                {
                    id: reaction.message.guild.id,
                    deny: [Permissions.FLAGS.VIEW_CHANNEL],
                },
            ]
        })
        reaction.message.reactions.resolve(`✅`).users.remove(member.id)
    });
})

client.on("messageReactionAdd", (reaction, user) => { // When a reaction is added
    readFile("../nitrojam_bot/json_files/ticket.json", "utf8", (err, points) => {
        if (user.bot) return; // If the user who reacted is a bot, return
        if (reaction.emoji.name !== "✅") return;
        if (reaction.message.channel.id == `990866225833857054` || reaction.message.channel.id == `1028779832328323208`) {
            let num = parseInt(points);
            let num2 = num + 1
            console.log([num], [num2])
            writeFileSync('../nitrojam_bot/json_files/ticket.json', `${num2}`)
        }
    })
})
client.on('interactionCreate', (interaction) => {
    if (interaction.isButton() && interaction.customId == `xGame`) {
        if (interaction.user.id == `701017199300837386` || interaction.user.id == `450003891472564234`) {
            interaction.message.delete()
        }
    }
})
client.on('messageCreate', (message) => {
    if (message.channel.id == `991002298132082789`) {
        if (message.author.id == `897495641956175884`) return;
        if (!message.content.toLowerCase().startsWith(`${Command}gr`)) {
            message.delete()
        }
    }
})
//reacton delete
client.on("messageReactionAdd", (reaction, user) => { // When a reaction is added
    if (user.bot) return; // If the user who reacted is a bot, return
    if (user.id == '450003891472564234' || user.id == '701017199300837386') {
        if (reaction.emoji.name !== "nope") return;
        if (reaction.message.channel.id !== `991002298132082789`) return;
        let message = reaction.message
        message.delete().catch(console.error)
    }
});
//get emoji id
client.on('messageCreate', (message) => {
    if (message.content.startsWith(`${Command}emojiID`)) {
        let emojiName = message.content.split(" ").slice(1, 2)
        let emoji = client.emojis.cache.find(emoji => emoji.name === `${emojiName}`)
        message.channel.send(`${emoji} ${emoji.id}`)
    }
})
//anti-link 
client.on('messageCreate', (message) => {
    if (message.channel.type !== ChannelType.DM) {
        if (message.content.includes(`https://discord.gg`)) {
            if (message.member.roles.cache.some(role => role.id == `992759090818338876`) || message.member.roles.cache.some(role => role.id == `967498064057221272`) || message.member.roles.cache.some(role => role.id == `897154008333045788`) || message.member.roles.cache.some(role => role.id == `897154008333045789`)) return;
            message.delete().catch(console.error)
            message.author.send(`You don't have a permission to send invites in nitrojam's channel`).catch(console.error)
        }
    }
})
//chat logs
client.on('messageCreate', (message) => {
    let channel = message.channel.name
    channel = (channel == undefined) ? ChannelType.DM : channel
    let Message = `${channel}> ${message.author.username}> ${message.content}`
    let file = (fetch('../nitrojam_bot/json_files/logs.json')).then(x => x.type == ``).catch(console.error)
    readFile("../nitrojam_bot/json_files/logs.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        if (message.contect !== `${Command}chatlogs`) {
            writeFileSync('../nitrojam_bot/json_files/logs.json', `${jsonString}` + `\n` + Message, {
                encoding: 'utf8',
                flag: 'w'
            })
        }
    });
    if (message.content == `${Command}chatlogs`) {
        readFile("../nitrojam_bot/json_files/logs.json", "utf8", (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
            console.log("Chat History:", jsonString);
        })
    }
})
//points command
client.on('messageCreate', (message) => {
    if (message.channel.type !== ChannelType.DM) {
        readFile("../nitrojam_bot/json_files/points.json", "utf8", (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
            if (message.author.bot) return;
            if (!jsonString.includes(message.author.id)) {
                writeFileSync('../nitrojam_bot/json_files/points.json', `` + `${jsonString}` + `\n` + `${message.author.id}` + ` = ` + `0`, {
                    encoding: 'utf8',
                    flag: 'w'
                })
            }
            if (jsonString.includes(message.author.id)) {
                function getRandomInt(max) {
                    return Math.floor(Math.random() * max);
                }
                let userPoints = jsonString.split(message.author.id).slice(1, 2).toString()
                let num = parseInt(userPoints.split(' ').slice(2, 3))
                let newNum = getRandomInt(20) + 5
                let double_xp = message.member.roles.cache.some(role => role.name === 'double points') || message.member.roles.cache.some(role => role.id === '1028779829799157933')
                let NUM = (double_xp) ? newNum * 2 : newNum
                let newPoints = num + NUM
                console.log(num)
                console.log(newPoints)
                let newUser = jsonString.replace(`${message.author.id} = ${num}`, `${message.author.id} = ${newPoints}`)
                writeFileSync('../nitrojam_bot/json_files/points.json', `` + `${newUser}`, {
                    encoding: 'utf8',
                    flag: 'w'
                })
                console.log(`points:`, [newNum], [NUM])
            }
        });
    }
})
//rank system
client.on('messageCreate', (message) => {
    if (message.channel.type !== ChannelType.DM) {
        let file = (message.guild.id == `897154008228180048`) ? '../nitrojam_bot/json_files/rank.json' : '../nitrojam_bot/json_files/rank2.json'
        readFile("../nitrojam_bot/json_files/channel.json", "utf8", (err, channels) => {
            readFile(file, "utf8", (err, rank) => {
                if (err) {
                    console.log("File read failed:", err);
                    return;
                }
                if (message.author.bot) return;
                if (!rank.includes(message.author.id)) {
                    writeFileSync(file, `` + `${rank}` + `\n` + `${message.author.id}` + ` exp` + ` = ` + `0` + ` lvl ` + `= ` + `0`, {
                        encoding: 'utf8',
                        flag: 'w'
                    })
                }
                if (rank.includes(message.author.id)) {
                    function getRandomInt(max) {
                        return Math.floor(Math.random() * max);
                    }
                    setTimeout(rank2, 1000)

                    function rank2() {
                        if (message.channel.type !== ChannelType.DM && channels.includes(message.channel.id)) {
                            let userPoints = rank.split(message.author.id).slice(1, 2).toString()
                            let exp = parseInt(userPoints.split(' ').slice(3, 4))
                            let lvl = parseInt(userPoints.split(' ').slice(6, 7))
                            let neNum = getRandomInt(20) + 5
                            let newExp = parseInt(neNum)
                            let double_xp = message.member.roles.cache.some(role => role.name === 'double XP') || message.member.roles.cache.some(role => role.id === '1028779829799157936')
                            let math = (((lvl + 1) * ((712 * lvl) / 8) * 1.5) - 2)
                            let newLvl = exp <= math
                            let LVL = (newLvl == false) ? (lvl + 1) : lvl;
                            let member = message.member
                            let EXP = (double_xp) ? newExp * 2 : newExp
                            console.log((lvl + 1) * 564)
                            console.log(lvl)
                            console.log(exp)
                            console.log(newExp)
                            let newUser = rank.toString().replace(`${message.author.id} exp = ${exp} lvl = ${lvl}`, `${message.author.id} exp = ${exp + EXP} lvl = ${LVL}`)
                            console.log([newExp], [EXP], [newLvl], [exp])
                            writeFileSync(file, newUser, {
                                encoding: 'utf8',
                                flag: 'w'
                            })
                        } else return;
                    }
                }
            });
        })
    }
})
//leveling up message    
client.on('messageCreate', (message) => {
    if (message.channel.type !== ChannelType.DM) {
        let file = (message.guild.id == `897154008228180048`) ? '../nitrojam_bot/json_files/rank.json' : '../nitrojam_bot/json_files/rank2.json'
        let file2 = (message.guild.id == `897154008228180048`) ? '../nitrojam_bot/json_files/lvl_role.json' : '../nitrojam_bot/json_files/lvl_role2.json'
        readFile("../nitrojam_bot/json_files/channel.json", "utf8", (err, channels) => {
            readFile(file2, "utf8", (err, role) => {
                readFile(file, "utf8", (err, rank) => {
                    readFile("../nitrojam_bot/json_files/alert.json", "utf8", (err, alert) => {
                        let userPoints = rank.split(message.author.id).slice(1, 2).toString()
                        let lvl1 = parseInt(userPoints.split(' ').slice(6, 7))
                        console.log(`f-`, lvl1)
                        setTimeout(SendAlert, 1200)

                        function SendAlert() {
                            readFile(file, "utf8", (err, rank2) => {
                                if (channels.includes(message.channel.id) && !message.author.bot) {
                                    let userPoints2 = rank2.split(message.author.id).slice(1, 2).toString()
                                    let lvl2 = parseInt(userPoints2.split(' ').slice(6, 7))
                                    console.log(`s-`, lvl2)
                                    if (lvl1 < lvl2) {
                                        if (!alert.includes(message.guild.id) && !message.author.bot) return message.channel.send(`${message.author} reached lvl **${lvl2}**`)
                                        else {
                                            let a = (message.guild.id == `897154008228180048`) ? '966724057858994207' : '1028779831250387026'
                                            let ac = alert.split(message.guild.id).slice(1).toString().split(` `).slice(2, 3).toString()
                                            let c = client.channels.cache.find(c => c.id == a)
                                            c.send(`${message.author} reached lvl **${lvl2}**`)
                                        }
                                        if (!role.includes(`${lvl2} =`)) return;
                                        else {
                                            let role_ = role.split(lvl2).slice(1, 2).toString().split(` `).slice(2, 3).toString()
                                            message.member.roles.add(role_).catch(console.error);
                                        }
                                    }
                                }
                            })
                        }
                    })
                })
            })
        })
    }
})
//get all levels command
client.on('messageCreate', (message) => {
    readFile("../nitrojam_bot/json_files/rank.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        if (message.author.bot) return;
        if (message.content.toLowerCase() == `${Command}levelall`) {
            console.log(`${jsonString}`)
        }
        if (!jsonString.includes(message.author.id)) {
            writeFileSync('../nitrojam_bot/json_files/rank.json', `` + `${jsonString}` + `\n` + `${message.author.id}` + ` exp` + ` = ` + `0` + ` lvl ` + `= ` + `0`, {
                encoding: 'utf8',
                flag: 'w'
            })
        }
        if (jsonString.includes(message.author.id)) {
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            let userPoints = jsonString.split(message.author.id).slice(1, 2).toString()
            let exp = parseInt(userPoints.split(' ').slice(3, 4))
            let lvl = parseInt(userPoints.split(' ').slice(6, 7))
            let newExp = exp + getRandomInt(20) + 5
            let EXP = newExp
            let newLvl = (newExp >= (lvl + 1) * ((712 * lvl) / 2)) ? lvl + 1 : lvl;
            let LVL = newLvl

        }
    })
})
//get all points command
client.on('messageCreate', (message) => {
    readFile("../nitrojam_bot/json_files/points.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        if (message.author.bot) return;
        if (message.content == `${Command}pointsAll`) {
            console.log(`${jsonString}`)
        }
        if (!jsonString.includes(message.author.id)) {

            writeFileSync('../nitrojam_bot/json_files/points.json', `` + `${jsonString}` + `\n` + `${message.author.id}` + ` = ` + `0`, {
                encoding: 'utf8',
                flag: 'w'
            })
        }
        if (jsonString.includes(message.author.id)) {
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
        }
    })
})
//points shop
client.on('interactionCreate', (interaction) => {
    if (interaction.channel.type !== ChannelType.DM) {
        readFile("../nitrojam_bot/json_files/points.json", "utf8", (err, points) => {
            if (interaction.isButton() && interaction.customId == `page2`) {
                let list = interaction.message.channel.messages.fetch(`${interaction.message.id}`).then(message => message)
                let userPoints = points.split(interaction.user.id).slice(1, 2).toString()
                let num = parseInt(userPoints.split(' ').slice(2, 3))
                let listContent = Promise.resolve(list).then(function (value) {
                    readFile("../nitrojam_bot/json_files/shop.json", "utf8", (err, shop1) => {
                        readFile("../nitrojam_bot/json_files/shop2.json", "utf8", (err, shop2) => {
                            let jsonString = (interaction.guild.id == `897154008228180048`) ? shop1 : shop2
                            let msg = jsonString.toString().replace(/["]/g, ``).replace(/[,]/g, `>\n`).replace(/roleID:/g, `role:<@&`)
                            let page2 = msg.toString().split(`\n`).slice(66, 135).toString().replace(/[,]/g, `\n`)
                            page2 = (page2 == null || !page2) ? `page empty` : page2
                            const row2 = new ActionRowBuilder()
                                .addComponents(
                                    new ButtonBuilder()
                                    .setCustomId('page1')
                                    .setLabel(`<`)
                                    .setStyle(ButtonStyle.Primary),
                                    new ButtonBuilder()
                                    .setCustomId('page3')
                                    .setLabel(`>`)
                                    .setStyle(ButtonStyle.Primary)
                                )
                            let embed22 = new Discord.EmbedBuilder()
                                .setTitle(`**Shop**`)
                                .addFields({
                                    name: `You got **${num} points**`,
                                    value: `go to another page to refresh`
                                })
                                .setColor(0xe7dd26)
                                .addFields({
                                    name: "Items",
                                    value: `${page2}`
                                })
                            value.edit({
                                embeds: [embed22],
                                components: [row2]
                            })
                        })
                    })
                })
            }
        })
    }
})
client.on('interactionCreate', (interaction) => {
    if (interaction.channel.type !== ChannelType.DM) {
        readFile("../nitrojam_bot/json_files/points.json", "utf8", (err, points) => {
            if (interaction.isButton() && interaction.customId == `page1`) {
                let list = interaction.message.channel.messages.fetch(`${interaction.message.id}`).then(message => message)
                let userPoints = points.split(interaction.user.id).slice(1, 2).toString()
                let num = parseInt(userPoints.split(' ').slice(2, 3))
                let listContent = Promise.resolve(list).then(function (value) {
                    readFile("../nitrojam_bot/json_files/shop.json", "utf8", (err, shop1) => {
                        readFile("../nitrojam_bot/json_files/shop2.json", "utf8", (err, shop2) => {
                            let jsonString = (interaction.guild.id == `897154008228180048`) ? shop1 : shop2
                            let msg = jsonString.toString().replace(/["]/g, ``).replace(/[,]/g, `>\n`).replace(/roleID:/g, `role:<@&`)
                            let page1 = msg.toString().split(`\n`).slice(0, 65).toString().replace(/[,]/g, `\n`)
                            const row2 = new ActionRowBuilder()
                                .addComponents(
                                    new ButtonBuilder()
                                    .setCustomId('page2')
                                    .setLabel(`>`)
                                    .setStyle(ButtonStyle.Primary)
                                )
                            let embed22 = new Discord.EmbedBuilder()
                                .setTitle(`**Shop**`)
                                .addFields({
                                    name: `You got **${num} points**`,
                                    value: `go to another page to refresh`
                                })
                                .setColor(0xe7dd26)
                                .addFields({
                                    name: "Items",
                                    value: `${page1}`
                                })
                            value.edit({
                                embeds: [embed22],
                                components: [row2]
                            })
                        })
                    })
                })
            }
        })
    }
})
client.on('interactionCreate', (interaction) => {
    if (interaction.channel.type !== ChannelType.DM) {
        readFile("../nitrojam_bot/json_files/points.json", "utf8", (err, points) => {
            if (interaction.isButton() && interaction.customId == `page3`) {
                let list = interaction.message.channel.messages.fetch(`${interaction.message.id}`).then(message => message)
                let userPoints = points.split(interaction.user.id).slice(1, 2).toString()
                let num = parseInt(userPoints.split(' ').slice(2, 3))
                let listContent = Promise.resolve(list).then(function (value) {
                    readFile("../nitrojam_bot/json_files/shop.json", "utf8", (err, shop1) => {
                        readFile("../nitrojam_bot/json_files/shop2.json", "utf8", (err, shop2) => {
                            let jsonString = (interaction.guild.id == `897154008228180048`) ? shop1 : shop2
                            let msg = jsonString.toString().replace(/["]/g, ``).replace(/[,]/g, `>\n`).replace(/roleID:/g, `role:<@&`)
                            let page3 = msg.toString().split(`\n`).slice(136, 200).toString().replace(/[,]/g, `\n`)
                            page3 = (page3 == null || !page3) ? `page empty` : page3
                            const row2 = new ActionRowBuilder()
                                .addComponents(
                                    new ButtonBuilder()
                                    .setCustomId('page2')
                                    .setLabel(`<`)
                                    .setStyle(ButtonStyle.Primary)
                                )
                            let embed22 = new Discord.EmbedBuilder()
                                .setTitle(`**Shop**`)
                                .addFields({
                                    name: `You got **${num} points**`,
                                    value: `go to another page to refresh`
                                })
                                .setColor(0xe7dd26)
                                .addFields({
                                    name: "Items",
                                    value: `${page3}`
                                })
                            value.edit({
                                embeds: [embed22],
                                components: [row2]
                            })
                        })
                    })
                })
            }
        })
    }
})
//shop item remove
client.on('messageCreate', (message) => {
    readFile("../nitrojam_bot/json_files/shop.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        if (message.author.bot) return;
        if (message.content.toLowerCase().startsWith(`${Command}itemremove`)) {
            let item_name = message.content.split(',').slice(0, 1).toString().replace(`${Command}itemRemove`, ``)
            let item_price = message.content.split(',').slice(1, 2).toString()
            let item_id = message.content.split(',').slice(2, 3).toString().replace(`"ID":`, ``).replace(/["]/g, ``)
            let item_prize = message.content.split(`,`).slice(3, 4).toString().replace(`"roleID":`, ``).replace(/["]/g, ``)
            let remove = jsonString.replace(`${item_name},${item_price},"ID":"${item_id}","roleID":"${item_prize}",`, ``)
            console.log([item_name], [item_price], [item_id])
            if (item_name == null || item_price == null || item_price == NaN || item_id == null) return message.reply(`to remove the item, the item have to includes his **name**, **price**, **id** like they show is the ${Command}shop items with , in the end of any line`);
            if (!jsonString.includes(`"ID":"${item_id}"`)) return message.reply(`the shop doesn't selling an item with this ID`)
            else return writeFileSync('../nitrojam_bot/shop.json', `` + `${remove}`, {
                encoding: 'utf8',
                flag: 'w'
            })
        }
    })
})
//get all items bought command
client.on('messageCreate', (message) => {
    readFile("../nitrojam_bot/json_files/ShopUsers.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        if (message.author.bot) return;
        if (message.content.toLowerCase() == `${Command}boughtall`) {
            console.log(`${jsonString}`)
        }
    })
})
//trades
//trade points
client.on('messageCreate', (message) => {
    if (message.content.toLowerCase().startsWith(`${Command}tradepoints`)) {
        let user = message.mentions.members.first() //get member mentions in command
        let amount = parseInt(message.content.split(' ').slice(2, 3))
        let points_user = parseInt(point.toString().split(message.author.id).slice(1, 2).toString().split(' ').slice(2, 3))
        let points_member = parseInt(point.toString().split(user.id).slice(1, 2).toString().split(' ').slice(2, 3))
        if (!user) return message.reply(`${message.author.username} you have to mention someone`)
        if (!amount || amount == NaN || amount < 1) return message.reply(`${message.author.username} you have to put a number that bigger then 0 to trade with someone else`)
        if ((points_user - amount) < 0) return message.reply(`you don't have enough points, chat to earn more points`)
        if (!point.toString().includes(message.author.id)) return message.reply(`you don't have a single point, chat to earn points and unlock ${Command}tradepoints`)
        if (!point.toString().includes(user.id)) return message.reply(`you can't trade with ${user.user.username} coz they have not chat here before`)
        else {
            let new_points_user = points_user - amount
            let new_points_member = points_member + amount
            console.log([amount], [points_user], [points_member], [new_points_member], [new_points_user])
            let newUser = point.replace(`${message.author.id} = ${points_user}`, `${message.author.id} = ${new_points_user}`).toString().replace(`${user.id} = ${points_member}`, `${user.id} = ${new_points_member}`)
            writeFileSync('../nitrojam_bot/json_files/points.json', `` + `${newUser}`, {
                encoding: 'utf8',
                flag: 'w'
            })
            message.channel.send(`you gave ${user.user.username} **${amount} points**`)
        }
    }
})
//hebrew explain to stupid isrealis 
client.on('messageCreate', (message) => {
    if (message.channel.type !== ChannelType.DM) {
        if (message.guild.id == `897154008228180048`) {
            if (message.author.id == `897495641956175884` || message.author.id == `282286160494067712` || message.author.id == `701017199300837386` || message.channel.id == `1000039709894004886` || message.channel.id == `1000333683661750382` || message.channel.id == `1000362733658705930` || message.channel.id == `897154010543423611` || message.channel.id == `980721622266818610` || message.channel.id == `1013441318183252119` || message.channel.id == `998576505196134540` || message.author.bot) return;
            else {
                if (message.content.includes(`א`) || message.content.includes(`ב`) || message.content.includes(`ג`) || message.content.includes(`ד`) || message.content.includes(`ה`) || message.content.includes(`ו`) || message.content.includes(`ז`) || message.content.includes(`ח`) || message.content.includes(`ט`) || message.content.includes(`י`) || message.content.includes(`כ`) || message.content.includes(`ל`) || message.content.includes(`מ`) || message.content.includes(`נ`) || message.content.includes(`ס`) || message.content.includes(`ע`) || message.content.includes(`פ`) || message.content.includes(`צ`) || message.content.includes(`ק`) || message.content.includes(`ר`) || message.content.includes(`ש`) || message.content.includes(`ת`)) {
                    message.delete().then(message.author.send(`כדי לכתוב בעברית אתה צריך ללכת לחדר <#979855238448173149> וקח/י את הרול hebrew speakers ואז תוכלו לדבר בעברית בחדר <#1000039709894004886> בכל חדר אחר כל הודעה בעברית תימחק אוטומתית\nזו הודעה אוטומתית אז אם רשמתם בטעות בעברית תתעלמו מהודעה זו`).catch(console.error))
                }
            }
        }
    }
})
//add password command
client.on('messageCreate', (message) => {
    readFile("../nitrojam_bot/json_files/roles.json", "utf8", (err, roles) => {
        readFile("../nitrojam_bot/json_files/password.json", "utf8", (err, pass) => {
            if (message.content.toLowerCase().startsWith(`${Command}save`)) {
                if (message.channel.name === '「🤖」commands' || message.channel.name === '🔐↣｜commands' || message.channel.name == `bot-testing☃`) {
                    let password = message.content.split(' ').slice(1, 2).toString()
                    if (!password) return message.reply(`you have to add a password to save your roles`)
                    else if (pass.includes(message.author.id)) {
                        let user_id = pass.split(message.author.id).slice(1, 2).toString()
                        let user_password = user_id.toString().split(` `).slice(2, 3).toString()
                        message.reply(`you already have a password\nyour password send in your dms`)
                        message.author.send(`password:${user_password}`).catch(console.error)
                    } else if (pass.includes(password)) return message.reply('this password already taken')
                    else if (password.length > 12 || password.length < 4) return message.reply(`password must be between 4-12 characters`)
                    else {
                        let user_roles = (message.member.roles.cache).filter((roles) => roles.id !== message.member.guild.id).map((role) => role.id)
                        user_roles = user_roles.toString().replace(`973993849556975619,`, ``).replace(`973993849556975618,`, ``).replace(`973993849556975617,`, ``).replace(`897154008228180055,`, ``).replace(`897154008228180056,`, ``).replace(`897154008228180057,`, ``).replace(`897154008257531966,`, ``).replace(`897154008257531967,`, ``).replace(`897154008257531968,`, ``).replace(`897154008257531973,`, ``).replace(`897154008295276578,`, ``).replace(`897154008295276579,`, ``).replace(`897154008295276580,`, ``).replace(`897154008295276581,`, ``).replace(`973993849556975616,`, ``).replace(`968243154904027207,`, ``).replace(`897154008333045784,`, ``).replace(`897154008333045785,`, ``).replace(`897154008333045786,`, ``).replace(`897154008333045787,`, ``).replace(`967498064057221272,`, ``).replace(`897154008333045788,`, ``).replace(`897154008333045789,`, ``).replace(`897154008228180052,`, ``)
                        let role1 = user_roles.toString().split(`,`).slice(0, 1).toString()
                        role1 = (!role1) ? `897154008228180052` : role1
                        let role2 = user_roles.toString().split(`,`).slice(1, 2).toString()
                        role2 = (!role2) ? role1 : role2
                        let role3 = user_roles.toString().split(`,`).slice(2, 3).toString()
                        role3 = (!role3) ? role2 : role3
                        let role4 = user_roles.toString().split(`,`).slice(3, 4).toString()
                        role4 = (!role4) ? role3 : role4
                        let role5 = user_roles.toString().split(`,`).slice(4, 5).toString()
                        role5 = (!role5) ? role4 : role5
                        let role6 = user_roles.toString().split(`,`).slice(5, 6).toString()
                        role6 = (!role6) ? role5 : role6
                        let role7 = user_roles.toString().split(`,`).slice(6, 7).toString()
                        role7 = (!role7) ? role6 : role7
                        let role8 = user_roles.toString().split(`,`).slice(7, 8).toString()
                        role8 = (!role8) ? role7 : role8
                        let role9 = user_roles.toString().split(`,`).slice(8, 9).toString()
                        role9 = (!role9) ? role8 : role9
                        let role0 = user_roles.toString().split(`,`).slice(9, 10).toString()
                        role0 = (!role0) ? role9 : role0
                        console.log(password)
                        writeFileSync('../nitrojam_bot/json_files/password.json', pass + `\n${message.author.id} = ${password}`, {
                            encoding: 'utf8',
                            flag: 'w'
                        })
                        writeFileSync('../nitrojam_bot/json_files/roles.json', roles + `\n${password} = ${role1},${role2},${role3},${role4},${role5},${role6},${role7},${role8},${role9},${role0},`, {
                            encoding: 'utf8',
                            flag: 'w'
                        })
                        message.channel.send(`password and roles have been saved`).catch(console.error)
                        message.delete().catch(console.error)
                    }
                }
            } else return;
        })
    })
})
//load roles command
client.on('messageCreate', (message) => {
    readFile("../nitrojam_bot/json_files/roles.json", "utf8", (err, roles) => {
        if (message.content.toLowerCase().startsWith(`${Command}load`)) {
            if (message.channel.name === '「🤖」commands' || message.channel.name === '🔐↣｜commands' || message.channel.name == `bot-testing☃`) {
                let password = message.content.split('-').slice(1, 2).toString()
                if (!password) return message.reply(`you must enter your password to get your saved roles`)
                else {
                    if (!roles.includes(password)) return message.reply(`this password doesn't exist`)
                    else {
                        console.log(password)
                        message.delete().catch(console.error)
                        let user = roles.toString().split(password).slice(1, 2).toString().split(' ').slice(2, 3)
                        let role1 = user.toString().split(`,`).slice(0, 1).toString()
                        let role2 = user.toString().split(`,`).slice(1, 2).toString()
                        let role3 = user.toString().split(`,`).slice(2, 3).toString()
                        let role4 = user.toString().split(`,`).slice(3, 4).toString()
                        let role5 = user.toString().split(`,`).slice(4, 5).toString()
                        let role6 = user.toString().split(`,`).slice(5, 6).toString()
                        let role7 = user.toString().split(`,`).slice(6, 7).toString()
                        let role8 = user.toString().split(`,`).slice(7, 8).toString()
                        let role9 = user.toString().split(`,`).slice(8, 9).toString()
                        let role0 = user.toString().split(`,`).slice(9, 10).toString()
                        message.member.roles.add(role1)
                        message.member.roles.add(role2)
                        message.member.roles.add(role3)
                        message.member.roles.add(role4)
                        message.member.roles.add(role5)
                        message.member.roles.add(role6)
                        message.member.roles.add(role7)
                        message.member.roles.add(role8)
                        message.member.roles.add(role9)
                        message.member.roles.add(role0)
                        message.channel.send(`your saved roles have been loaded`).catch(console.error)
                        console.log([role1], [role2], [role3], [role4], [role5], [role6], [role7], [role8], [role9], [role0])
                    }
                }
            }
        }
    })
})
//math
client.on('messageCreate', (message) => {
    if (message.content.toLowerCase() == (`${Command}math`)) {
        if (message.channel.name === '「🤖」commands' || message.channel.name === '🔐↣｜commands' || message.channel.name == `bot-testing☃`) {
            const screen = new Discord.EmbedBuilder()
                .setTitle(`0`)
                .setColor(`0xfd1f27`)
                .addFields(`answer:`, `selected action:`)
            const panel_row_1 = new Discord.ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('1')
                    .setLabel(`1`)
                    .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                    .setCustomId('2')
                    .setLabel(`2`)
                    .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                    .setCustomId('3')
                    .setLabel(`3`)
                    .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                    .setCustomId('plus')
                    .setLabel(`+`)
                    .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                    .setCustomId('minus')
                    .setLabel(`-`)
                    .setStyle(ButtonStyle.Secondary),
                )
            const panel_row_3 = new Discord.ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('7')
                    .setLabel(`7`)
                    .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                    .setCustomId('8')
                    .setLabel(`8`)
                    .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                    .setCustomId('9')
                    .setLabel(`9`)
                    .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                    .setCustomId('r_bracket')
                    .setLabel(`(`)
                    .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                    .setCustomId('l_bracket')
                    .setLabel(`)`)
                    .setStyle(ButtonStyle.Secondary),
                )
            const panel_row_4 = new Discord.ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('0')
                    .setLabel(`0`)
                    .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                    .setCustomId('dot')
                    .setLabel(`.`)
                    .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                    .setCustomId('=')
                    .setLabel(`=`)
                    .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                    .setCustomId('^')
                    .setLabel(`^`)
                    .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                    .setCustomId('clear')
                    .setLabel(`C`)
                    .setStyle(ButtonStyle.Secondary),
                )
            const panel_row_2 = new Discord.ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('4')
                    .setLabel(`4`)
                    .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                    .setCustomId('5')
                    .setLabel(`5`)
                    .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                    .setCustomId('6')
                    .setLabel(`6`)
                    .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                    .setCustomId('multi')
                    .setLabel(`X`)
                    .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                    .setCustomId('division')
                    .setLabel(`÷`)
                    .setStyle(ButtonStyle.Secondary),
                )
            message.channel.send({
                embeds: [screen],
                components: [panel_row_1, panel_row_2, panel_row_3, panel_row_4]
            })
        }
    }
})
//buttons
//num 1
client.on('interactionCreate', (interaction) => {
    if (interaction.isButton() && interaction.customId == `1`) {}
})
//redeem code command
client.on('messageCreate', (message) => {
    if (message.content.toLowerCase().startsWith(`${Command}redeem`)) {
        readFile("../nitrojam_bot/json_files/redeem.json", "utf8", (err, code) => {
            readFile("../nitrojam_bot/json_files/redeem_user.json", "utf8", (err, users) => {
                readFile("../nitrojam_bot/json_files/points.json", "utf8", (err, points) => {
                    let Code = message.content.split(` `).slice(1, 2).toString()
                    if (!Code || Code == undefined) return message.reply(`you have to add a code to redeem`)
                    else {
                        if (!code.includes(Code)) return message.reply(`Invalid code`)
                        else if (users.includes(`${message.author.id} = ${Code}`)) return message.author.send(`code **${Code}** already been used`).catch(console.error)
                        else {
                            setTimeout(redeem, 1500)

                            function redeem() {
                                let amount = code.split(Code).slice(1, 2).toString()
                                let amount2 = parseInt(amount.split(` `).slice(2, 3))
                                let user_points = points.split(message.author.id).slice(1, 2).toString()
                                let user_points2 = parseInt(user_points.split(` `).slice(2, 3))
                                let new_points = amount2 + user_points2
                                message.author.send(`you redeem the code **${Code}** and received **${amount2}**\nyour points balance **${new_points}**`).catch(console.error)
                                let new_point = points.toString().replace(`${message.author.id} = ${user_points2}`, `${message.author.id} = ${new_points}`)
                                writeFileSync('../nitrojam_bot/json_files/points.json', `` + `${new_point}`, {
                                    encoding: 'utf8',
                                    flag: 'w'
                                })
                                writeFileSync('../nitrojam_bot/json_files/redeem_user.json', users + `\n${message.author.id} = ${Code}`, {
                                    encoding: 'utf8',
                                    flag: 'w'
                                })
                                message.delete().catch(console.error)
                            }
                        }
                    }
                })
            })
        })
    }
})
//redeem codes add
client.on('messageCreate', (message) => {
    if (message.content.toLowerCase().startsWith(`${Command}addcode`)) {
        readFile("../nitrojam_bot/json_files/redeem.json", "utf8", (err, code) => {
            let Code = message.content.split(` `).slice(1, 2).toString()
            let amount = parseInt(message.content.split(` `).slice(2, 3))
            if (code.includes(Code)) return message.reply(`code already exist`)
            else {
                writeFileSync('../nitrojam_bot/json_files/redeem.json', code + `\n${Code} = ${amount}`, {
                    encoding: 'utf8',
                    flag: 'w'
                })
                message.delete().catch(console.error)
            }
        })
    }
})
client.on('messageCreate', (message) => {
    if (message.content == `test69`) {
        message.author.send(`test`).catch(console.error)
    }
})
//test
client.on('messageCreate', (message) => {
    if (message.content.toLowerCase() == `${Command}leaderboard`) {
        readFile("../nitrojam_bot/json_files/rank.json", "utf8", (err, users) => {
            let id = users.replace(/ lvl = [0-9]/g, ``).replace(/ exp = /g, `,`)
            let xp = id.replace(/[0-9],/g, ` wow `)
            let xp2 = xp.replace(/[0-9] wow /, `wow`)
            console.log(id)
            console.log([xp2])
        })
    }
})
//join voice chat command

client.on('messageCreate', (message) => {
    if (message.content.toLowerCase().startsWith(`${Command}join`)) {
        let song = message.content.split(` `).slice(1).toString()
        if (!message.member.voice.channel) return message.reply(`you're not in a voice chat`)
        else {
            if (!client.voice) return message.reply(`i'm already in a voice chat`)
            else if (!song) return message.reply(`you have to put a song`)
            else {
                const connect = joinVoiceChannel({
                    channelId: message.member.voice.channel.id,
                    guildId: message.guild.id,
                    adapterCreator: message.member.voice.channel.guild.voiceAdapterCreator,
                })
            }
        }
    }
})
client.on('interactionCreate', (interaction) => {
    if (interaction.isChatInputCommand()) {
        if (interaction.commandName == `help`) {
            const embed1 = new Discord.EmbedBuilder()
                .setColor(0x9811ee)
                .setAuthor({
                    name: `${interaction.user.username}`,
                    iconURL: `${interaction.user.avatarURL()}`
                })
                .setTitle(`${interaction.user.username} needs help`)
                .addFields({
                    name: "Moderators                                    Member",
                    value: `<@&897154008333045784> <@&897154008333045785>                        ${interaction.user}`
                })
                .setFooter({
                    text: `help message created by ${interaction.user.username} with NitroJam Bot`,
                    iconURL: "https://cdn.discordapp.com/app-icons/897495641956175884/2ea264e94f324798d7e0734e524328df.png?size=512"
                })
            const embed2 = new Discord.EmbedBuilder()
                .setColor(0x9811ee)
                .setAuthor({
                    name: `${interaction.user.username}`,
                    iconURL: `${interaction.user.avatarURL()}`
                })
                .setTitle(`${interaction.user.username} needs help`)
                .addFields({
                    name: "Moderators                                    Member",
                    value: `<@&1028779829983715480> <@&1028779829983715479>                        ${interaction.user}`
                })
                .setFooter({
                    text: `help message created by ${interaction.user.username} with NitroJam Bot`,
                    iconURL: "https://cdn.discordapp.com/app-icons/897495641956175884/2ea264e94f324798d7e0734e524328df.png?size=512"
                })
            let embed = (interaction.guild.id == `897154008228180048`) ? embed1 : embed2
            let staff = (interaction.guild.id == `897154008228180048`) ? `<@&897154008333045784> <@&897154008333045785>` : `<@&1028779829983715480> <@&1028779829983715479>`
            interaction.reply({
                content: staff,
                embeds: [embed]
            }).catch(console.error())
        }
        if (interaction.commandName == `cmd`) {
            if (interaction.channel.id == `1028779833301409893` || interaction.channel.id == `1028779831581745307` || interaction.channel.id == `968895193711517726` || interaction.channel.id == `966724563306180718`) {
                const embed5 = new Discord.EmbedBuilder()
                    .setColor(0x18C760)
                    .setTitle(`**__COMMANDS__**`)
                    .addFields({
                        name: "Here is all the Bots commands",
                        value: "NitroJam Bot"
                    }, {
                        name: `${Command}help`,
                        value: 'to ask for help from the staff'
                    }, {
                        name: `${Command}avatar`,
                        value: `to get someone's profile pic\n${Command}avatar <user>`
                    }, {
                        name: `${Command}say`,
                        value: "to make the bot say something"
                    }, {
                        name: `${Command}RPS`,
                        value: 'to play rock paper scissor with the bot'
                    }, {
                        name: `${Command}dice`,
                        value: 'to roll a dice'
                    }, {
                        name: `${Command}points`,
                        value: 'to see how much points you have'
                    }, {
                        name: `${Command}rank`,
                        value: 'to see your rank in the server'
                    }, {
                        name: `${Command}shop`,
                        value: 'to see which items avaliable in the shop'
                    }, {
                        name: `${Command}buy`,
                        value: 'to buy an item from the shop with your points'
                    }, {
                        name: `${Command}ttt`,
                        value: `to play tic-tac-toe against someone\n${Command}ttt <user>`
                    }, {
                        name: `${Command}rgb`,
                        value: 'to convert hex code to rgb'
                    }, {
                        name: `${Command}info`,
                        value: `to get someone's info`
                    }, {
                        name: `${Command}tradepoints`,
                        value: `to give points to another member`
                    }, {
                        name: `${Command}youtube`,
                        value: "link to NitroJam's YouTube Page"
                    }, {
                        name: `${Command}twitch`,
                        value: "link to NitroJam's twitch page"
                    }, {
                        name: `${Command}roll dice`,
                        value: 'try to guess what number the dice will stop on'
                    }, {
                        name: `${Command}socials`,
                        value: 'to get links to all the socials of NitroJam'
                    }, {
                        name: `${Command}leaderboard`,
                        value: "to get a link to the leaderboard of NitroJam's server"
                    }, {
                        name: `${Command}embed`,
                        value: `to send a embed message\n${Command}embed <color code(if color code doesn't say anything to you just put 000000)> <text>`
                    }, {
                        name: `${Command}fnf-mod-request`,
                        value: `to request a fnf mod for nitro to play\n${Command}fnfmr <link>`
                    }, {
                        name: `${Command}game-request`,
                        value: `to request a game for nitro to play\n${Command}gr <game name + link>`
                    }, {
                        name: `${Command}hex`,
                        value: `convert rgb code to hex code to use in embed message\n${Command}hex <Red(0-255)> <green(0-255)> <blue(0-255)>`
                    })
                const embed3 = new Discord.EmbedBuilder()
                    .setColor(0x18C760)
                    .setTitle(`**__COMMANDS__**`)
                    .addFields({
                        name: "Here is all the Bots commands",
                        value: "NitroJam Bot"
                    }, {
                        name: `${Command}help`,
                        value: `לבקש עזרה מהצוות`
                    }, {
                        name: `${Command}avatar`,
                        value: `לבקש מהבוט תמונת פרופיל של מישהו\n${Command}avatar <user>`
                    }, {
                        name: `${Command}say`,
                        value: "לבקש מהבוט להגיד משהו"
                    }, {
                        name: `${Command}RPS`,
                        value: ' לשחק עם הבוט אבן נייר ומספריים'
                    }, {
                        name: `${Command}dice`,
                        value: 'להתיל קובייה'
                    }, {
                        name: `${Command}points`,
                        value: 'לראות כמה נקודות יש לך'
                    }, {
                        name: `${Command}rank`,
                        value: 'לראות את הראנק שלך בשרת'
                    }, {
                        name: `${Command}shop`,
                        value: 'לראות איזה אייטמים זמינים בחנות'
                    }, {
                        name: `${Command}buy`,
                        value: 'לקנות אייטם מהחנות'
                    }, {
                        name: `${Command}ttt`,
                        value: `לשחק איקס עיגול נגד מישהו\n${Command}ttt <user>`
                    }, {
                        name: `${Command}rgb`,
                        value: 'להמיר צבע HEX לRGB'
                    }, {
                        name: `${Command}info`,
                        value: `לקבל מידע בסיסי על הממבר ההוא`
                    }, {
                        name: `${Command}tradepoints`,
                        value: `לתת נקודות לממבר אחר`
                    }, {
                        name: `${Command}youtube`,
                        value: "לקבל לינק לעמוד יוטיוב של נייטרו"
                    }, {
                        name: `${Command}twitch`,
                        value: "לקבל לינק לעמוד טוויץ של נייטרו"
                    }, {
                        name: `${Command}roll dice`,
                        value: 'לנסות לנחש מספר שהקובייה תיפול עליו'
                    }, {
                        name: `${Command}socials`,
                        value: 'לקבל לינקים לכל הסושיאלז של נייטרו'
                    }, {
                        name: `${Command}embed`,
                        value: `לשלוח הודעה מגניבה\n${Command}embed <color code(אם color code אומר לך שום דבר פשוט שימו 000000)> <text>`
                    }, {
                        name: `${Command}hex`,
                        value: `להמיר קוד צבע RGB לHEX\n${Command}hex <Red(0-255)> <green(0-255)> <blue(0-255)>`
                    })
                let embed = (interaction.guild.id == `897154008228180048`) ? embed5 : embed3
                interaction.reply({
                    embeds: [embed]
                }).catch(console.error)
            } else return interaction.reply({
                content: `Erorr 076: Wrong channel`,
                ephemeral: true
            })
        }
        if (interaction.commandName == `avatar`) {
            if (interaction.channel.id == `1028779833301409893` || interaction.channel.id == `1028779831581745307` || interaction.channel.id == `968895193711517726` || interaction.channel.id == `966724563306180718`) {
                let users = interaction.options.getUser('member', true)
                let avatar = `${users.avatarURL()}` + `?size=4096`;
                const embed4 = new Discord.EmbedBuilder()
                    .setColor(0x18C760)
                    .setImage(avatar)
                    .addFields({
                        name: `${users.username}'s profile pic`,
                        value: `asked by ${interaction.user}`
                    })
                interaction.reply({
                    embeds: [embed4]
                }).catch(console.error)
            } else return interaction.reply({
                content: `Erorr 076: Wrong channel`,
                ephemeral: true
            })
        }
        if (interaction.commandName == `tag`) {
            let user = interaction.options.getMember('member', true)
            let tag = interaction.options.getString('settag', true)
            let new_tag = `●` + tag + '┆' + user.user.username
            if (new_tag.length > 32) return interaction.reply(`this nickname is too long`)
            else {
                user.setNickname(new_tag)
                interaction.reply(`${user}'s tag changed successfully `)
                const embed40 = new Discord.EmbedBuilder()
                    .setColor(0x18C760)
                    .addFields({
                        name: `${interaction.user.username} changed ${user.user.username}'s tag`,
                        value: `new tag "${tag}"`
                    })
                let id = (interaction.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
                client.channels.cache.find(channel => channel.id === id).send({
                    embeds: [embed40]
                }).catch(console.error) //server log message
            }
        }
        if (interaction.commandName == `nickname`) {
            let user = interaction.options.getMember('member', true)
            let name = interaction.options.getString('setname', true)
            if (name.length > 32) return interaction.reply(`this nickname is too long`)
            else {
                user.setNickname(name)
                interaction.reply(`${user}'s nickname changed successfully `)
                const embed40 = new Discord.EmbedBuilder()
                    .setColor(0x18C760)
                    .addFields({
                        name: `${interaction.user.username} changed ${user.user.username}'s nickname`,
                        value: `new nickname "${name}"`
                    })
                let id = (interaction.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
                client.channels.cache.find(channel => channel.id === id).send({
                    embeds: [embed40]
                }).catch(console.error) //server log message
            }
        }
        if (interaction.commandName == `say`) {
            let message = interaction.options.getString('message', true)
            interaction.reply(`${message}`)
        }
        if (interaction.commandName == `embed`) {
            let message = interaction.options.getString('message', true)
            let color = interaction.options.getString('color', true)
            let color2 = `0x` + color
            color2 = (color2 == `0x`) ? `0x000000` : color;
            var aRgbHex = `${color}`.match(/.{1,2}/g);
            var aRgb = [
                parseInt(aRgbHex[0], 16),
                parseInt(aRgbHex[1], 16),
                parseInt(aRgbHex[2], 16)
            ];
            if (aRgb.includes(NaN)) return message.reply(`please put a real color code or 000000 (${Command}embed <color code> <text>)`)
            if (message > 150) return message.reply(`you can't send an embed message with more than 150 characters`)
            else {
                const embed = new Discord.EmbedBuilder()
                    .setColor(`${color2}`)
                    .setAuthor({
                        name: `${interaction.user.tag}`,
                        iconURL: `${interaction.user.avatarURL()}`
                    })
                    .setTitle(`${message}`)
                    .addFields({
                        name: "embed message",
                        value: `by ${interaction.user}`
                    })
                    .setFooter({
                        text: `message created with NitroJam Bot`,
                        iconURL: "https://cdn.discordapp.com/app-icons/897495641956175884/2ea264e94f324798d7e0734e524328df.png?size=512"
                    })
                interaction.reply({
                    embeds: [embed]
                })
            }
        }
        if (interaction.commandName == `set-activity`) {
            let activity = interaction.options.getString('activity', true)
            let type = interaction.options.getString('type', true)
            let status_type = interaction.options.getString('status')
            let type2 = (type == `streaming`) ? ActivityType.Streaming : (type == `watching`) ? ActivityType.Watching : (type == `playing`) ? ActivityType.Playing : (type == `listening`) ? ActivityType.Listening : ActivityType.Playing
            client.user.setPresence({
                activities: [{
                    name: `${activity}`,
                    type: type2,
                    url: `https://www.twitch.tv/nitrojam`
                }],
                status: status_type,
            })
            const embed4 = new Discord.EmbedBuilder()
                .setColor(0x18C760)
                .setTitle(`**Bot Activity have been updated**`)
                .addFields({
                    name: `NitroJam Bot's Activity set to **"${activity}"**`,
                    value: `by${interaction.user}`
                })
            interaction.reply({
                embeds: [embed4]
            })
        }
        if (interaction.commandName == `reset-activity`) {
            client.user.setPresence({
                activities: [{
                    name: `${Version} the official bot of nitrojam's server`,
                    type: ActivityType.Streaming,
                    url: `https://www.twitch.tv/nitrojam`
                }],
                status: 'idle',
            })
            const embed4 = new Discord.EmbedBuilder()
                .setColor(0x18C760)
                .setTitle(`**Bot Activity have been reset**`)
                .addFields({
                    name: `NitroJam Bot's Activity reset to **"${Version} the official bot of nitrojam's server"**`,
                    value: `by${interaction.user}`
                })
            interaction.reply({
                embeds: [embed4]
            })
        }
        if (interaction.commandName == `clear`) {
            let amount = interaction.options.getNumber('amount', true)
            if (amount > 100) return interaction.reply({
                content: "you cannot delete more than 100 messages",
                ephemeral: true
            }); //limit of 100 messages
            else {
                const embed = new Discord.EmbedBuilder()
                    .setColor(0xe7dd26)
                    .setAuthor({
                        name: `${interaction.user.username}`,
                        iconURL: `${interaction.user.avatarURL()}`
                    })
                    .setTitle(`${interaction.user.username} deleted ${amount}`)
                    .setThumbnail("https://emoji.gg/assets/emoji/6944-modshield-lightred-icon.png")
                    .addFields({
                        name: "Moderator                  Amount",
                        value: `${interaction.user}                        **${amount}**`
                    })
                    .setFooter({
                        text: `${amount} messages deleted by NitroJam Bot `,
                        iconURL: "https://cdn.discordapp.com/app-icons/897495641956175884/2ea264e94f324798d7e0734e524328df.png?size=512"
                    })
                const lastmsg = amount //made "amount" a number to use as number
                interaction.channel.bulkDelete(lastmsg); //delete messages
                let id = (interaction.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
                client.channels.cache.find(channel => channel.id === id).send(({
                    embeds: [embed]
                })) //server log message
                interaction.reply({
                    embeds: [embed]
                })
                console.log(`${interaction.user.username} deleted ${amount}`) //log message
            }
        }
        if (interaction.commandName == `delete-channel`) {
            let channel = interaction.options.getChannel('channel', true)
            channel.delete()
            interaction.reply(`${channel.name} deleted successfully`)
        }
        if (interaction.commandName == `socials`) {
            const embed1 = new Discord.EmbedBuilder()
                .setColor(0x18C760)
                .setAuthor({
                    name: `${interaction.user.username}`,
                    iconURL: `${interaction.user.avatarURL()}`
                })
                .setTitle(`**__LINKS__**`)
                .setImage("https://cdn.discordapp.com/attachments/966724741769596968/970743370257408021/Hnet-image_5.gif")
                .addFields({
                    name: "Here you can find all the socials of NitroJam",
                    value: "YouTube, Twitch, Tiktok, Reddit, Instagram"
                })
                .addFields({
                    name: "YouTube",
                    value: "[**CLICK HERE**](https://www.youtube.com/channel/UCKgvWXkVrSEP2BFPZ5Owhbg)",
                    inline: true
                }, {
                    name: "Twitch",
                    value: "[**CLICK HERE**](https://twitch.tv/nitrojam)",
                    inline: true
                }, {
                    name: "Tiktok",
                    value: "[**CLICK HERE**](https://www.tiktok.com/@nitrojam_)",
                    inline: true
                }, {
                    name: "Reddit",
                    value: "[**CLICK HERE**](https://www.reddit.com/r/nitrodev123/)",
                    inline: true
                }, {
                    name: `Instagram`,
                    value: "[**CLICK HERE**](https://www.instagram.com/nitrojam829/)",
                    inline: true
                })
            const embed2 = new Discord.EmbedBuilder()
                .setColor(0x18C760)
                .setAuthor({
                    name: `${interaction.user.username}`,
                    iconURL: `${interaction.user.avatarURL()}`
                })
                .setTitle(`**__LINKS__**`)
                .setImage("https://cdn.discordapp.com/attachments/966724741769596968/970743370257408021/Hnet-image_5.gif")
                .addFields({
                    name: "Here you can find all the socials of NitroJam",
                    value: "YouTube, Twitch, Tiktok, Reddit, Instagram"
                })
                .addFields({
                    name: "YouTube",
                    value: "[**CLICK HERE**](https://www.youtube.com/c/NitroJamsubtonitrojam)",
                    inline: true
                }, {
                    name: "Twitch",
                    value: "[**CLICK HERE**](https://twitch.tv/nitrojam)",
                    inline: true
                }, {
                    name: "Tiktok",
                    value: "[**CLICK HERE**](https://www.tiktok.com/@nitrojam_)",
                    inline: true
                }, {
                    name: "Reddit",
                    value: "[**CLICK HERE**](https://www.reddit.com/r/nitrodev123/)",
                    inline: true
                }, {
                    name: `Instagram`,
                    value: "[**CLICK HERE**](https://www.instagram.com/nitrojam829/)",
                    inline: true
                })
            let embed = (interaction.guild.id == `897154008228180048`) ? embed1 : embed2;
            interaction.reply({
                embeds: [embed]
            })
        }
        if (interaction.commandName == `twitch`) {
            if (interaction.channel.id == `1028779833301409893` || interaction.channel.id == `1028779831581745307` || interaction.channel.id == `968895193711517726` || interaction.channel.id == `966724563306180718`) {
                const embed = new Discord.EmbedBuilder()
                    .setColor(0x6000ff)
                    .setThumbnail("https://cdn.discordapp.com/avatars/450003891472564234/d3fa0d95e960b710d7401d0ebcd6f28e.webp")
                    .addFields({
                        name: `NitroJam's Twitch page`,
                        value: "[**CLICK HERE**](https://twitch.tv/nitrojam)"
                    })
                interaction.reply({
                    embeds: [embed]
                })
            } else return interaction.reply({
                content: `Erorr 076: Wrong channel`,
                ephemeral: true
            })
        }
        if (interaction.commandName == `youtube`) {
            if (interaction.channel.id == `1028779833301409893` || interaction.channel.id == `1028779831581745307` || interaction.channel.id == `968895193711517726` || interaction.channel.id == `966724563306180718`) {
                const embed1 = new Discord.EmbedBuilder()
                    .setColor(0xff0000)
                    .setThumbnail("https://cdn.discordapp.com/avatars/450003891472564234/d3fa0d95e960b710d7401d0ebcd6f28e.webp")
                    .addFields({
                        name: `NitroJam's YouTube channel`,
                        value: "[**CLICK HERE**](https://youtube.com/channel/UCKgvWXkVrSEP2BFPZ5Owhbg)"
                    })
                const embed2 = new Discord.EmbedBuilder()
                    .setColor(0xff0000)
                    .setThumbnail("https://cdn.discordapp.com/avatars/450003891472564234/d3fa0d95e960b710d7401d0ebcd6f28e.webp")
                    .addFields({
                        name: `NitroJam's YouTube channel`,
                        value: "[**CLICK HERE**](https://www.youtube.com/c/NitroJamsubtonitrojam)"
                    })
                let embed = (interaction.guild.id == `897154008228180048`) ? embed1 : embed2;
                interaction.reply({
                    embeds: [embed]
                })
            } else return interaction.reply({
                content: `Erorr 076: Wrong channel`,
                ephemeral: true
            })
        }
        if (interaction.commandName == `staff-cmd`) {
            const embed = new Discord.EmbedBuilder()
                .setColor(0x0000ff)
                .setTitle(`**here ${interaction.user.username} the staff commands**`)
                .addFields({
                    name: "here are the staff commands",
                    value: "NitroJam Bot"
                })
                .addFields({
                    name: `${Command}timeout`,
                    value: `to set someone in timeout\n${Command}timeout <member> <seconds>`
                }, {
                    name: `${Command}ban`,
                    value: `to ban someone from the server\n${Command}ban <member> <banDM(optional)>`
                }, {
                    name: `${Command}channelDelete`,
                    value: `to delete a channel (only for high staff)\n${Command}channelDelete`
                }, {
                    name: `${Command}kick`,
                    value: `to kick someone from the server\n${Command}kick <member>`
                }, {
                    name: `${Command}clear/delete`,
                    value: `to delete number of messages from a channel\n${Command}clear/delete <number of messages>`
                }, {
                    name: `${Command}nickname`,
                    value: `to set a nickname to a member\n${Command}nickname <member> <nickname>`
                }, {
                    name: `${Command}tag`,
                    value: `to add a tag to someone's name like "HR" "MD"\n${Command}tag <member> <tag>`
                }, {
                    name: `${Command}Banlist`,
                    value: `to see all the member who got banned\n${Command}banlist`
                }, {
                    name: `${Command}pointsadd`,
                    value: `to add points to someone\n${Command}pointsadd <member> <amount>`
                }, {
                    name: `${Command}xpadd`,
                    value: `to add xp to someone\n${Command}xpadd <member> <amount>`
                }, {
                    name: `${Command}pointsremove`,
                    value: `to remove points from a user\n${Command}pointsremove <member> <amount>`
                }, {
                    name: `${Command}xpremove`,
                    value: `to remove xp from a user\n${Command}xpremove <member> <amount>`
                }, {
                    name: `${Command}lvlreset`,
                    value: `to reset xp points\n${Command}lvlreset <member/all>`
                }, {
                    name: `${Command}pointsreset`,
                    value: `to reset points\n${Command}pointsreset <member/all>`
                }, {
                    name: `${Command}disconnect`,
                    value: `to disconnect a member from a voice channel\n${Command}disconnect <member>`
                }, {
                    name: `${Command}movevc`,
                    value: `to move members from one vc to different vc\n${Command}movevc <member> <#voice_Channel_id>`
                }, {
                    name: `${Command}SetStatus`,
                    value: `to set an activity to the bot\n${Command}SetStatus <text>`
                }, {
                    name: `${Command}edit`,
                    value: `to edit a normal bot message(not an embed message)\n${Command}edit <message ID> <new message>`
                }, {
                    name: `${Command}react`,
                    value: `to add a reaction to a message with the bot\n${Command}react <message ID> <emoji>`
                }, {
                    name: `${Command}unban`,
                    value: `to unban a member in the server\n${Command}unban <memberID>`
                })
            interaction.reply({
                embeds: [embed]
            })
        }
        if (interaction.commandName == `kick`) {
            let user = interaction.options.getMember('member', true)
            let message = interaction.options.getString('message', false)
            if (!user.kickable) return interaction.reply({
                content: "you cannot kick this member",
                ephemeral: true
            }) //unkickable member error
            else {
                message = (!message) ? "You got kicked from nitrojam's cave lmao" : message
                user.kick()
                user.send(message).catch(console.error)
                const embed = new Discord.EmbedBuilder()
                    .setColor(0x9b1b1e)
                    .setTitle(`${interaction.user.username} kicked ${user.user.username}`)
                    .setThumbnail("https://emoji.gg/assets/emoji/6944-modshield-lightred-icon.png")
                    .addFields({
                        name: "Moderator                  member",
                        value: `${interaction.user}                        ${user}`
                    })
                    .setFooter({
                        text: `${user.user.username} got kicked by NitroJam Bot`,
                        iconURL: "https://cdn.discordapp.com/app-icons/897495641956175884/2ea264e94f324798d7e0734e524328df.png?size=512"
                    })
                interaction.reply({
                    embeds: [embed]
                })
                let id = (interaction.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
                client.channels.cache.find(channel => channel.id === id).send(({
                    embeds: [embed]
                })) //server log message
            }
        }
        if (interaction.commandName == `ban`) {
            let user = interaction.options.getMember('member', true)
            let message = interaction.options.getString('message', false)
            if (!user.bannable) return interaction.reply({
                content: "you cannot ban this member",
                ephemeral: true
            }) //unkickable member error
            else {
                message = (!message) ? "You got banned from nitrojam's cave lmao" : message
                user.ban()
                user.send(message).catch(console.error)
                const embed = new Discord.EmbedBuilder()
                    .setColor(0x9b1b1e)
                    .setTitle(`${interaction.user.username} banned ${user.user.username}`)
                    .setThumbnail("https://emoji.gg/assets/emoji/6944-modshield-lightred-icon.png")
                    .addFields({
                        name: "Moderator                  member",
                        value: `${interaction.user}                        ${user}`
                    })
                    .setFooter({
                        text: `${user.user.username} got banned by NitroJam Bot`,
                        iconURL: "https://cdn.discordapp.com/app-icons/897495641956175884/2ea264e94f324798d7e0734e524328df.png?size=512"
                    })
                interaction.reply({
                    embeds: [embed]
                })
                let id = (interaction.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
                client.channels.cache.find(channel => channel.id === id).send(({
                    embeds: [embed]
                })) //server log message
            }
        }
        if (interaction.commandName == `timeout`) {
            let mils_time = interaction.options.getNumber('time', true)
            let user = interaction.options.getMember('member', true)
            let time = mils_time * 60000
            if (mils_time > 1440) return interaction.reply({
                content: "you cannot timeout a member for more than 24 hours",
                ephemeral: true
            }) //time is more then 24 hours error
            if (user.permissions.has(PermissionFlagsBits.Administrator) || user.user.bot) return interaction.reply(`you cannot timeout this member`)
            else {
                user.timeout(time)
                const embed4 = new Discord.EmbedBuilder()
                    .setColor(0xd5731b)
                    .setAuthor({
                        name: `${interaction.user.username}`,
                        iconURL: `${interaction.user.avatarURL()}`
                    })
                    .setTitle(`${interaction.user.username} timeout ${user.user.username} for ${time} minutes`)
                    .setThumbnail("https://emoji.gg/assets/emoji/6944-modshield-lightred-icon.png")
                    .addFields({
                        name: "Moderator                  member",
                        value: `${interaction.user}                        ${user}`
                    })
                    .setFooter({
                        text: `${user.user.username} timeout by NitroJam Bot `,
                        iconURL: "https://cdn.discordapp.com/app-icons/897495641956175884/2ea264e94f324798d7e0734e524328df.png?size=512"
                    })
                interaction.reply(({
                    embeds: [embed4]
                })) //message reply
                let id = (interaction.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
                client.channels.cache.find(channel => channel.id === id).send(({
                    embeds: [embed4]
                })) //server's log message
            }
        }
        if (interaction.commandName == `banlist`) {
            interaction.guild.bans.fetch()
                .then(bans => {
                    let list = bans.map(user => `${user.user}` + " " + user.user.tag + " " + "ID:" + user.user.id).join('\n');
                    list = (list == ``) ? `No one is banned on this server` + list : list
                    if (list.length >= 1950) list = `${list.slice(0, 1948)}`;
                    const embed4 = new Discord.EmbedBuilder()
                        .setColor(0xd5731b)
                        .setTitle(`Ban list`)
                        .addFields({
                            name: `total bans: ${bans.size}`,
                            value: `${list}`
                        })
                    interaction.reply(({
                        embeds: [embed4]
                    })) //message reply
                }).catch(console.error);
        }
        if (interaction.commandName == `unban`) {
            let user_id = interaction.options.getString('member_id', true)
            interaction.guild.bans.fetch()
                .then(bans => {
                    let ban = bans.map(user => user.id)
                    if (!ban.includes(user_id)) return interaction.reply({
                        content: `this user isn't banned from the server`,
                        ephemeral: true
                    })
                    else {
                        let user = client.users.cache.find(user => user.id === `${user_id}`)
                        interaction.guild.members.unban(`${user_id}`)
                        const embed = new Discord.EmbedBuilder()
                            .setColor(0x18C760)
                            .setAuthor({
                                name: `${interaction.user.tag}`,
                                iconURL: `${interaction.user.avatarURL()}`
                            })
                            .setTitle(`${interaction.user.username} unbanned ${user}`)
                            .setThumbnail("https://emoji.gg/assets/emoji/6944-modshield-lightred-icon.png")
                            .addFields({
                                name: "Moderator                  user",
                                value: `${interaction.user}                        <@${user_id}>`
                            })
                        let id = (interaction.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
                        client.channels.cache.find(channel => channel.id === id).send(({
                            embeds: [embed]
                        })) //server's log message'
                        interaction.reply(`${user} got unban from the server`)
                    }
                }).catch(console.error);
        }
        if (interaction.commandName == `dice`) {
            let max_roll = interaction.options.getNumber('max_roll', true)
            if (max_roll < 2) return interaction.reply({
                content: `the number must be bigger then 1`,
                ephemeral: true
            })
            else {
                function getRandomInt(max) {
                    return Math.floor(Math.random() * max);
                }
                interaction.reply(`🎲**${getRandomInt(max_roll) + 1}**`)
            }
        }
        if (interaction.commandName == `roll-dice`) {
            if (interaction.channel.id == `968806562313433138` || interaction.channel.id == `1028779831581745309`) {
                let difficulty = interaction.options.getString('difficulty', true)
                let guess = interaction.options.getNumber('number', true)
                diff_val = parseInt(difficulty)
                if (guess < 0 || guess > diff_val) return interaction.reply({
                    content: `you're guess for this difficulty have to be between 1-${difficulty}`,
                    ephemeral: true
                })
                else {
                    function getRandomInt(max) {
                        return Math.floor(Math.random() * max);
                    }
                    let roll = getRandomInt(diff_val) + 1
                    if (guess !== roll) return interaction.reply(`you lost the number was 🎲**${roll}**`)
                    else {
                        interaction.reply(`${interaction.user} you won the number was 🎲**${roll}** you got **15** points`)
                        setTimeout(point, 1500)

                        function point() {
                            readFile("../nitrojam_bot/json_files/points.json", "utf8", (err, points) => {
                                let userPoints = points.split(interaction.user.id).slice(1, 2).toString()
                                let num = parseInt(userPoints.split(' ').slice(2, 3))
                                let reword = num + (diff_val * 1.5)
                                console.log(`test:` + [num], [reword])
                                let new_points = points.toString().replace(`${interaction.user.id} = ${num}`, `${interaction.user.id} = ${reword}`).toString()
                                writeFileSync('../nitrojam_bot/json_files/points.json', new_points)
                            })
                        }
                    }
                }
            } else return interaction.reply({
                content: `Erorr 076: Wrong channel`,
                ephemeral: true
            })
        }
        if (interaction.commandName == `roulette`) {
            let max_roll = interaction.options.getNumber('max_roll', true)
            if (max_roll < 2) return interaction.reply(`the number must be bigger then 1`)
            else {
                function getRandomInt(max) {
                    return Math.floor(Math.random() * max);
                }
                interaction.reply(`the number the roulette stopped on is 🎰**${getRandomInt(max_roll) + 1}**`)
            }
        }
        if (interaction.commandName == `rps`) {
            if (interaction.channel.id == `968806562313433138` || interaction.channel.id == `1028779831581745309`) {
                var things = ['Rock', 'Paper', 'Scissor']; //rock paper scissor
                var thing = things[Math.floor(Math.random() * things.length)]; //choose rock, paper or scissor
                let thing2 = (thing == `Rock`) ? `Rock🪨` : (thing == `Scissor`) ? `Scissor✂️` : (thing == 'Paper') ? `Paper📰` : `Paper📰`
                let player = interaction.options.getString('player', true)
                if (thing2 == player) return interaction.reply(`${thing2}\ndraw`)
                else {
                    if (thing2 == `Rock🪨` && player == `Scissor✂️`) return interaction.reply(`${thing2}\n NitroJam Bot won`)
                    if (thing2 == `Paper📰` && player == `Rock🪨`) return interaction.reply(`${thing2}\n NitroJam Bot won`)
                    if (thing2 == `Scissor✂️` && player == `Paper📰`) return interaction.reply(`${thing2}\n NitroJam Bot won`)
                    else {
                        interaction.reply(`${thing2}\n${interaction.user} won the Rock Paper Scissor (+25 points)`)
                        setTimeout(point, 1500)

                        function point() {
                            readFile("../nitrojam_bot/json_files/points.json", "utf8", (err, points) => {
                                let userPoints = points.split(interaction.user.id).slice(1, 2).toString()
                                let num = parseInt(userPoints.split(' ').slice(2, 3))
                                let reword = num + 25
                                console.log(`test:` + [num], [reword])
                                let new_points = points.toString().replace(`${interaction.user.id} = ${num}`, `${interaction.user.id} = ${reword}`).toString()
                                writeFileSync('../nitrojam_bot/json_files/points.json', new_points)
                            })
                        }
                    }
                }
            } else return interaction.reply({
                content: `Erorr 076: Wrong channel`,
                ephemeral: true
            })
        }
        if (interaction.commandName == `ttt`) {
            if (interaction.channel.id == `968806562313433138` || interaction.channel.id == `1028779831581745309`) {
                let user = interaction.options.getMember('member', true)
                if (user.user.bot) return interaction.reply(`you can't play against a bot`)
                if (interaction.user == user) return interaction.reply(`you can't play against yourself`)
                else {
                    interaction.reply({
                        content: `${interaction.user} vs ${user}`,
                        components: [{
                                type: 1,
                                components: [{
                                        type: 2,
                                        label: "_",
                                        style: 2,
                                        custom_id: "ttt11",
                                        disabled: false
                                    },
                                    {
                                        type: 2,
                                        label: "_",
                                        style: 2,
                                        custom_id: "ttt12",
                                        disabled: false
                                    },
                                    {
                                        type: 2,
                                        label: "_",
                                        style: 2,
                                        custom_id: "ttt13",
                                        disabled: false
                                    },
                                ]
                            },
                            {
                                type: 1,
                                components: [{
                                        type: 2,
                                        label: "_",
                                        style: 2,
                                        custom_id: "ttt21",
                                        disabled: false
                                    },
                                    {
                                        type: 2,
                                        label: "_",
                                        style: 2,
                                        custom_id: "ttt22",
                                        disabled: false
                                    },
                                    {
                                        type: 2,
                                        label: "_",
                                        style: 2,
                                        custom_id: "ttt23",
                                        disabled: false
                                    },
                                ]
                            },
                            {
                                type: 1,
                                components: [{
                                        type: 2,
                                        label: "_",
                                        style: 2,
                                        custom_id: "ttt31",
                                        disabled: false
                                    },
                                    {
                                        type: 2,
                                        label: "_",
                                        style: 2,
                                        custom_id: "ttt32",
                                        disabled: false
                                    },
                                    {
                                        type: 2,
                                        label: "_",
                                        style: 2,
                                        custom_id: "ttt33",
                                        disabled: false
                                    },
                                ]
                            },
                        ]
                    });
                }
            } else return interaction.reply({
                content: `Erorr 076: Wrong channel`,
                ephemeral: true
            })
        }
        if (interaction.commandName == `hex`) {
            if (interaction.channel.id == `1028779833301409893` || interaction.channel.id == `1028779831581745307` || interaction.channel.id == `968895193711517726` || interaction.channel.id == `966724563306180718`) {
                let red = interaction.options.getNumber('red', true)
                let green = interaction.options.getNumber('green', true)
                let blue = interaction.options.getNumber('blue', true)
                const rgbToHex = (red, green, blue) =>
                    ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
                const hexCode = `0x` + rgbToHex(red, green, blue)
                const embed4 = new Discord.EmbedBuilder()
                    .setColor(hexCode)
                    .setTitle(`Color code`)
                    .setImage(`https://serux.pro/rendercolour?hex=${rgbToHex(red, green, blue)}&height=100&width=225`)
                    .addFields({
                        name: `Hex code: ${rgbToHex(red, green, blue)}`,
                        value: `(${red}, ${green}, ${blue})`
                    })
                interaction.reply({
                    embeds: [embed4]
                }) //message reply
            } else return interaction.reply({
                content: `Erorr 076: Wrong channel`,
                ephemeral: true
            })
        }
        if (interaction.commandName == `info`) {
            if (interaction.channel.id == `1028779833301409893` || interaction.channel.id == `1028779831581745307` || interaction.channel.id == `968895193711517726` || interaction.channel.id == `966724563306180718`) {
                let user = interaction.options.getMember('member', true)
                let pic = user.user.avatarURL()
                pic = (!!pic) ? pic : `https://discord.com/assets/7c8f476123d28d103efe381543274c25.png`
                let bot = user.user.bot
                bot = (bot == false) ? "no" : "yse";
                let ROLES = (user.roles.cache).filter((roles) => roles.id !== user.guild.id).map((role) => role.toString())
                ROLES = (!ROLES || ROLES == null || ROLES == undefined) ? `have no roles` : ROLES
                const embed4 = new Discord.EmbedBuilder()
                    .setColor(0x641ed4)
                    .setTitle(`${user.user.username}'s info`)
                    .setThumbnail(`${pic}`)
                    .addFields({
                        name: `Name:`,
                        value: `${user.user.tag}`
                    })
                    .addFields({
                        name: `Joined at`,
                        value: `${user.joinedAt.getFullYear()}/${user.joinedAt.getMonth() + 1}`
                    }, {
                        name: `ID:`,
                        value: `${user.user.id}`
                    }, {
                        name: `Bot(yes/no):`,
                        value: `${bot}`
                    }, {
                        name: `Roles (total ${user.roles.cache.size - 1}):`,
                        value: `${ROLES} `
                    }, {
                        name: `Account created at:`,
                        value: `${user.user.createdAt.getFullYear()}/${user.user.createdAt.getMonth() + 1}`
                    }, )
                interaction.reply({
                    embeds: [embed4]
                }) //message reply
            } else return interaction.reply({
                content: `Erorr 076: Wrong channel`,
                ephemeral: true
            })
        }
        if (interaction.commandName == `rgb`) {
            if (interaction.channel.id == `1028779833301409893` || interaction.channel.id == `1028779831581745307` || interaction.channel.id == `968895193711517726` || interaction.channel.id == `966724563306180718`) {
                let hex = interaction.options.getString('hex', true)
                var aRgbHex = `${hex}`.match(/.{1,2}/g);
                var aRgb = [
                    parseInt(aRgbHex[0], 16),
                    parseInt(aRgbHex[1], 16),
                    parseInt(aRgbHex[2], 16)
                ];
                const embed4 = new Discord.EmbedBuilder()
                    .setColor(`0x` + hex)
                    .setTitle(`Color code`)
                    .setImage(`https://serux.pro/rendercolour?hex=${hex}&height=100&width=225`)
                    .addFields({
                        name: `RGB: ${aRgb}`,
                        value: `${hex}`
                    })
                if (aRgb.includes(NaN)) return interaction.reply({
                    content: `"${hex}" is not a real color`,
                    ephemeral: true
                })
                else return interaction.reply({
                    embeds: [embed4]
                })
            } else return interaction.reply({
                content: `Erorr 076: Wrong channel`,
                ephemeral: true
            })
        }
        if (interaction.commandName == `move-vc`) {
            let user = interaction.options.getMember('member', true)
            let channel = interaction.options.getChannel('channel', true)
            let voice = channel.id
            if (!user.voice.channel) return;
            if (channel.type !== ChannelType.GuildVoice) return interaction.reply({
                content: `the corrent channel isn't a voice type`,
                ephemeral: true
            })
            else {
                user.voice.setChannel(`${voice}`)
                const embed = new Discord.EmbedBuilder()
                    .setColor(0xd5731b)
                    .setTitle(`${interaction.user.username} moved ${user.user.username} to ${channel.name}`)
                    .addFields({
                        name: "Moderator                  member",
                        value: `${interaction.user}                        ${user}`
                    })
                let id = (interaction.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
                client.channels.cache.find(channel => channel.id === id).send(({
                    embeds: [embed]
                })) //server's log message
                interaction.reply(`${user.user.username} moved successfully to ${channel}`)
            }
        }
        if (interaction.commandName == `disconnect`) {
            let user = interaction.options.getMember('member', true)
            if (!user.voice.channel) return interaction.reply(`the corrent user isn't in a voice chat`)
            else {
                user.voice.disconnect()
                const embed = new Discord.EmbedBuilder()
                    .setColor(0xd5731b)
                    .setTitle(`${interaction.user.username} disconnected ${user.user.username} from ${user.voice.channel.name}`)
                    .addFields({
                        name: "Moderator                  member",
                        value: `${interaction.user}                        ${user}`
                    })
                let id = (interaction.guild.id == `897154008228180048`) ? '897154010543423610' : `1028779833024577643`
                client.channels.cache.find(channel => channel.id === id).send(({
                    embeds: [embed]
                })) //server's log message
                interaction.reply(`${user.user.username} got disconnected from a voice channel successfully`)
            }
        }
        if (interaction.commandName == `fnf-mod-request`) {
            if (interaction.guild.id == `897154008228180048`) {
                if (interaction.channel.id == `988030349332324423`) {
                    let mod = interaction.options.getString('mod', true)
                    if (!mod || mod == undefined) return;
                    else {
                        let id = parseInt(mod.split(`/`).slice(4, 5))
                        id = (!id || id == NaN) ? `https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png` : `https://gamebanana.com/mods/embeddables/${id}?variant=sd_image`
                        let c = interaction.channel
                        let pic = interaction.user.avatarURL()
                        pic = (!!pic || !pic == null) ? pic : `https://discord.com/assets/7c8f476123d28d103efe381543274c25.png`
                        let embed22 = new Discord.EmbedBuilder()
                            .setColor(0xf000ff)
                            .setThumbnail(pic)
                            .setImage(id)
                            .addFields({
                                name: `Mod: ${mod}`,
                                value: `requested by ${interaction.user}`
                            })
                        const row = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                .setCustomId('xMod')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji(`❌`), )
                        interaction.reply({
                            embeds: [embed22],
                            components: [row]
                        })
                    }
                } else return interaction.reply({
                    content: `wrong channel, this command works only at <#988030349332324423>`,
                    ephemeral: true
                })
            } else return interaction.reply({
                content: `Erorr 076: Wrong channel`,
                ephemeral: true
            })
        }
        if (interaction.commandName == `fnf-access`) {
            let id = interaction.options.getString('user_id', true)
            readFile("../nitrojam_bot/json_files/fnf.json", "utf8", (err, users) => {
                let user = users.includes(id)
                if (user == `false` || user == false || !user == true || !user == `true`) return;
                if (users.includes(id)) return interaction.reply(`you need to mention a member you want to add`)
                else {
                    writeFileSync('../nitrojam_bot/json_files/fnf.json', users + `\n` + id)
                    interaction.reply(`done`)
                }
            })
        }
        if (interaction.commandName == `game-request`) {
            let game = interaction.options.getString('game', true)
            if (interaction.channel.id == `988030349332324423` || interaction.channel.id == `1037389654422474922` || interaction.channel.id == `1028779833301409896`) {
                let link = game.split(`https://`).slice(1, 2).toString()
                let link2 = (link.includes(`store.steampowered.com/app/`)) ? link.split(`/`).slice(2, 3).toString() : link
                let img = `https://cdn-icons-png.flaticon.com/512/1068/1068727.png`
                let img2 = (link.includes(`store.steampowered.com/app/`)) ? `https://cdn.cloudflare.steamstatic.com/steam/apps/${link2}/header.jpg` : img
                console.log(img2)
                let embed22 = new Discord.EmbedBuilder()
                    .setColor(0xf000ff)
                    .addFields({
                        name: `game: ${game}`,
                        value: `asked by ${interaction.user}`
                    })
                    .setImage(img2)
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                        .setCustomId('xGame')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji(`❌`), )
                if (!game.includes(`https://`)) return interaction.reply({
                    content: `the message have to includes the game link`,
                    ephemeral: true
                })
                else return interaction.reply({
                    embeds: [embed22],
                    components: [row]
                }) //server's log message
            } else return interaction.reply({
                content: `Erorr 076: Wrong channel`,
                ephemeral: true
            })
        }
        if (interaction.commandName == `points`) {
            if (interaction.channel.id == `1028779833301409893` || interaction.channel.id == `1028779831581745307` || interaction.channel.id == `968895193711517726` || interaction.channel.id == `966724563306180718`) {
                let user = interaction.options.getMember('member', false)
                user = (!user) ? interaction.user : user.user
                let name = user.username
                name = (!user || user == interaction.user) ? `you` : name
                readFile("../nitrojam_bot/json_files/points.json", "utf8", (err, jsonString) => {
                    if (!jsonString.includes(user.id)) {
                        interaction.reply(`${name} don't have points. chat more to get points`)
                    }
                    if (jsonString.includes(user.id)) {
                        let userPoints = jsonString.split(user.id).slice(1, 2).toString()
                        let num = parseInt(userPoints.split(' ').slice(2, 3))
                        interaction.reply(`${name} have **${num}** points`)
                    }
                })
            } else return interaction.reply({
                content: `Erorr 076: Wrong channel`,
                ephemeral: true
            })
        }
        if (interaction.commandName == `roles`) {
            const embed = new Discord.EmbedBuilder()
                .setColor(`0xed00fc`)
                .addFields({
                    name: `get roles`,
                    value: `choose what you want to get ping for`
                })

            const row = new Discord.ActionRowBuilder()
                .addComponents(new Discord.SelectMenuBuilder()
                    .setCustomId('add')
                    .setPlaceholder('choose a role')
                    .setMinValues(1)
                    .setMaxValues(1)
                    .addOptions({
                        label: 'התראות לייבים',
                        description: `פינג ללייבים`,
                        value: '1028779829836906612',
                    }, {
                        label: 'עידכוני שרת',
                        description: `פינג לעידכונים`,
                        value: '1028779829836906611'
                    }, {
                        label: `התראות טיקטוק`,
                        description: `פינג לטיקטוק`,
                        value: '1041659015970701332'
                    }, {
                        label: `התראות איוונטים`,
                        description: `פינג לאיוונטים`,
                        value: '1028779829836906610'
                    })
                );

            const embed2 = new Discord.EmbedBuilder()
                .setColor(`0xed00fc`)
                .addFields({
                    name: `remove roles`,
                    value: `choose roles you want to remove`
                })

            const row2 = new Discord.ActionRowBuilder()
                .addComponents(new Discord.SelectMenuBuilder()
                    .setCustomId('remove')
                    .setPlaceholder('choose a role')
                    .setMinValues(1)
                    .setMaxValues(1)
                    .addOptions({
                        label: 'התראות לייבים',
                        description: `פינג ללייבים`,
                        value: '1028779829836906612',
                    }, {
                        label: 'עידכוני שרת',
                        description: `פינג לעידכונים`,
                        value: '1028779829836906611'
                    }, {
                        label: `התראות טיקטוק`,
                        description: `פינג לטיקטוק`,
                        value: '1041659015970701332'
                    }, {
                        label: `התראות איוונטים`,
                        description: `פינג לאיוונטים`,
                        value: '1028779829836906610'
                    })
                );

            interaction.channel.send(`https://cdn.discordapp.com/attachments/898223066277101578/971059357796155432/rainbow-line.gif`)
            interaction.channel.send(`https://cdn.discordapp.com/attachments/898223066277101578/971059357796155432/rainbow-line.gif`)
            interaction.channel.send({
                embeds: [embed],
                components: [row]
            }).catch(console.error)

            interaction.channel.send({
                embeds: [embed2],
                components: [row2]
            }).catch(console.error)
            interaction.channel.send(`https://cdn.discordapp.com/attachments/898223066277101578/971059357796155432/rainbow-line.gif`)
        }
        if (interaction.commandName == `rules`) {
            let embed1 = new Discord.EmbedBuilder() //logs room message
                .setTitle(`**Rules**`)
                .setColor(0x19ff1e)
                .addFields({
                    name: "1.תהיו נחמדים אחד לשני",
                    value: `אל תקללו אנשים בשרת ||קללות רגילות כמו פאק ושיט מותר||`
                })
                .addFields({
                    name: "2.אל תתיגו אנשים רנדומלים בלי סיבה",
                    value: `יש אנשים שלא אוהבים כשמתייגים אותם ופקודות לא נחשבות תיוג רנדומלי`
                })
                .addFields({
                    name: "3.תכבדו את הצוות",
                    value: `הצוות עוזרר הרבה בתפעול השרת ומגיע לו את הכבוד שלכם. אם אתם חושבים שחבר צוות עשה משהו לא נכון תפנו ל <@701017199300837386>, <@450003891472564234> או <@726395361341603871> בפרטי והם יחליטו`
                })
                .addFields({
                    name: "4.אל תשתפו מידע אישי עם אף אחד",
                    value: `בחיים על תשתפו **סיסמאות, כתובת, פרטי כרטיס אשראי או כל דבר אחר**`
                })
                .addFields({
                    name: "5.אסור להספים",
                    value: `ספאם יוביל לטיימהאוט קיק ואפילו באן`
                })
                .addFields({
                    name: "6.תוכן פורנוגרפי אסור בשרת בכל צורה שהיא",
                    value: `שיתוף תוכן מסוג זה יוביל ל __**באן אוטומטי**__`
                })
                .addFields({
                    name: "7.על כל בעיה טכנית בבקשה תדווחו",
                    value: `אם אתם חובים בעייות תכניות בבקשה תדווחו ל<@701017199300837386>`
                })
            let embed2 = new Discord.EmbedBuilder() //logs room message
                .setTitle(`**Rules**`)
                .setColor(0x19ff1e)
                .addFields({
                    name: "1.Be nice one to each other",
                    value: `Do not curse anyone on the server ||swears allowed||`
                })
                .addFields({
                    name: "2.Don’t ping random people for no reason ",
                    value: `That's can be annoying and using command doesn't count as random ping`
                })
                .addFields({
                    name: "3.Be respectful to the staff",
                    value: `The staff are helping a lot with running the server and they deserve your respect no matter what. if you think any staff member did something wrong DM <@701017199300837386>, <@450003891472564234> or <@726395361341603871> and they will say if the staff did good or not`
                })
                .addFields({
                    name: "4.Don’t share private information with anyone",
                    value: `Do not share **passwords, address, credit card details or any other private information**`
                })
                .addFields({
                    name: "5.Do not spam in any channel",
                    value: `spamming will lead to timeouts and even kicks and ban`
                })
                .addFields({
                    name: "6.Pornographic content is disallow in this server",
                    value: `Shearing any pornographic content will lead to __**automatic Ban**__`
                })
                .addFields({
                    name: "7.Any technicald problem Please report",
                    value: `if you having any technical problems report to <@701017199300837386>`
                })
            let embed = (interaction.guild.id !== `897154008228180048`) ? embed1 : embed2
            interaction.channel.send(`https://cdn.discordapp.com/attachments/898223066277101578/971059357796155432/rainbow-line.gif`) //send image
            interaction.channel.send('https://cdn.discordapp.com/attachments/949004045803200532/986311575499604058/2755f08add10859d.png') //send image
            interaction.channel.send(`https://cdn.discordapp.com/attachments/898223066277101578/971059357796155432/rainbow-line.gif`) //send image
            interaction.channel.send(({
                embeds: [embed]
            })) //server's log message
            interaction.channel.send(`https://cdn.discordapp.com/attachments/898223066277101578/971059357796155432/rainbow-line.gif`) //send image
        }
        if (interaction.commandName == `edit`) {
            let ID = interaction.options.getString('message_id', true)
            let message = interaction.options.getString('message', true)
            let list = interaction.channel.messages.fetch(`${ID}`).then(message => message)
            let listContent = Promise.resolve(list).then(function (value) {
                if (message.content.toLowerCase().startsWith(`${Command}edit`) || message.author == client.user && message.content == `${value.content}` && message.content.length == value.content.length) {

                    console.log(value.content)
                    value.edit(`${message}`).then(message => console.log(value)).catch(console.error)
                } else return;
            }, function (value) {})
        }
        if (interaction.commandName == `rank`) {
            let file = (interaction.guild.id !== `897154008228180048`) ? '../nitrojam_bot/json_files/rank2.json' : '../nitrojam_bot/json_files/rank.json'
            if (interaction.channel.id == `1028779833301409893` || interaction.channel.id == `1028779833301409896` || interaction.channel.id == `1028779831581745307` || interaction.channel.id == `968895193711517726` || interaction.channel.id == `966724563306180718`) {
                let user = interaction.options.getMember('member', false)
                readFile(file, "utf8", (err, rank) => {
                    let user2 = (!user) ? interaction.user : user.user
                    let user3 = (!user) ? interaction.member : user
                    const presence = user3.presence.status
                    interaction.reply(`creating card...`)
                    console.log(presence)
                    let color = (presence == `online`) ? `#30ff30` : (presence == `idle`) ? `#ffaf00` : (presence == `dnd`) ? `#ff0000` : `#fafafa`
                    if (!rank.includes(user2.id)) return writeFileSync(file, `` + `${rank}` + `\n` + `${user2.id}` + ` exp` + ` = ` + `0` + ` lvl ` + `= ` + `0`, {
                        encoding: 'utf8',
                        flag: 'w'
                    })
                    let userExp = rank.split(user2.id).slice(1, 2).toString()
                    let exp = parseInt(userExp.split(' ').slice(3, 4))
                    let lvl = parseInt(userExp.split(' ').slice(6, 7))
                    let img_user = user2.displayAvatarURL({
                        extension: `png`,
                        dynamic: false,
                        format: `png`
                    })
                    let bg2 = new Image()
                    bg2.src = "../nitrojam_bot/rank.png"
                    let av2 = new Image()
                    let bg = loadImage("https://img.rasset.ie/0015d72f-1600.jpg"),
                        av = loadImage((img_user))
                    registerFont('../nitrojam_bot/ggsans-Bold.ttf', {
                        family: 'gg sans'
                    })
                    setTimeout(canvas_, 7000)

                    function canvas_() {
                        const canvas = createCanvas(1000, 300)
                        const ctx = canvas.getContext('2d')
                        const bar_width = 600
                        let math2 = (lvl >= 2) ? (((1 + lvl) * ((712 * lvl) / 8) * 1.5) - 2) - (((1 + lvl - 1) * ((712 * (lvl - 1)) / 8) * 1.5) - 2) : ((1 + lvl) * ((712 * lvl) / 8) * 1.5)
                        let lvl2 = math2.toString().split('.').slice(0, 1)
                        let math3 = parseInt(lvl2)
                        let math4 = (math2 >= 1000) ? `${math2 / 1000}k` : math3
                        let math5 = (math2 > 1000000) ? `${math2 / 1000000}m` : math4
                        let exp1 = (lvl >= 2) ? exp - (((lvl) * ((712 * (lvl - 1)) / 8) * 1.5) - 2) : exp
                        let xp2 = exp1.toString().split('.').slice(0, 1)
                        let exp2 = parseInt(xp2)
                        let exp3 = (exp1 >= 1000) ? `${exp1 / 1000}k` : exp2
                        let exp4 = (exp2 > 1000000) ? `${exp1 / 1000000}m` : exp3
                        let math = parseInt(exp1) / parseInt(math2)
                        math = (math >= 1) ? 1 : math
                        console.log(math, math3, exp)
                        math = (math <= 0) ? 0 : math
                        exp1 = (exp1 > math2) ? exp : exp1
                        console.log([av2], [bg2], [av], [bg])
                        ctx.drawImage(bg2, 0, 0, canvas.width, canvas.height)

                        ctx.beginPath()
                        ctx.arc(120, 120, 111, 0, 2 * Math.PI)
                        ctx.lineWidth = 4
                        ctx.strokeStyle = color
                        ctx.stroke()
                        ctx.closePath()

                        ctx.lineJoin = `round`
                        ctx.lineWidth = 69

                        ctx.strokeRect(290, 191, bar_width, 0)

                        ctx.strokeStyle = `#000000`
                        ctx.strokeRect(292, 192, bar_width, 0)

                        ctx.strokeStyle = `#fafafa`
                        ctx.strokeRect(292, 192, (bar_width * (math)), 0)

                        ctx.lineJoin = `round`
                        ctx.lineWidth = 45

                        ctx.strokeStyle = `#fafafa`
                        ctx.strokeRect(37, 260, (190), -1)

                        ctx.font = "bold 40px gg sans"
                        ctx.fillStyle = `#131313`
                        ctx.textAlign = "center"
                        ctx.fillText(user2.tag, 130, 275, 210)

                        ctx.font = "bold 40px gg sans"
                        ctx.fillStyle = `#fafafa`
                        ctx.textAlign = "center"
                        ctx.fillText(lvl, 930, 40, 80)

                        ctx.font = "bold 30px gg sans"
                        ctx.fillStyle = `#fafafa`
                        ctx.textAlign = "center"

                        ctx.fillText(`${exp4}/${math5}`, 840, 155, 150)

                        ctx.fillStyle = `#fafafa`
                        ctx.font = "bold 40px gg sans"
                        ctx.fillText('Level', 850, 40, 200)

                        ctx.beginPath()
                        ctx.arc(120, 120, 110, 0, 2 * Math.PI, true)
                        ctx.closePath()
                        ctx.clip()

                        ctx.drawImage(av2, 10, 10, 220, 220)

                        const at = new Discord.AttachmentBuilder(canvas.toBuffer(), "rank.png")

                        interaction.editReply({
                            content: "card created",
                            files: [at]
                        }).catch(console.error)
                    }
                    av2.src = img_user
                })
            } else return interaction.reply({
                content: `Erorr 076: Wrong channel`,
                ephemeral: true
            })
        }
        if (interaction.commandName == `add-xp`) {
            let user = interaction.options.getMember('member', true)
            let amount = interaction.options.getNumber('amount', true)
            readFile("../nitrojam_bot/json_files/rank.json", "utf8", (err, rank1) => {
                readFile("../nitrojam_bot/json_files/rank2.json", "utf8", (err, rank2) => {
                    let rank = (interaction.guild.id == `897154008228180048`) ? rank1 : rank2
                    let file = (interaction.guild.id == `897154008228180048`) ? '../nitrojam_bot/json_files/rank.json' : '../nitrojam_bot/json_files/rank2.json'
                    let userPoints = rank.toString().split(user.user.id).slice(1, 2).toString()
                    let exp = parseInt(userPoints.split(' ').slice(3, 4))
                    let lvl = parseInt(userPoints.split(' ').slice(6, 7))
                    if (amount > exp) return interaction.reply(`the corrent user have only ${exp} xp points`)
                    if (!amount || amount == NaN) return interaction.reply(`you have to put a number of xp points to add`)
                    else {
                        let new_xp = exp + amount
                        let new_rank = rank.toString().replace(`${user.id} exp = ${exp} lvl = ${lvl}`, `${user.id} exp = ${new_xp} lvl = ${lvl}`)
                        writeFileSync(file, new_rank, {
                            encoding: 'utf8',
                            flag: 'w'
                        })
                        interaction.reply(`added ${amount} xp points to ${user.user.username}`)
                    }
                })
            })
        }
        if (interaction.commandName == `remove-xp`) {
            let user = interaction.options.getMember('member', true)
            let amount = interaction.options.getNumber('amount', true)
            readFile("../nitrojam_bot/json_files/rank.json", "utf8", (err, rank1) => {
                readFile("../nitrojam_bot/json_files/rank2.json", "utf8", (err, rank2) => {
                    let rank = (interaction.guild.id == `897154008228180048`) ? rank1 : rank2
                    let file = (interaction.guild.id == `897154008228180048`) ? '../nitrojam_bot/json_files/rank.json' : '../nitrojam_bot/json_files/rank2.json'
                    let userPoints = rank.toString().split(user.user.id).slice(1, 2).toString()
                    let exp = parseInt(userPoints.split(' ').slice(3, 4))
                    let lvl = parseInt(userPoints.split(' ').slice(6, 7))
                    if (!amount || amount == NaN) return interaction.reply(`you have to put a number of xp points to add`)
                    if (!rank.toString().includes(`${user.id}`)) return interaction.reply(`the mention member doesn't have xp`)
                    if (exp - amount < 0) return interaction.reply(`you can't remove **${amount} xp points** from ${user.user.username} coz they only have **${exp} xp points**`)
                    else {
                        let new_xp = exp - amount
                        let new_rank = rank.toString().replace(`${user.id} exp = ${exp} lvl = ${lvl}`, `${user.id} exp = ${new_xp} lvl = 0`)
                        writeFileSync(file, new_rank, {
                            encoding: 'utf8',
                            flag: 'w'
                        })
                        interaction.reply(`removed ${amount} xp points from ${user.user.username}`)
                    }
                })
            })
        }
        if (interaction.commandName == `reset-xp`) {
            let user = interaction.options.getMember('member', false)
            readFile("../nitrojam_bot/json_files/rank.json", "utf8", (err, rank1) => {
                readFile("../nitrojam_bot/json_files/rank2.json", "utf8", (err, rank2) => {
                    let rank = (interaction.guild.id == `897154008228180048`) ? rank1 : rank2
                    let file = (interaction.guild.id == `897154008228180048`) ? '../nitrojam_bot/json_files/rank.json' : '../nitrojam_bot/json_files/rank2.json'
                    if (!user) {
                        interaction.reply(`all ranks have been reset`).catch(console.error)
                        writeFileSync(file, "", {
                            encoding: 'utf8',
                            flag: 'w'
                        })
                    } else if (!!user) {
                        let userPoints = rank.toString().split(user.id).slice(1, 2).toString()
                        let exp = parseInt(userPoints.split(' ').slice(3, 4))
                        let lvl = parseInt(userPoints.split(' ').slice(6, 7))
                        let new_rank = rank.toString().replace(`${user.id} exp = ${exp} lvl = ${lvl}`, ``)
                        writeFileSync(file, new_rank, {
                            encoding: 'utf8',
                            flag: 'w'
                        })
                        interaction.reply(`${user.user.username}'s rank have been reset`)
                    }
                })
            })
        }
        if (interaction.commandName == `add-item`) {
            let name = interaction.options.getString('name', true)
            let price = interaction.options.getNumber('price', true)
            let item_id = interaction.options.getString('item_id', true)
            let role_id = interaction.options.getString('role_id', true)
            readFile("../nitrojam_bot/json_files/shop.json", "utf8", (err, shop1) => {
                readFile("../nitrojam_bot/json_files/shop2.json", "utf8", (err, shop2) => {
                    let jsonString = (interaction.guild.id == `897154008228180048`) ? shop1 : shop2
                    let file = (interaction.guild.id == `897154008228180048`) ? '../nitrojam_bot/json_files/shop.json' : '../nitrojam_bot/json_files/shop2.json'
                    console.log([name], [price], [item_id])
                    if (jsonString.includes(`"ID":"${item_id}"`)) return interaction.reply(`you already have an item with this id **"${item_id}"**`)
                    else {
                        interaction.reply(`The item **${name}** have been added for **${price}**`)
                        writeFileSync(file, `` + `${jsonString}` + `\n` + ` "name":` + `"${name}",` + `"price":` + `"${price}",` + `"ID":` + `"${item_id}",` + `"roleID":` + `"${role_id}",`, {
                            encoding: 'utf8',
                            flag: 'w'
                        })
                    }
                })
            })
        }
        if (interaction.commandName == `shop`) {
            if (interaction.channel.id == `1028779833301409893` || interaction.channel.id == `1028779831581745307` || interaction.channel.id == `968895193711517726` || interaction.channel.id == `966724563306180718`) {
                readFile("../nitrojam_bot/json_files/points.json", "utf8", (err, points) => {
                    readFile("../nitrojam_bot/json_files/shop.json", "utf8", (err, shop1) => {
                        readFile("../nitrojam_bot/json_files/shop2.json", "utf8", (err, shop2) => {
                            let jsonString = (interaction.guild.id == `897154008228180048`) ? shop1 : shop2
                            let msg = jsonString.toString().replace(/["]/g, ``).replace(/[,]/g, `>\n`).replace(/roleID:/g, `role:<@&`)
                            let page1 = msg.toString().split(`\n`).slice(0, 65).toString().replace(/[,]/g, `\n`)
                            let userPoints = points.split(interaction.user.id).slice(1, 2).toString()
                            let num = parseInt(userPoints.split(' ').slice(2, 3))
                            let embed22 = new Discord.EmbedBuilder()
                                .setTitle(`**Shop**`)
                                .addFields({
                                    name: `You got **${num} points**`,
                                    value: `go to another page to refresh`
                                })
                                .setColor(0xe7dd26)
                                .addFields({
                                    name: "Items",
                                    value: `${page1}`
                                })
                            const row1 = new ActionRowBuilder()
                                .addComponents(
                                    new ButtonBuilder()
                                    .setCustomId('page2')
                                    .setLabel(`>`)
                                    .setStyle(ButtonStyle.Primary)
                                )
                            interaction.reply({
                                embeds: [embed22],
                                components: [row1]
                            })
                        })
                    })
                })
            } else return interaction.reply({
                content: `Erorr 076: Wrong channel`,
                ephemeral: true
            })
        }
        if (interaction.commandName == `add-points`) {
            readFile("../nitrojam_bot/json_files/points.json", "utf8", (err, points) => {
                let user = interaction.options.getMember('member', true)
                let amount = interaction.options.getNumber('amount', true)
                let userPoints = points.split(user.id).slice(1, 2).toString()
                let num = parseInt(userPoints.split(' ').slice(2, 3))
                let new_amount = num + amount
                let new_points = points.toString().replace(`${user.id} = ${num}`, `${user.id} = ${new_amount}`)
                writeFileSync('../nitrojam_bot/json_files/points.json', new_points, {
                    encoding: 'utf8',
                    flag: 'w'
                })
                interaction.reply(`added ${amount} points to ${user.user.username}`)
            })
        }
        if (interaction.commandName == `remove-points`) {
            readFile("../nitrojam_bot/json_files/points.json", "utf8", (err, points) => {
                let user = interaction.options.getMember('member', true)
                let amount = interaction.options.getNumber('amount', true)
                let userPoints = points.split(user.id).slice(1, 2).toString()
                let num = parseInt(userPoints.split(' ').slice(2, 3))
                let new_amount = num - amount
                let new_points = points.toString().replace(`${user.id} = ${num}`, `${user.id} = ${new_amount}`)
                writeFileSync('../nitrojam_bot/json_files/points.json', new_points, {
                    encoding: 'utf8',
                    flag: 'w'
                })
                interaction.reply(`removed ${amount} points from ${user.user.username}`)
            })
        }
        if (interaction.commandName == `reset-points`) {
            readFile("../nitrojam_bot/json_files/points.json", "utf8", (err, points) => {
                let user = interaction.options.getMember('member', true)
                let amount = interaction.options.getNumber('amount', true)
                let userPoints = points.split(user.id).slice(1, 2).toString()
                let num = parseInt(userPoints.split(' ').slice(2, 3))
                if (!user) {
                    writeFileSync('../nitrojam_bot/json_files/points.json', ``, {
                        encoding: 'utf8',
                        flag: 'w'
                    })
                    interaction.reply(`all points have been reset`)
                } else if (!!user) {
                    let new_points = points.toString().replace(`${user.id} = ${num}`, ``)
                    writeFileSync('../nitrojam_bot/json_files/points.json', new_points, {
                        encoding: 'utf8',
                        flag: 'w'
                    })
                    interaction.reply(`${user.user.username}'s points been reset`)
                }
            })
        }
        if (interaction.commandName == `buy`) {
            if (interaction.channel.id == `1028779833301409893` || interaction.channel.id == `1028779831581745307` || interaction.channel.id == `968895193711517726` || interaction.channel.id == `966724563306180718`) {
                readFile("../nitrojam_bot/json_files/points.json", "utf8", (err, points) => {
                    readFile("../nitrojam_bot/json_files/shop.json", "utf8", (err, shop1) => {
                        readFile("../nitrojam_bot/json_files/shop2.json", "utf8", (err, shop2) => {
                            readFile("../nitrojam_bot/json_files/ShopUsers.json", "utf8", (err, userString) => {
                                let jsonString = (interaction.guild.id == `897154008228180048`) ? shop1 : shop2
                                let item = interaction.options.getString('item_name', true)
                                let item_file = jsonString.split(`"${item}"`).slice(1, 2).toString().replace(`\n`, ``)
                                let item_id = item_file.split(`"ID"`).slice(1, 2).toString().split(`,`).slice(0, 1).toString().replace(/[,]/g, ``).replace(/[:]/, ``).replace(/["]/g, ``)
                                let item_price = item_file.split(`,`).slice(1, 2).toString().replace(/["]/g, '').replace(/[price]/g, '').replace(/[:]/, ``)
                                let num_price = parseInt(item_price)
                                let prize_id = item_file.split(`"roleID"`).slice(1).toString().split(`,`).slice(0, 1).toString().replace(/[,]/g, ``).replace(/[:]/g, ``).replace(/["]/g, ``).toString().split(`\n`).slice(0, 1).toString().replace(`${item_id}`, ``)
                                let member = interaction.user
                                if (!points.includes(member.id)) return interaction.reply({
                                    content: `you don't have points!!!`,
                                    ephemeral: true
                                })
                                let pointsUser = points.split(`${member.id}`).slice(1).toString().split(` `).slice(2, 3).toString().split(`\n`).slice(0, 1)
                                let points_amount = parseInt(pointsUser)
                                if (userString.includes(`${member.id}=>${item_id}`)) return interaction.reply({
                                    content: `you can't buy the same item twice`,
                                    ephemeral: true
                                })
                                else if (points_amount < num_price) return interaction.reply({
                                    content: `you don't have enough points`,
                                    ephemeral: true
                                })
                                else if (!jsonString.includes(item)) return interaction.reply({
                                    content: `this item doesn't exist in the shop`,
                                    ephemeral: true
                                })
                                else {
                                    let newPoints = points_amount - num_price
                                    writeFileSync('../nitrojam_bot/json_files/points.json', `` + `${points.replace(`${member.id} = ${points_amount}`, `${member.id} = ${newPoints}`)}`, {
                                        encoding: 'utf8',
                                        flag: 'w'
                                    })
                                    writeFileSync('../nitrojam_bot/json_files/ShopUsers.json', `` + `${userString}` + `\n` + `${member.id}` + `=>` + `${item_id}`, {
                                        encoding: 'utf8',
                                        flag: 'w'
                                    })
                                    interaction.member.roles.add(`${prize_id}`).catch(console.error)
                                    console.log([`${item_file}`], [item], [item_id], [item_price], [num_price], [pointsUser], [points_amount], [newPoints], [prize_id])
                                    interaction.user.send(`you just bought the item **${item}** for **${item_price} points**`).catch(console.error)
                                    interaction.reply(`bought **${item}** for **${item_price} points**`)
                                }
                            })
                        })
                    })
                })
            } else return interaction.reply({
                content: `Erorr 076: Wrong channel`,
                ephemeral: true
            })
        }
        if (interaction.commandName == `steam-profile`) {
            let url = interaction.options.getString('url', true)
            let get_id = url.split('/').slice(4, 5).toString().replace(`/`, "")
            steam.getUserSummary(get_id).then(summary => {
                let picture = summary.avatar.large
                let username = summary.nickname
                steam.getUserLevel(get_id).then(level => {
                    let user_lvl = level
                    const embed = new Discord.EmbedBuilder()
                        .setColor(`#1800ff`)
                        .setTitle(username + `'s steam card`)
                        .setURL(url)
                        .setThumbnail(picture)
                        .addFields({
                            name: `steam lvl : **${user_lvl}**`,
                            value: `­`,
                            inline: false
                        })
                    interaction.reply({
                        content: `­`,
                        embeds: [embed]
                    }).catch(console.error)
                }).catch(console.error)
            }).catch(console.error);
        }
        if (interaction.commandName == `test`) {
        }
        if (interaction.commandName == `ping-access`) {
            let user = interaction.options.getMember('member', true)
            let action = interaction.options.getString('action', true)
            readFile("../nitrojam_bot/json_files/ping_access.json", "utf8", (err, ping) => {
                if (action == `add`) {
                    if (ping.includes(user.id)) return interaction.reply(`this user have access already`).catch(console.error)
                    else {
                        writeFileSync("../nitrojam_bot/json_files/ping_access.json", ping + `\n` + `${user.id}`, {
                            encoding: 'utf8',
                            flag: 'w'
                        })

                        interaction.reply(`${user} added to the list successfully`).catch(console.error)
                    }
                } else {

                    if (!ping.includes(user.id)) return interaction.reply(`this user doesn't had access to ping nitrojam`).catch(console.error)

                    else {
                        let new_ping = ping.replace(user.id, "").toString()
                        writeFileSync("../nitrojam_bot/json_files/ping_access.json", new_ping, {
                            encoding: 'utf8',
                            flag: 'w'
                        })

                        interaction.reply(`${user} removed from the list successfully`).catch(console.error)

                    }
                }
            })
        }
        if (interaction.commandName == `leaderboard`) {
            interaction.reply(`creating leaderboard...`)

            var String = []
            var length = []
            var one = []
            var two = []
            var three = []
            var four = []
            var five = []
            var six = []
            var seven = []
            var eight = []
            var nine = []
            var ten = []
            var users = []
            var user1_ = []
            var user2_ = []
            var user3_ = []
            var user4_ = []
            var user5_ = []
            var user6_ = []
            var user7_ = []
            var user8_ = []
            var user9_ = []
            var user10_ = []

            fs.readFile("../nitrojam_bot/json_files/rank2.json", "utf8", (err, rank2) => {
                const string = rank2
                const string3 = string.toString().replace(/\n/g, ` * `)
                const string2 = string3
                String.push(string2)

                const dots = string2.replace(/[0-9]/g, ``).replace(/[a-z]/g, ``).replace(/=/g, '').replace(/ /g, ``).toString()
                length.push(dots)
            })

            setTimeout(() => {
                var user1 = []
                var user2 = []
                var xp1 = []
                var xp2 = []
                var winner1 = []
                var winner2 = []
                var winner3 = []
                var winner4 = []

                const length2 = length.toString().length

                console.log(String)
                console.log(length2)
                for (let i = 0; i < length2 / 2; i++) {
                    var loser1 = []
                    var loser2 = []
                    var last = []

                    const user_1 = String.toString().split(` * `).slice(i + 1, i + 2)
                    user1.push(user_1)

                    const user_2 = String.toString().split(` * `).slice(i + 3, i + 4)
                    user2.push(user_2)

                    const exp1 = user_1.toString().split(`exp = `).slice(1, 2).toString().split(`lvl`).slice(0, 1)
                    xp1.push(exp1)

                    const exp2 = user_2.toString().split(`exp = `).slice(1, 2).toString().split(`lvl`).slice(0, 1)
                    xp2.push(exp2)

                    const EXP1 = parseInt(exp1)
                    const EXP2 = parseInt(exp2)

                    last = last.toString().split(/[0-9]/).slice(0, 1)

                    if (EXP1 > EXP2) {
                        setTimeout(() => {
                            last.push(EXP1)
                            setTimeout(() => {
                                winner1.push(EXP1)
                                loser1.push(EXP2)
                            }, 10)
                        }, 10)
                    } else if (EXP1 < EXP2) {
                        setTimeout(() => {
                            last.push(EXP1)
                            setTimeout(() => {
                                winner1.push(EXP2)
                                loser1.push(EXP1)
                            }, 10)
                        }, 10)
                    }
                    setTimeout(() => {
                        for (let i = 0; i < length2 / 2; i++) {
                            for (let i2 = 0; i2 < length2 / 2; i2++) {
                                const w = winner1.toString().split(`,`).slice(i, i + 1)
                                const l = loser1.toString().split(`,`).slice(i2, i2 + 1)

                                if (Number(w) > Number(l)) {
                                    if (!winner2.toString().includes(w)) {
                                        winner2.push(w)
                                    }
                                    loser2.push(l)
                                } else if (Number(w) < Number(l)) {
                                    if (!winner2.toString().includes(l)) {
                                        winner2.push(l)
                                    }
                                    loser2.push(w)
                                }
                            }
                        }
                        setTimeout(() => {
                            for (let i = 0; i < length2 / 5.4; i++) {
                                for (let i2 = 0; i2 < length2 / 5.4; i2++) {
                                    const w1 = winner2.toString().split(`,`).slice(i, i + 1)
                                    const w2 = winner2.toString().split(`,`).slice(i2, i2 + 1)

                                    if (Number(w1) < Number(w2)) {
                                        if (!winner3.toString().includes(w2)) {
                                            winner3.push(w2)
                                        }
                                    } else if (Number(w1) > Number(w2)) {
                                        if (!winner3.toString().includes(w1)) {
                                            winner3.push(w1)
                                        }
                                    }
                                }
                            }
                        }, 100)
                    }, 100)
                }

                setTimeout(() => {

                    setTimeout(() => {
                        const l = winner4.toString().replace(/,/g, `*`).replace(/[0-9]/g, ``)

                        const num = l.length + 1
                        user1_.push(` <@` + users.toString().split(`,`).slice(0, 1).toString() + `>: ` + winner4.toString().split(`,`).slice(num - 1, num - 0).toString() + ` exp`)
                        user2_.push(` <@` + users.toString().split(`,`).slice(1, 2).toString() + `>: ` + winner4.toString().split(`,`).slice(num - 2, num - 1).toString() + ` exp`)
                        user3_.push(` <@` + users.toString().split(`,`).slice(2, 3).toString() + `>: ` + winner4.toString().split(`,`).slice(num - 3, num - 2).toString() + ` exp`)
                        user4_.push(` <@` + users.toString().split(`,`).slice(3, 4).toString() + `>: ` + winner4.toString().split(`,`).slice(num - 4, num - 3).toString() + ` exp`)
                        user5_.push(` <@` + users.toString().split(`,`).slice(4, 5).toString() + `>: ` + winner4.toString().split(`,`).slice(num - 5, num - 4).toString() + ` exp`)
                        user6_.push(` <@` + users.toString().split(`,`).slice(5, 6).toString() + `>: ` + winner4.toString().split(`,`).slice(num - 6, num - 5).toString() + ` exp`)
                        user7_.push(` <@` + users.toString().split(`,`).slice(6, 7).toString() + `>: ` + winner4.toString().split(`,`).slice(num - 7, num - 6).toString() + ` exp`)
                        user8_.push(` <@` + users.toString().split(`,`).slice(7, 8).toString() + `>: ` + winner4.toString().split(`,`).slice(num - 8, num - 7).toString() + ` exp`)
                        user9_.push(` <@` + users.toString().split(`,`).slice(8, 9).toString() + `>: ` + winner4.toString().split(`,`).slice(num - 9, num - 8).toString() + ` exp`)
                        user10_.push(` <@` + users.toString().split(`,`).slice(9, 10).toString() + `>: ` + winner4.toString().split(`,`).slice(num - 10, num - 9).toString() + ` exp`)

                        console.log(`winner3:`, winner3)
                        console.log(`winner4:`, winner4)
                        console.log(users)

                        let name1 = client.users.cache.find(id => id == users.toString().split(`,`).slice(0, 1).toString())
                        name1 = (name1 == undefined) ? name1 : name1.username
                        let name2 = client.users.cache.find(id => id == users.toString().split(`,`).slice(1, 2).toString())
                        name2 = (name2 == undefined) ? name2 : name2.username
                        let name3 = client.users.cache.find(id => id == users.toString().split(`,`).slice(2, 3).toString())
                        name3 = (name3 == undefined) ? name3 : name3.username
                        let name4 = client.users.cache.find(id => id == users.toString().split(`,`).slice(3, 4).toString())
                        name4 = (name4 == undefined) ? name4 : name4.username
                        let name5 = client.users.cache.find(id => id == users.toString().split(`,`).slice(4, 5).toString())
                        name5 = (name5 == undefined) ? name5 : name5.username
                        let name6 = client.users.cache.find(id => id == users.toString().split(`,`).slice(5, 6).toString())
                        name6 = (name6 == undefined) ? name6 : name6.username
                        let name7 = client.users.cache.find(id => id == users.toString().split(`,`).slice(6, 7).toString())
                        name7 = (name7 == undefined) ? name7 : name7.username
                        let name8 = client.users.cache.find(id => id == users.toString().split(`,`).slice(7, 8).toString())
                        name8 = (name8 == undefined) ? name8 : name8.username
                        let name9 = client.users.cache.find(id => id == users.toString().split(`,`).slice(8, 9).toString())
                        name9 = (name9 == undefined) ? name9 : name9.username
                        let name10 = client.users.cache.find(id => id == users.toString().split(`,`).slice(9, 10).toString())
                        name10 = (name10 == undefined) ? name10 : name10.username

                        const embed = new Discord.EmbedBuilder()
                            .setColor(`0xc5215d`)
                            .setTitle(`Leaderboard (Top 10)`)
                            .addFields({
                                name: `1. ${name1}`,
                                value: `${user1_}`
                            }, {
                                name: `2. ${name2}`,
                                value: `${user2_}`
                            }, {
                                name: `3. ${name3}`,
                                value: `${user3_}`
                            }, {
                                name: `4. ${name4}`,
                                value: `${user4_}`
                            }, {
                                name: `5. ${name5}`,
                                value: `${user5_}`
                            }, {
                                name: `6. ${name6}`,
                                value: `${user6_}`
                            }, {
                                name: `7. ${name7}`,
                                value: `${user7_}`
                            }, {
                                name: `8. ${name8}`,
                                value: `${user8_}`
                            }, {
                                name: `9. ${name9}`,
                                value: `${user9_}`
                            }, {
                                name: `10. ${name10}`,
                                value: `${user10_}`
                            })
                        interaction.editReply({
                            content: `leaderboard created`,
                            embeds: [embed]
                        }).catch(console.error)
                    }, 100)
                    winner4.push(winner3.sort((a, b) => a - b).toString())

                    const l = winner4.toString().replace(/,/g, `*`).replace(/[0-9]/g, ``)

                    const num = l.length + 1

                    ten.push(winner4.toString().split(`,`).slice(num - 10, num - 9)).toString()
                    nine.push(winner4.toString().split(`,`).slice(num - 9, num - 8)).toString()
                    eight.push(winner4.toString().split(`,`).slice(num - 8, num - 7)).toString()
                    seven.push(winner4.toString().split(`,`).slice(num - 7, num - 6)).toString()
                    six.push(winner4.toString().split(`,`).slice(num - 6, num - 5)).toString()
                    five.push(winner4.toString().split(`,`).slice(num - 5, num - 4)).toString()
                    four.push(winner4.toString().split(`,`).slice(num - 4, num - 3)).toString()
                    three.push(winner4.toString().split(`,`).slice(num - 3, num - 2)).toString()
                    two.push(winner4.toString().split(`,`).slice(num - 2, num - 1)).toString()
                    one.push(winner4.toString().split(`,`).slice(num - 1, num - 0)).toString()

                    for (let i = 0; i < 10; i++) {
                        const user = winner4.toString().split(`,`).slice(num - i - 1, num - i).toString()
                        console.log(`user:`, user)
                        if (user1.toString().includes(`exp = ${user}`)) {
                            let length1 = user1.toString().split(`exp = ${user}`).slice(0, 1).toString().replace(/[0-9]/g, ``).replace(/[a-z]/g, ``).replace(/=/g, '').replace(/ /g, ``).toString().length
                            console.log(length1, length1.length)
                            let old_user = user1.toString().split(`exp = ${user}`).slice(0, 1).toString().replace(/lvl = /g, ``).replace(/ /g, ``).toString()
                            let new_user = old_user.toString().split(`,`).slice(length1)
                            console.log(old_user, `\nnew:`, new_user + `\n` + winner4.toString())
                            users.push(new_user)
                        } else if (user2.toString().includes(user)) {
                            let length1 = user2.toString().split(`exp = ${user}`).slice(0, 1).toString().replace(/[0-9]/g, ``).replace(/[a-z]/g, ``).replace(/=/g, '').replace(/ /g, ``).toString().length
                            console.log(length1, length1.length)
                            let old_user = user2.toString().split(`exp = ${user}`).slice(0, 1).toString().replace(/lvl = /g, ``).replace(/ /g, ``).toString()
                            let new_user = old_user.toString().split(`,`).slice(length1)
                            console.log(old_user, `\nnew:`, new_user)
                            users.push(new_user)
                        }
                    }
                }, 600)
            }, 800)
        }
    }
})

client.on("messageCreate", (message) => {
    if (message.channel.type !== ChannelType.DM) {
        if (!message.author.bot) {
            if (message.channel.id == `1037389654422474922` || message.channel.id == `991002298132082789`) {
                message.author.send({
                    content: `you need to use the /game-request command to request a game`,
                    ephemeral: true
                }).catch(console.error)
                setTimeout(delete1, 500)

                function delete1() {
                    message.delete().catch(console.error)
                }
            }
        }
    }
})
//client login  
client.login(token.token)