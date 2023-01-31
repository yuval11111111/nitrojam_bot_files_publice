const {
    GuildMember,
    PermissionFlagsBits,
    SlashCommandBuilder,
    MessageMentions,
    GatewayIntentBits,
    Message,
    Role,
    CategoryChannel,
    ChannelType,
    VoiceChannel,
    VoiceStateManager,
    EmbedBuilder,
    RoleManager,
    Client,
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
} = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('timeout')
        .setDefaultMemberPermissions(PermissionFlagsBits.MuteMembers)
        .setDescription(`to timeout a member`)
        .addUserOption(option =>
            option.setName('member')
            .setRequired(true)
            .setDescription('member'))
        .addStringOption(option =>
            option.setName('units')
            .addChoices({
                name: `שניות`,
                value: "1000"
            }, {
                name: 'דקות',
                value: "60000"
            }, {
                name: 'שעות',
                value: "3600000"
            })
                .setDescription(`time units`)
            .setRequired(true))
        .addNumberOption(option =>
            option.setName(`time`)
            .setRequired(true)
            .setDescription(`time in minutes`)),
};