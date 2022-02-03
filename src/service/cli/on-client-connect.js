'use strict';

const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};
const MOCK_FILE_NAME = `./src/service/cli/mocks.json`;

const fs = require(`fs`).promises;

const sendResponse = (res, statusCode, message) => {
  const htmlTemplate = `
    <!Doctype html>
      <html lang="ru">
      <head>
        <title>With love from Node</title>
      </head>
      <body>${message}</body>
    </html>`
    .trim();
  res.writeHead(statusCode, {
    'Content-Type': `text/html; charset=UTF-8`,
  });
  res.end(htmlTemplate);
};

module.exports = {
  onClientConnect: async (req, res) => {
    switch (req.url) {
      case `/`:
        try {
          const mocks = await fs.readFile(MOCK_FILE_NAME);
          sendResponse(res, HttpCode.OK, `<ul>${JSON.parse(mocks).map((post) => `<li>${post.title}</li>`).join(``)}</ul>`);
        } catch (error) {
          sendResponse(res, HttpCode.SERVER_ERROR, `Server side issues`);
        }
        break;
      default:
        sendResponse(res, HttpCode.NOT_FOUND, `Not found`);
        break;
    }
  },
};
