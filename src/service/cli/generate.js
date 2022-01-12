'use strict';

const DEFAULT_COUNT = 1;
const ANNOUNCE_NUMBER = 5;
const FULL_TEXT_MAX_NUMBER = 15;
const CATERORY_MAX_NUMBER = 3;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const {randint} = require(`./randint`);
const {readFile} = require(`./read-file`);

const generateMocks = (count, titles, sentences, categories) => {
  const mocks = [];
  for (let i = 0; i < count; i++) {
    const mock = {};
    mock.title = titles[randint(0, titles.length - 1)];
    mock.createdDate = `2021-${randint(9, 12)}-${randint(1, 31)} ${randint(0, 23)}:${randint(0, 59)}:${randint(0, 59)}`;
    mock.announces = ``;
    for (let j = 0; j < ANNOUNCE_NUMBER; j++) {
      mock.announces += `${sentences[randint(0, sentences.length - 1)]} `;
    }
    mock.fullText = ``;
    const fullTextLength = randint(0, FULL_TEXT_MAX_NUMBER);
    for (let j = 0; j < fullTextLength; j++) {
      mock.fullText += `${sentences[randint(0, sentences.length - 1)]} `;
    }
    mock.category = [];
    const categoryNumber = randint(1, CATERORY_MAX_NUMBER);
    for (let j = 0; j < categoryNumber; j++) {
      mock.category.push(categories[randint(0, categories.length - 1)]);
    }
    mocks.push(mock);
  }
  return mocks;
};

module.exports = {
  name: `--generate`,
  async run([countArg]) {
    const titles = await readFile(FILE_TITLES_PATH);
    const sentences = await readFile(FILE_SENTENCES_PATH);
    const categories = await readFile(FILE_CATEGORIES_PATH);
    const count = countArg || DEFAULT_COUNT;
    const mocks = generateMocks(count, titles, sentences, categories);
    try {
      await fs.writeFile(`./src/service/cli/mocks.json`, JSON.stringify(mocks));
      console.info(chalk.green(`Generating completed`));
    } catch (error) {
      console.info(chalk.red(`File writing error`));
    }
  }
};
