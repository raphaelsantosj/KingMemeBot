'use strict';
const TelegramBot = require('node-telegram-bot-api');
const giphy = require('giphy-api')('dc6zaTOxFJmzC');

module.exports = function()
{

  const token = '397219768:AAF4IBRdvLii3AZMT4p76PUcnNIKExCI_p8';
  const bot = new TelegramBot(token, {polling: true});

  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg);
    bot.sendMessage(chatId, 'TUTORIAL\n' + 
      'Para utilizar o bot digite "/meme" seguido do meme que desejar.');
  });

    // bot.onText(/\/meme (.+)/, (msg, match) => {

    //   const chatId = msg.chat.id;
    //   const mensagem = match[1];

    //     giphy.search(mensagem, function (err, res) {
    //       var meme = res.data[0].images.fixed_height.url;
    //       console.log(meme);
    //       bot.sendDocument(chatId, meme);
          
    //     })
    // });

}