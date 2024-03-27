import { Telegraf, Markup } from 'telegraf';
import { message } from 'telegraf/filters';

const token = '7045221052:AAG7zbyVrVw8VVVN1FQaG01SVZwG0-eY9zw';
const webAppUrl = 'https://app-tg-thibi.web.app';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
  ctx.reply(
    'Hажмите на кнопку ниже чтобы, запустить приложение',
    Markup.keyboard([
      Markup.button.webApp('Oтправить сообщение', `${webAppUrl}/feedback`),
    ])
  )
})

bot.on(message('web_app_data'), async ctx => {
  const data = ctx.webAppData.data.json();
  ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message');
});

bot.launch();
