// JavaScript source code
const token = '560473734:AAFLJ33TLQa7yxmI-WwbhdWJ-nBVbAahKw8';
const request = require('request');
const teleBot = require('node-telegram-bot-api');
const bot = new teleBot(token, { polling: true });
// Polling mode is done so that it's an infinite loop .. always listening

console.log('bot server started...');

// text listener
bot.on('message', (msg) => {
	var Hola = "hola"; // Recognizes your name and says Hello "name"
	if (msg.text.toString().toLowerCase().indexOf(Hola) === 0) {
		bot.sendMessage(msg.chat.id, "Hola " + msg.from.first_name);
	}
});

bot.onText(/\/myid/, (msg) => {
	const chatId = msg.chat.id;
	const myId = msg.from.id;
	bot.sendMessage(chatId, "Tu id es: " + myId);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
	const chatId = msg.chat.id;
	var greetings = "hello"; // Recognizes your name and says Hello "name"
	var prog = "programming";
	var alec = "alec";
	var proj = "projects";
	var bye = "bye";
	var crypto = "cryptocurrency";
	var red = "reddups";
	var what = "what";
	var help = "help";
	var all = "all";


	if (msg.text.toString().toLowerCase().indexOf(greetings) === 0) {
		bot.sendMessage(msg.chat.id, "Hi " + msg.from.first_name + "! My creator asked me to tell you things about him, ALEC, and perhaps if you\'d\
		like I can tell you how he got into PROGRAMMING.");
	}
	else if (msg.text.toString().toLowerCase().trim() == prog)
	{
		bot.sendMessage(msg.chat.id, "Alec has always liked puzzles, and numbers. He then begun his CS career by creating a flappy bird clone through a tutorial by Unity\
		which used C#. Fascinated by how things worked but not quite sure what was truly happening, he began to learn python, and later learned javascript and other languages using codeacademy.com\
		and moved onto different languages afterwards. Later he went back to the flappy bird tutorial and everything made sense that time. It was then that he knew how fascinating\
		all of these 1's and 0's are. I\'m glad because I would not be alive was it not for said passion.");

	}
	else if (msg.text.toString().toLowerCase().trim() == alec) {
		bot.sendMessage(msg.chat.id, "Alec moved to Texas when he was 10 years old from Mexico. He loves Soccer and\
		long walks on the be-- I promised i wouldn't joke about that, sorry. He does enjoy learning,\
		playing guitar, reading, and game development; all while maintaining physical health. He's currently working on\
		some other PROJECTS as well! All in all, he's a good-natured guy whose committed to being\
		successful in his present affairs. Also, he finally graduates at the end of this summer!");
	} 
	else if (msg.text.toString().toLowerCase().trim() == proj) {
		bot.sendMessage(msg.chat.id, "Alec first made a game using GameMaker Studio with his brother, as his brother, Erik, is a graphic designer.\
		They contributed and made a \'bullet hell\' kind of game which they then posted on Reddit's r/games which got hundreds of downloads. He's currently\
		messing with Node.JS, REST, and some more API's to make his CRYPTOCURRENCY search faster. As you may know Alec likes to\
		stay fit so he made a chrome extension --REDDUPS-- which notifies him every \'x\' minutes to hydrate and do some pushups, and then stretch in his long terms of sitting\
		infront of his laptop! Most of this has been done during school on his free time. It\'s a good thing he enjoys this stuff!");
	} 
	else if (msg.text.toString().toLowerCase().trim() == crypto) {
		bot.sendMessage(msg.chat.id, "This is currently what he is working on: https://my-crypto-search.herokuapp.com/ '\working\' being the key-word ;) If you\
		are also into cryptocurrencies, you can type in your cryptocurrency\'s symbol as a query parameter to see it's value! ex: ?symbol=btc");
	} 
	else if (msg.text.toString().toLowerCase().trim() == red) {
		bot.sendMessage(msg.chat.id, "You can search for his extension and install it as long as it's not a mobile device. This idea came from having spent long streaks of hours doing projects and homework\
		for the CS classes he took. Alec told me that he made himself do push-ups every 30 minutes to get up and get the blood flowing, but would often lose track of time. Alarms were a bit inconvenient,\
		so he took matters into his own hands, and made a chrome extension since he has Chrome always open for Youtube music, or podcasts as he works... I think it's an addiction!");
	} 
	else if (msg.text.toString().toLowerCase().trim() == all) {
		bot.sendMessage(msg.chat.id, "Here you go!\nALEC\nPROGRAMMING\nPROJECTS\nCRYPTOCURRENCY\nREDDUPS");
	} 
	else if (msg.text.toString().toLowerCase().trim() == help) {
		bot.sendMessage(msg.chat.id, "You may have noticed when you said \'hello\' that I capitalized some words. Repeat those words for further details :) do you want ALL keywords for quick access?");
	} 
	else if (msg.text.toString().toLowerCase().trim() == what || msg.text.toString().toLowerCase().trim() == "?" || msg.text.toString().toLowerCase().trim() == "commands" || msg.text.toString().toLowerCase().trim() == "instructions") {
		bot.sendMessage(msg.chat.id, "¯\_(ツ)_/¯ Sorry if I\'m not the most artificially intelligent bot. type 'help' for more direct instructions on how I work!");
	}
	else if (msg.text.toString().toLowerCase().trim() == bye) {
		bot.sendMessage(msg.chat.id, "Bye! It was nice talking to you, " + msg.from.first_name + ".");
	} 
	else
		// send a message to the chat acknowledging receipt of their message
		bot.sendMessage(chatId, 'I didn\'t quite understand that, but \'hello\' might be a good start. :)');


});

