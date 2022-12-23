const { GuildMember,PermissionFlagsBits,SlashCommandBuilder,MessageMentions, GatewayIntentBits, Message, Role , CategoryChannel,ChannelType, VoiceChannel,VoiceStateManager,EmbedBuilder, RoleManager, Client,VoiceState, ClientVoiceManager, BaseGuildVoiceChannel, ChannelManager, GuildChannel, GuildChannelManager, ThreadChannel, ChannelFlags, ClientApplication, ClientUser, Guild, Emoji, GuildEmoji, GuildEmojiManager, User, UserFlags, UserManager, ReactionUserManager, WebhookClient, Webhook, ButtonBuilder, ActionRowBuilder, ApplicationCommand, ApplicationCommandManager, GuildApplicationCommandManager, ApplicationCommandPermissionsManager, AttachmentBuilder, BaseGuildTextChannel, GuildEmojiRoleManager, GuildMemberManager, GuildMemberRoleManager, TextChannel, Collector, Collection, } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('remove-xp')
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setDescription(`to remove xp to a member`)
        .addUserOption(option =>
            option.setName('member')
                .setRequired(true)
                .setDescription('member'))
        .addNumberOption(option =>
            option.setName(`amount`)
                .setRequired(true)
                .setDescription(`amount of xp to remove`)),
};