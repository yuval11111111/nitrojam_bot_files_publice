const { GuildMember,PermissionsBitField,SlashCommandBuilder,MessageMentions, GatewayIntentBits, Message, Role , CategoryChannel,ChannelType, VoiceChannel,VoiceStateManager,EmbedBuilder, RoleManager, Client,VoiceState, ClientVoiceManager, BaseGuildVoiceChannel, ChannelManager, GuildChannel, GuildChannelManager, ThreadChannel, ChannelFlags, ClientApplication, ClientUser, Guild, Emoji, GuildEmoji, GuildEmojiManager, User, UserFlags, UserManager, ReactionUserManager, WebhookClient, Webhook, ButtonBuilder, ActionRowBuilder, ApplicationCommand, ApplicationCommandManager, GuildApplicationCommandManager, ApplicationCommandPermissionsManager, AttachmentBuilder, BaseGuildTextChannel, GuildEmojiRoleManager, GuildMemberManager, GuildMemberRoleManager, TextChannel, Collector, Collection, PermissionFlagsBits, } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('nickname')
        .setDescription(`change someone's nickname`)
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames)
    	.addUserOption(option =>
            option.setName('member')
            .setRequired(true)
            .setDescription('choose a member'))
        .addStringOption(option =>
            option.setName(`setname`)
            .setRequired(true)
            .setDescription(`set member's nickname`)
        ),
};