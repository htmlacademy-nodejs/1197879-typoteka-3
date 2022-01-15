'use strict';

const help = require(`./help`);
const version = require(`./version`);
const server = require(`./server`);
const generate = require(`./generate`);

const Cli = {
  [help.name]: help,
  [version.name]: version,
  [server.name]: server,
  [generate.name]: generate,
};

module.exports = {
  Cli,
};
