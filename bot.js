'use strict';
const TelegramBot = require('node-telegram-bot-api');
const giphy = require('giphy-api')('dc6zaTOxFJmzC');
const rn = require('random-number');

module.exports = function()
{

  const token = '397219768:AAF4IBRdvLii3AZMT4p76PUcnNIKExCI_p8';
  const bot = new TelegramBot(token, {polling: true});

  //Mostra o menu de opções ao usuário
  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg.text);
    if(msg.text == '/start' || msg.text == '/help'){
      bot.sendMessage(chatId, 'TUTORIAL\n' + 
        'Para utilizar o bot digite "/meme" seguido do meme que desejar.\n' + 
        'Digite "/help" a qualquer momento para acessar este tutorial');
    }
  });

    //Realiza a busca do meme e retorna para o usuário
    bot.onText(/\/meme (.+)/, (msg, match) => {

      const chatId = msg.chat.id;
      const mensagem = match[1];

      //Gera um número aleatório de 0 à 10 para buscar o meme
      //no json
      const gen = rn.generator({
        min: 0, max: 10, integer: true
      });

      var n = gen();
      console.log(n);

        giphy.search(mensagem, function (err, res) {
          var meme = res.data[n].images.fixed_height.url;
          console.log(meme);
          bot.sendDocument(chatId, meme);
          
        })
    });

}