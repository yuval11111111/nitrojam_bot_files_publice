const { GuildMember,PermissionsBitField,SlashCommandBuilder,MessageMentions, GatewayIntentBits, Message, Role , CategoryChannel,ChannelType, VoiceChannel,VoiceStateManager,EmbedBuilder, RoleManager, Client,VoiceState, ClientVoiceManager, BaseGuildVoiceChannel, ChannelManager, GuildChannel, GuildChannelManager, ThreadChannel, ChannelFlags, ClientApplication, ClientUser, Guild, Emoji, GuildEmoji, GuildEmojiManager, User, UserFlags, UserManager, ReactionUserManager, WebhookClient, Webhook, ButtonBuilder, ActionRowBuilder, ApplicationCommand, ApplicationCommandManager, GuildApplicationCommandManager, ApplicationCommandPermissionsManager, AttachmentBuilder, BaseGuildTextChannel, GuildEmojiRoleManager, GuildMemberManager, GuildMemberRoleManager, TextChannel, Collector, Collection, PermissionFlagsBits, } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('tag')
        .setDescription(`change someone's tag`)
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames)
    	.addUserOption(option =>
            option.setName('member')
            .setRequired(true)
            .setDescription('choose a member'))
        .addStringOption(option =>
            option.setName(`settag`)
            .setRequired(true)
            .setDescription('set a user tag')
        ),
};