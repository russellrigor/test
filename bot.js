
// Configure logger settings

logger.remove(logger.transports.Console);

logger.add(new logger.transports.Console, {

colorize: true
});

logger.level = 'debug';

// Initialize Discord Bot

var bot = new Discord.Client({

token: auth.token,

autorun: true

});

bot.on('ready', function (evt) {

logger.info('Connected');

logger.info('Logged in as: ');

logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {

// Our bot needs to know if it will execute a command

// It will listen for messages that will start with `^`

if (message.substring(0, 1) == '^') {

    var args = message.substring(1).split(' ');

    var cmd = args[0];


    args = args.splice(1);

    switch(cmd) {

        // ^day

        case 'day':

            bot.sendMessage({

                to: channelID,

                message: 'What day is it?'

            });

        if (message == "monday") {
            bot.sendMessage({
                 to: channelID,

                message: 'https://cdn.discordapp.com/attachments/837931604717469727/1002420914526367814/trim.DFA79055-B586-4752-A281-BD34328AFF4E.mov'

            });
        break;

        // Just add any case commands if you want to..

     }

 }
});