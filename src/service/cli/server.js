'use strict';

const DEFAULT_PORT = 3000;
const MOCK_FILE_NAME = `./src/service/cli/mocks.json`;
const HttpCode = {
  NOT_FOUND: 404,
};

const express = require(`express`);
const {readFile} = require(`./read-file.js`);

const app = express();
app.use(express.json());
app.get(`/posts`, async (_req, res) => {
  try {
    let mocks = await readFile(MOCK_FILE_NAME);
    mocks = JSON.parse(mocks);
    res.json(mocks);
  } catch (err) {
    res.send([]);
  }
});

app.use((_req, res) => res
  .status(HttpCode.NOT_FOUND)
  .send(`Not found`));

module.exports = {
  name: `--server`,
  run([portArg]) {
    const port = parseInt(portArg, 10) || DEFAULT_PORT;
    app.listen(port);
  },
};
