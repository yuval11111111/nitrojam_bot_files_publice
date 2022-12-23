const { GuildMember,PermissionsBitField,SlashCommandBuilder,MessageMentions, GatewayIntentBits, Message, Role , CategoryChannel,ChannelType, VoiceChannel,VoiceStateManager,EmbedBuilder, RoleManager, Client,VoiceState, ClientVoiceManager, BaseGuildVoiceChannel, ChannelManager, GuildChannel, GuildChannelManager, ThreadChannel, ChannelFlags, ClientApplication, ClientUser, Guild, Emoji, GuildEmoji, GuildEmojiManager, User, UserFlags, UserManager, ReactionUserManager, WebhookClient, Webhook, ButtonBuilder, ActionRowBuilder, ApplicationCommand, ApplicationCommandManager, GuildApplicationCommandManager, ApplicationCommandPermissionsManager, AttachmentBuilder, BaseGuildTextChannel, GuildEmojiRoleManager, GuildMemberManager, GuildMemberRoleManager, TextChannel, Collector, Collection, PermissionFlagsBits, } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('edit')
        .setDescription(`to edit a bot message`)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option =>
            option.setName(`message_id`)
                .setRequired(true)
                .setDescription(`message id`))
    	.addStringOption(option =>
            option.setName('message')
            .setRequired(true)
                .setDescription('new message content'))
};