import { Telegraf, session, Scenes, Composer } from "telegraf";
import dotenv from "dotenv";
dotenv.config({});
const TOKEN = String(process.env.TOKEN);
console.log(TOKEN);
const bot = new Telegraf(TOKEN);
require("./model");
const db = require("./model/index");

const start = require("./controller/start");

const User = db.user;

const newWizard = new Composer();

const menuSchema: any = new Scenes.WizardScene("sceneWizard", newWizard);
const stage: any = new Scenes.Stage([menuSchema]);
bot.use(session());
bot.use(stage.middleware());

bot.start(async (ctx: any) => {
  await start.start(ctx, User);
});

bot.launch();
