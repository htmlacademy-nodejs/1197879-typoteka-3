'use strict';

const DEFAULT_PORT = 3000;
const Flag = {
  LISTENING: `listening`,
  ERROR: `error`,
};

const chalk = require(`chalk`);
const http = require(`http`);
const {onClientConnect} = require(`./on-client-connect.js`);

module.exports = {
  name: `--server`,
  run([portArg]) {
    const port = parseInt(portArg, 10) || DEFAULT_PORT;
    http.createServer(onClientConnect)
      .listen(port)
      .on(Flag.LISTENING, () => console.info(chalk.green(`Ожидаю соединений ${port}`)))
      .on(Flag.ERROR, ({message}) => console.error(chalk.red(`Ошибка при создании сервера: ${message}`)));
  },
};
