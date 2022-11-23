import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on('text', async (ctx) => {
  // Using context shortcut
  await ctx.reply(`Hello`);
});

bot.launch();
