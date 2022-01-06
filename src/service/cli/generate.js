'use strict';

const DEFAULT_COUNT = 1;
const ANNOUNCE_NUMBER = 5;
const FULL_TEXT_MAX_NUMBER = 15;
const CATERORY_MAX_NUMBER = 3;
const TITLES = [
  `Ёлки. История деревьев`,
  `Как перестать беспокоиться и начать жить`,
  `Как достигнуть успеха не вставая с кресла`,
  `Обзор новейшего смартфона`,
  `Лучшие рок-музыканты 20-века`,
  `Как начать программировать`,
  `Учим HTML и CSS`,
  `Что такое золотое сечение`,
  `Как собрать камни бесконечности`,
  `Борьба с прокрастинацией`,
  `Рок — это протест`,
  `Самый лучший музыкальный альбом этого года`,
];
const PHRASES = [
  `Ёлки — это не просто красивое дерево. Это прочная древесина.`,
  `Первая большая ёлка была установлена только в 1938 году.`,
  `Вы можете достичь всего. Стоит только немного постараться и запастись книгами.`,
  `Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете.`,
  `Золотое сечение — соотношение двух величин, гармоническая пропорция.`,
  `Собрать камни бесконечности легко, если вы прирожденный герой.`,
  `Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике.`,
  `Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами.`,
  `Программировать не настолько сложно, как об этом говорят.`,
  `Простые ежедневные упражнения помогут достичь успеха.`,
  `Это один из лучших рок-музыкантов.`,
  `Он написал больше 30 хитов.`,
  `Из под его пера вышло 8 платиновых альбомов.`,
  `Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем.`,
  `Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле?`,
  `Достичь успеха помогут ежедневные повторения.`,
  `Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.`,
  `Как начать действовать? Для начала просто соберитесь.`,
  `Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры.`,
  `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`,
];
const CATEGORIES = [
  `Деревья`,
  `За жизнь`,
  `Без рамки`,
  `Разное`,
  `IT`,
  `Музыка`,
  `Кино`,
  `Программирование`,
  `Железо`,
];

const fs = require(`fs`);
const chalk = require(`chalk`);
const {randint} = require(`./randint`);

const generateMocks = (count) => {
  const mocks = [];
  for (let i = 0; i < count; i++) {
    const mock = {};
    mock.title = TITLES[randint(0, TITLES.length - 1)];
    mock.createdDate = `2021-${randint(9, 12)}-${randint(1, 31)} ${randint(0, 23)}:${randint(0, 59)}:${randint(0, 59)}`;
    mock.announces = ``;
    for (let j = 0; j < ANNOUNCE_NUMBER; j++) {
      mock.announces += `${PHRASES[randint(0, PHRASES.length - 1)]} `;
    }
    mock.fullText = ``;
    const fullTextLength = randint(0, FULL_TEXT_MAX_NUMBER);
    for (let j = 0; j < fullTextLength; j++) {
      mock.fullText += `${PHRASES[randint(0, PHRASES.length - 1)]} `;
    }
    mock.category = [];
    const categoryNumber = randint(1, CATERORY_MAX_NUMBER);
    for (let j = 0; j < categoryNumber; j++) {
      mock.category.push(CATEGORIES[randint(0, CATEGORIES.length - 1)]);
    }
    mocks.push(mock);
  }
  return mocks;
};

module.exports = {
  name: `--generate`,
  async run([countArg]) {
    const count = countArg || DEFAULT_COUNT;
    const mocks = generateMocks(count);
    try {
      await fs.writeFile(`./src/service/cli/mocks.json`, JSON.stringify(mocks), () => {});
      console.info(chalk.green(`Generating completed`));
    } catch (error) {
      console.info(chalk.red(`File writing error`));
    }
  }
};