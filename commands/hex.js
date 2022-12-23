const { GuildMember,PermissionsBitField,SlashCommandBuilder,MessageMentions, GatewayIntentBits, Message, Role , CategoryChannel,ChannelType, VoiceChannel,VoiceStateManager,EmbedBuilder, RoleManager, Client,VoiceState, ClientVoiceManager, BaseGuildVoiceChannel, ChannelManager, GuildChannel, GuildChannelManager, ThreadChannel, ChannelFlags, ClientApplication, ClientUser, Guild, Emoji, GuildEmoji, GuildEmojiManager, User, UserFlags, UserManager, ReactionUserManager, WebhookClient, Webhook, ButtonBuilder, ActionRowBuilder, ApplicationCommand, ApplicationCommandManager, GuildApplicationCommandManager, ApplicationCommandPermissionsManager, AttachmentBuilder, BaseGuildTextChannel, GuildEmojiRoleManager, GuildMemberManager, GuildMemberRoleManager, TextChannel, Collector, Collection, } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('hex')
        .setDescription('play tic tac toe against someone')
        .addNumberOption(option =>
            option.setName(`red`)
                .setRequired(true)
                .setDescription(`the red value of the RGB color`))
        .addNumberOption(option =>
            option.setName(`green`)
                .setRequired(true)
                .setDescription(`the green value of the RGB color`))
        .addNumberOption(option =>
            option.setName(`blue`)
                .setRequired(true)
                .setDescription(`the blue value of the RGB color`)),
};