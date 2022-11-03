const start = async (ctx: any, User: any) => {
  const id = ctx.update.message.from.id;

  const name =
    ctx.update.message.from.username || ctx.update.message.from.first_name;
  let user = await User.findOne({
    where: {
      telegramId: id,
    },
  });
  // console.log(user);
  if (!user) {
    user = await User.create({
      username: name,
      telegramId: id,
    });
  } else {
    // await User.update({ username: name }, { where: { telegramId: id } });
  }

  const keyboards = [
    [{ text: "Сугъурта хизматлари" }, { text: "Алоқа" }],
    [{ text: "Компания ҳақида" }, { text: "Созламалар" }],
  ];
  const url = `https://ibb.co/pRc9LTT`;
  const text = `🇺🇿«SEMURG SUG'URTA» АЖ ҚК нинг "RAVNAQ" суғурта хизматлари маркизининг расмий ботига хуш келибсиз!`;
  ctx.telegram.sendPhoto(id, url, {
    caption: text,
    reply_markup: {
      keyboard: keyboards,
      resize_keyboard: true,
    },
  });
  return ctx.scene.enter("sceneWizard");
};
module.exports = {
  start,
};
