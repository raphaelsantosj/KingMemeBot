'use strict';
const TelegramBot = require('node-telegram-bot-api');
const giphy = require('giphy-api')('dc6zaTOxFJmzC');

module.exports = function()
{

  const token = '397219768:AAF4IBRdvLii3AZMT4p76PUcnNIKExCI_p8';
  const bot = new TelegramBot(token, {polling: true});

  // bot.onText(/\/echo (.+)/, (msg, match) => {
  //   const chatId = msg.chat.id;
  //   const resp = match[1];
  //   bot.sendMessage(chatId, resp);
  // });

  // bot.onText(/\/meme (.+)/, (msg, match) => {

  //   const chatId = msg.chat.id;
  //   const mensagem = match[1];

  //   giphy.search(mensagem, function (err, res) {
  //     var meme = res.data[0].embed_url;
  //     bot.sendMessage(chatId, meme);
  //   });
  // });

  bot.onText(/\/meme (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    const mensagem = match[1];

      giphy.search(mensagem, function (err, res) {
        var meme = res.data[0].embed_url;
        bot.sendDocument(chatId, meme);
        
      })
  });

}