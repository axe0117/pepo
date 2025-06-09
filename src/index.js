const {Client, IntentsBitField, ActivityType } = require('discord.js');
const {config} = require('dotenv');
const pepo = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});
config();

pepo.on('ready', (c) => {
    console.log(`${c.user.tag} rises from the ashes!`);

    pepo.user.setActivity({
        name: 'migu on Fortnite',
        type: ActivityType.Watching,
    })
});

pepo.on('messageCreate', (message) => {
    if (message.author.self) {
        return;
    }

    if (message.content == "pepo") {
        message.channel.send(':D');
    }

    if (message.author.id == 1361441336397529229) {
        if (message.content == "pepo-chan!") {
            setTimeout(() => {
                message.channel.send('haiiiiiii!');
            }, 1000)
        }
        if (message.content == "nani ga suki???") {
            setTimeout(() => {
                message.channel.send('get out');
            }, 1000)
        }
    }



});

pepo.login(
    process.env.BOT_TOKEN
);
