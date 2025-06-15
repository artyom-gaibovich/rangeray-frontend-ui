import { Telegraf } from 'telegraf';

class TelegramBotClient {
  private bot: Telegraf;
  private users: Map<string, number | string> = new Map([
    ['artyom', '12312313'],
  ]);

  constructor() {
    this.bot = new Telegraf(process.env.BOT_TOKEN ?? '');
  }
  public async sendMessage(msg: string) {
    await this.bot.telegram.sendMessage(this.users.get('artyom') ?? '', msg);
  }
}

const bot = new TelegramBotClient();

export default bot;
