const { GuildMember,PermissionFlagsBits,PermissionsBitField,SlashCommandBuilder,MessageMentions, GatewayIntentBits, Message, Role , CategoryChannel,ChannelType, VoiceChannel,VoiceStateManager,EmbedBuilder, RoleManager, Client,VoiceState, ClientVoiceManager, BaseGuildVoiceChannel, ChannelManager, GuildChannel, GuildChannelManager, ThreadChannel, ChannelFlags, ClientApplication, ClientUser, Guild, Emoji, GuildEmoji, GuildEmojiManager, User, UserFlags, UserManager, ReactionUserManager, WebhookClient, Webhook, ButtonBuilder, ActionRowBuilder, ApplicationCommand, ApplicationCommandManager, GuildApplicationCommandManager, ApplicationCommandPermissionsManager, AttachmentBuilder, BaseGuildTextChannel, GuildEmojiRoleManager, GuildMemberManager, GuildMemberRoleManager, TextChannel, Collector, Collection, } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('add-item')
        .setDescription(`add item to the shop`)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    	.addStringOption(option =>
            option.setName('name')
                .setRequired(true)
                .setDescription('item name'))
        .addNumberOption(option =>
            option.setName(`price`)
                .setRequired(true)
                .setDescription('item price'))
        .addStringOption(option =>
            option.setName(`item_id`)
                .setRequired(true)
                .setDescription('item id'))
        .addStringOption(option =>
            option.setName(`role_id`)
                .setRequired(true)
                .setDescription('role id'))
};