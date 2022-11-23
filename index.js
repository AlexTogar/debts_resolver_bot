import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN);

// bot.on('text', async (ctx) => {
//   // Using context shortcut
//   await ctx.reply(`Hello`);
// });

bot.command('new', async (ctx) => {
  await ctx.reply('you sent:' + ctx.message.text);
});

bot.launch();
