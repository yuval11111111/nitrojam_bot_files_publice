const {
    GuildMember,
    PermissionsBitField,
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
    PermissionFlagsBits,
} = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping-access')
        .setDescription(`to allow to someone to ping nitro `)
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels)
        .addStringOption(option =>
            option.setName(`action`)
            .setDescription(`to add access or to remove access`)
            .addChoices({
                name: `add`,
                value: `add`
            }, {
                name: `remove`,
                value: `remove`
            })
            .setRequired(true))
        .addUserOption(option =>
            option.setName(`member`)
            .setDescription(`the member want to do the action too`)
            .setRequired(true)),
};