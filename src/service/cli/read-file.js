'use strict';

const chalk = require(`chalk`);
const fs = require(`fs`).promises;

const readFile = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.trim().split(`\n`);
  } catch (error) {
    console.error(chalk.red(error));
    return [];
  }
};

module.exports = {
  readFile,
};
