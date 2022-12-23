const { GuildMember,PermissionsBitField,SlashCommandBuilder,MessageMentions, GatewayIntentBits, Message, Role , CategoryChannel,ChannelType, VoiceChannel,VoiceStateManager,EmbedBuilder, RoleManager, Client,VoiceState, ClientVoiceManager, BaseGuildVoiceChannel, ChannelManager, GuildChannel, GuildChannelManager, ThreadChannel, ChannelFlags, ClientApplication, ClientUser, Guild, Emoji, GuildEmoji, GuildEmojiManager, User, UserFlags, UserManager, ReactionUserManager, WebhookClient, Webhook, ButtonBuilder, ActionRowBuilder, ApplicationCommand, ApplicationCommandManager, GuildApplicationCommandManager, ApplicationCommandPermissionsManager, AttachmentBuilder, BaseGuildTextChannel, GuildEmojiRoleManager, GuildMemberManager, GuildMemberRoleManager, TextChannel, Collector, Collection, PermissionFlagsBits,ActivityType } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('set-activity')
        .setDescription(`set bot's activity`)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option =>
            option.setName(`activity`)
                .setRequired(true)
                .setDescription('activity content'))
    .addStringOption(option =>
		option.setName('type')
			.setDescription('activity type')
			.setRequired(true)
			.addChoices(
				{ name: 'streaming', value: `streaming` },
				{ name: 'playing', value: `playing` },
                { name: 'listening', value: `listening` },
                { name: 'watching', value: `watching` },
        ))
        .addStringOption(option =>
		option.setName('status')
			.setDescription('status type')
			.addChoices(
				{ name: 'online', value: 'online' },
				{ name: 'idle', value: 'idle' },
                { name: 'do not disturb', value: 'dnd' },
                { name: 'invisible', value: 'invisible' },
			)),
};