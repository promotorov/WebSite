var TelegramBot = require('node-telegram-bot-api');

var token = '501001012:AAG5DsYxM-b1KOBNA94lntHq8Jkq9T-QKgo';

var bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
    bot.sendMessage(fromId, resp);
});


bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    if(isGreetings(msg.text)) bot.sendMessage(chatId, 'Hi, my friend ;)');
	else if(isBye(msg.text)) bot.sendMessage(chatId, 'Bye, see you later!');
	else bot.sendMessage(chatId, 'Unfortunately i cannot understand you :( Enter /help to learn more');
});

function isGreetings(str) {
	var i;
	for(i = 0; i< greetings.length; i++){
		if(str.includes(greetings[i])) return true;
	}	
	return false;
}

function isBye(str) {
	var i;
	for(i = 0; i< byes.length; i++){
		if(str.includes(byes[i])) return true;
	}	
	return false;
}

let greetings = new Array("hi", "hello", "привет", "greetings", "здравствуйте");
let byes = new Array("buy", "good luck", "пока", "до свидания");
let commands = new Array();