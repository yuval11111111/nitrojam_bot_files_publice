const { GuildMember,PermissionsBitField,SlashCommandBuilder,MessageMentions, GatewayIntentBits, Message, Role , CategoryChannel,ChannelType, VoiceChannel,VoiceStateManager,EmbedBuilder, RoleManager, Client,VoiceState, ClientVoiceManager, BaseGuildVoiceChannel, ChannelManager, GuildChannel, GuildChannelManager, ThreadChannel, ChannelFlags, ClientApplication, ClientUser, Guild, Emoji, GuildEmoji, GuildEmojiManager, User, UserFlags, UserManager, ReactionUserManager, WebhookClient, Webhook, ButtonBuilder, ActionRowBuilder, ApplicationCommand, ApplicationCommandManager, GuildApplicationCommandManager, ApplicationCommandPermissionsManager, AttachmentBuilder, BaseGuildTextChannel, GuildEmojiRoleManager, GuildMemberManager, GuildMemberRoleManager, TextChannel, Collector, Collection, } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll-dice')
        .setDescription(`a game of roll dice`)
        .addNumberOption(option =>
            option.setName(`number`)
                .setRequired(true)
                .setDescription(`your guess`))
        .addStringOption(option =>
            option.setName(`difficulty`)
                .setRequired(true)
                .addChoices(
                    { name: `very easy`, value: `10` },
                    { name: `easy`, value: `50` },
                    { name: `normal`, value: `100` },
                    { name: `hard`, value: `500` },
                    { name:`very hard`, value: `1000` },
            )
        .setDescription(`choose a difficulty`)),
};