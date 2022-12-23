const { GuildMember,PermissionFlagsBits,SlashCommandBuilder,MessageMentions, GatewayIntentBits, Message, Role , CategoryChannel,ChannelType, VoiceChannel,VoiceStateManager,EmbedBuilder, RoleManager, Client,VoiceState, ClientVoiceManager, BaseGuildVoiceChannel, ChannelManager, GuildChannel, GuildChannelManager, ThreadChannel, ChannelFlags, ClientApplication, ClientUser, Guild, Emoji, GuildEmoji, GuildEmojiManager, User, UserFlags, UserManager, ReactionUserManager, WebhookClient, Webhook, ButtonBuilder, ActionRowBuilder, ApplicationCommand, ApplicationCommandManager, GuildApplicationCommandManager, ApplicationCommandPermissionsManager, AttachmentBuilder, BaseGuildTextChannel, GuildEmojiRoleManager, GuildMemberManager, GuildMemberRoleManager, TextChannel, Collector, Collection, } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
        .setName('disconnect')
        .setDefaultMemberPermissions(PermissionFlagsBits.MoveMembers)
        .setDescription('to disconnect a member')
        .addUserOption(option =>
            option.setName('member')
                .setRequired(true)
                .setDescription(`choose a member`)),
};