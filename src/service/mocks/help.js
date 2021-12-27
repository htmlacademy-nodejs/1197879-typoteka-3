const HELP_TEXT = `
--help Получить справочную информацию
--version Вывод версии
--generate Сгенерировать моки
`;

module.exports = {
  name: `--help`,
  run() {
    console.info(HELP_TEXT);
  }
};
