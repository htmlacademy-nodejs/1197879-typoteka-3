'use strict';

const HELP_TEXT = `
--help Получить справочную информацию
--version Вывод версии
--generate Сгенерировать моки
`;

const chalk = require(`chalk`);

module.exports = {
  name: `--help`,
  run() {
    console.info(chalk.gray(HELP_TEXT));
  }
};
